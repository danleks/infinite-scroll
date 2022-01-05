import React, {forwardRef} from 'react'
import { BeerWrapper } from './Beer.styles';

const Beer = forwardRef(({beer: {image_url: imageUrl, abv, name}}, ref) => {
    let word = name.split(' ');
    return (
      <BeerWrapper ref={ref}>
        <img src={imageUrl} alt={name}/>
        <div>
          <span>
          {name.length > 15 ? `${word[0]} ${word[1]}` : name}
          </span>
          <span>ABV: {abv}</span>
        </div>
      </BeerWrapper>
    )
  });
  
export default Beer
  