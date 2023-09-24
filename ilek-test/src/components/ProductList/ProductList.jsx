
import { useState, useEffect } from 'react';

import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

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
    },
    title: {
        marginLeft: '16px',
        fontSize: '20px',
        fontWeight: '700',
        marginTop: '16px',
    }
}

export const ProductList = ( ) => {
const [filters, applyFitlers] = useState({minPrice: 9, maxPrice: 12});

    const [products, setProducts] = useState([]);
    useEffect(() => {
       fetch(`http://0.0.0.0:5005/wines?sort=best_average_rating&min_price=${filters.minPrice}&max_price=${filters.maxPrice}`)
          .then((response) => response.json())
          .then((data) => {
             setProducts(data);
          })
          .catch((err) => {
             console.log(err.message); // sentry would be a better to handle error management
          });
    }, [filters]);

    return (
        <div style={styles.produtListSuperContainer}>
            <div style={styles.container}>
                <Filters applyFitlers={applyFitlers} /> 
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Typography variant="h4" sx={{   marginLeft: '13px',
    marginTop: '7px' }}>{'Wine List'}</Typography>

                    {products.map((item) => (
                        <Product key={item.name} product={item} />
                        ))}
                </List>
            </div>
        </div>
  );
}