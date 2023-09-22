import * as React from 'react';

import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import vin1 from '../../assets/vin1.jpg'


export  const Product = ( { product }) => {
  return (
    <ImageListItem key={product.id}>
    <img
      srcSet={`${vin1}?w=248&fit=crop&auto=format&dpr=2 2x`}
      src={`${vin1}?w=248&fit=crop&auto=format`}
      alt={product.title}
      loading="lazy"
    />
    <ImageListItemBar
      title={product.title}
      subtitle={<span>by: {product.author}</span>}
      position="below"
    />
  </ImageListItem>
  );
}