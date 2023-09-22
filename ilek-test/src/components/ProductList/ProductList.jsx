
import { useState, useEffect } from 'react';

import ImageList from '@mui/material/ImageList';

import {Product} from "../Product/Product";

const styles = {
    produtListSuperContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '40px',
        
    },
    container: {
        width: '80%',
    }
}


export const ProductList = ( ) => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
       fetch('http://0.0.0.0:5005/wines?sort=best_average_rating')
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setProducts(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);
  return (
    <div style={styles.produtListSuperContainer}>
        <div style={styles.container}>
            <ImageList cols={3} gap={8}>
                {products.map((item) => (
                    <Product key={item.id} product={item} />
                ))}
            </ImageList>
        </div>
    </div>
  );
}