import { GlobalStyles } from 'assets/styles/GlobaStyles';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Root = () => {
  const [beers, setBeers] = useState([]);
  const [nextPage, setNextPage] = useState(null);
 
  const getMoreBeers = () => {
    getBeers(nextPage)
      .then(res => {
        setBeers([...beers, ...res.data]);
        console.log(beers);
      })
  };

  const getBeers = (page = 1) => {
    setNextPage(page + 1);
    return axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=6`);
  }

  useEffect(() => {
    getBeers()
      .then(res => {
        setBeers(res.data);
      })
  }, []);
  
  return (
    <>
    <GlobalStyles />
    <button onClick={getMoreBeers}>Load more...</button>
      {beers.map(beer => {
        return <span>{beer.name}</span>
      })}
    </>
  )
}

export default Root;
