
import { useState, useEffect } from 'react';

import List from '@mui/material/List';

import {Product} from "../Product/Product";
import {Filters} from "../Filters/Filters";

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
const [filters, applyFitlers] = useState({minPrice: 9, maxPrice: 12});

    const [products, setProducts] = useState([]);
    useEffect(() => {
       fetch(`http://0.0.0.0:5005/wines?sort=best_average_rating&min_price=${filters.minPrice}&max_price=${filters.maxPrice}`)
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setProducts(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, [filters]);
  return (
    <>
    <div style={styles.produtListSuperContainer}>
        <div style={styles.container}>
            <Filters applyFitlers={applyFitlers} /> 
            <List sx={{ width: '100%', maxWidth: 800, bgcolor: 'background.paper' }}>
                {products.map((item) => (
                    <Product key={item.id} product={item} />
                    ))}
            </List>
        </div>
    </div>
</>
  );
}