import { useState } from 'react';

import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import { Title } from "../Title/Title";

const styles= {
    subContainer:{
        display: 'flex',
    },
    container: {
        marginLeft: '6px'
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        height:'72px' 
    },
    button: {
        height: '55px',
    }
}


export const Filters = ({ applyFitlers }) => {
    const [minPrice, setMinPrice] = useState(9);
    const [maxPrice, setMaxPrice] = useState(12);
 
    return(
    <div style={styles.container}>
        <Title title={'Filters'} />
        <Box sx={styles.subContainer}>
            <div style={styles.subContainer}>
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
            <div style={styles.buttonContainer}>
                <Button 
                style={styles.button}
                    onClick={(e)=>{
                        e.preventDefault();
                        applyFitlers({minPrice, maxPrice});
                    }} 
                    variant="contained"
                    >
                    OK
                </Button>
            </div>
      </Box>
    </div>
    )
}