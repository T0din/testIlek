import * as React from 'react';

import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';


export  const Product = ( { product }) => {
  return (
    <>
        <ListItem alignItems="flex-start">
            <ListItemText
            primary={product.name}
            secondary={
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {product.appellation}
                    </Typography>
                }
            />
               <ListItemText
            primary={product.vintage}
            secondary={
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {product.type}
                    </Typography>
                }
            />
               <ListItemText
            primary={'Price'}
            secondary={
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {`${product.price}€`}
                    </Typography>
                }
            />
               <ListItemText
            primary={'Average rating'}
            secondary={
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {`${product.average_rating} / 100`}
                    </Typography>
                }
            />
        </ListItem>
        <Divider variant="inset" component="li" />
  </>
  );
}