import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@material-ui/core';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import {useDispatch} from "react-redux";
import { addToken } from '../../../store/tokens/Actions';
import {toast} from 'react-toastify';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history.push('/login')
    }
    var navbarComponent;

    if(token != ""){
        navbarComponent =<AppBar position="static" className="cor-do-navbar">
        <Toolbar variant="dense">

            <Link to='/home' className='text-decotator-none'>
                <Box mx={1} className="pointer" >
                    <Typography variant="h5" color="inherit">
                        <img src="https://i.imgur.com/Z2ge8FQ.png" alt="" />
                    </Typography>
                </Box>
            </Link>

            <Box display="flex" justifyContent="start">
                <Link to='/postagens' className='text-decotator-none'>
                    <Box mx={5} className="pointer-black">
                        <Typography variant="h6" color="inherit">
                            Postagens
                        </Typography>
                    </Box>
                </Link>
                <Link to='/temas' className='text-decotator-none'>
                    <Box mx={5} className="pointer-black">
                        <Typography variant="h6" color="inherit">
                            Temas
                        </Typography>
                    </Box>
                </Link>
                <Link to='/formularioPostagem' className='text-decotator-none'>
                    <Box mx={5} className="pointer-black">
                        <Typography variant="h6" color="inherit">
                            Cadastrar postagem
                        </Typography>
                    </Box>
                </Link>
                <Link to='/formularioTema' className='text-decotator-none'>
                    <Box mx={5} className="pointer-black">
                        <Typography variant="h6" color="inherit">
                            Cadastrar temas
                        </Typography>
                    </Box>
                </Link>


                <Box mx={10} className="pointer-black" onClick={goLogout}>
                    <Typography variant="h6" color="inherit">
                        Logout
                    </Typography>
                </Box>

            </Box>
        </Toolbar>
    </AppBar>
    }
    return (

        <>
        {navbarComponent}
        </>
    )
}

export default Navbar;