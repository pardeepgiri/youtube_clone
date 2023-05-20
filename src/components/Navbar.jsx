import React from 'react';
import { Stack } from '@mui/material';
import { Link, } from 'react-router-dom';
import {logo} from '../utils/Constants';
import SearchBar from './SearchBar';

const Navbar = () =>(
    <Stack direction="row" alignItems="center" p={2} sx={{position:'sticky',background:"#fcfcfc", justifyContent:'space-between',
     display:'flex',top:'0'}}>
        <Link to="/" style={{display:'flex',alignItems:'center'}}>
          <img src={logo} alt='logo' height={45}></img>
        </Link>
       <SearchBar />
    </Stack>
)

export default Navbar