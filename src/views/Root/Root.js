import { GlobalStyles } from 'assets/styles/GlobaStyles';
import axios from 'axios';
import Beer from 'components/molecules/Beer/Beer';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MainWrapper } from './Root.styles';
import SyncLoader from "react-spinners/SyncLoader";
import { css } from "@emotion/react";
// import debounce from 'lodash.debounce';

const override = css`
  display: flex;
  justify-content: center;
`;

const Root = () => {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const lastElemRef = useRef(null);
  const observer = useRef(null);

  const getBeers = (page = 1) => {
    return axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=6`, {
      params: {
        page,
        nextPage: page + 1
      }
    })
  };
  
  const getMoreBeers = useCallback(() => {
    if (!page || isLoading) return;
    setIsLoading(true);
    getBeers(page)
    .then(res => {
      setBeers(b => [...b, ...res.data]);
      setPage(res.config.params.nextPage);
      setIsLoading(false);
      if (res.config.params.nextPage > 10) setPage(null);
    })
  }, [page, isLoading]);

  useEffect(() => {
    getBeers()
      .then(res => {
        setBeers(res.data);
        setPage(res.config.params.nextPage)
      })
  }, []);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      let el = entries[0];
      if (el.isIntersecting) {
        getMoreBeers();
      }
    }, {
      root: null,
      threshold: 1
    });

    if (lastElemRef.current) {
      observer.current.observe(lastElemRef.current);
    }

    return () => observer.current.disconnect();
  }, [getMoreBeers])

  return (
    <>
    <GlobalStyles />
    {/* <button onClick={getMoreBeers}>Load more...</button> */}
    <MainWrapper>
      {beers.map((beer,i) => {
        if (i === beers.length - 1) {
          return <Beer ref={lastElemRef} key={beer.id} beer={beer}/>
        }
        return <Beer key={beer.id} beer={beer}/>
      })}
      </MainWrapper>
      {isLoading ? <SyncLoader color='#ffd121' loading={isLoading} css={override} size={15} /> : null}
    </>
  )
}

export default Root;
