import { useState } from 'react';

import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

export const Filters = ({ applyFitlers }) => {
    const [minPrice, setMinPrice] = useState(9);
    const [maxPrice, setMaxPrice] = useState(12);
 
    return(
    <>
        <Box sx={{ display: 'flex' }}>
            <div style={{ display: 'flex', alignContent:'center' }}>
                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                    <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    label="Amount"
                    onChange={e => setMinPrice(e.target.value)}
                    />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                    <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    label="Amount"
                    onChange={e => setMaxPrice(e.target.value)}
                    />
                </FormControl>
            </div>
                <Button 
                style={{ height: '55px'}}
                    onClick={(e)=>{
                        e.preventDefault();
                        applyFitlers({minPrice, maxPrice});
                    }} 
                    variant="contained"
                    >
                    OK
                </Button>
      </Box>
    </>
    )
}