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
                <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {product.appellation}
                    </Typography>
                </React.Fragment>
                }
            />
               <ListItemText
            primary={product.vintage}
            secondary={
                <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {product.type}
                    </Typography>
                </React.Fragment>
                }
            />
               <ListItemText
            primary={'Price'}
            secondary={
                <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {`${product.price}€`}
                    </Typography>
                </React.Fragment>
                }
            />
               <ListItemText
            primary={'Average rating'}
            secondary={
                <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {`${product.average_rating} / 100`}
                    </Typography>
                </React.Fragment>
                }
            />
        </ListItem>
    < Divider variant="inset" component="li" />
  </>
  );
}