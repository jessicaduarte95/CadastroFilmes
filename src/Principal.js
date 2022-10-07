import { Grid } from "@mui/material";
import React from "react";
import "./App.css";
import Astronalta from './img/astronalta.png';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const containerStyle = {
  backgroundImage: 'linear-gradient(90deg, #800080 0%, #C71585 100%)',
  alignItems: "center"
}

const buttonStyle = {
  height: "2.9rem",
  maxWidth: "7rem",
  minWidth: "6.5rem",
  padding: "0.5rem",
  borderRadius: "0.4rem",
  marginTop: "1.5rem",
  borderColor: "rgb(63, 63, 63)",
  fontFamily: 'Apple Chancery, cursive',
  color: 'white',
  fontSize: '1.2rem',
  backgroundColor: "rgb(63, 63, 63)"
}

const StyleImg = styled("img")(({theme}) => ({
  width: '100%',
  height: '100%',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    height: "70%",
  },
  [theme.breakpoints.down('sm')]: {
    height: "0%",
    backgroundColor: "black"
  }
}))

const GridStyleTitle = styled(Grid)(({theme}) => ({
  fontFamily: 'Apple Chancery, cursive',
  color: 'white',
  fontSize: '70px',
  paddingLeft: "3.0rem",
  [theme.breakpoints.down('md')]: {
    fontSize: '60px',
    paddingLeft: "5rem"
  }
}))

const GridStyleText = styled(Grid)(({theme}) => ({
  fontFamily: 'Apple Chancery, cursive',
  color: 'white',
  fontSize: '35px',
  paddingLeft: "1.5rem",
  alignContent:'center',
  [theme.breakpoints.down('md')]: {
    fontSize: '35px',
    paddingRight: "3rem"
  }
}))


function Principal() {
  return (
    <Grid container style={containerStyle}>

      <GridStyleTitle item xs={4}
        display="flex"
        justifyContent="center"
        alignItems="center">
        Bem-vindo ao Bóson!
      </GridStyleTitle>

      <Grid item xs={4}
        display="flex"
        justifyContent="center"
        alignItems="center">
        <StyleImg src={Astronalta}></StyleImg>
      </Grid>

      <GridStyleText item xs={4}
        container
        direction="row"
        display="flex"
        justifyContent="center"
        alignItems="center"
        >
        Caso tenha interesse em cadastrar um filme,
        clique no botão abaixo!
        <Link to='/cadastrar' style={{height:"0px"}}>
          <button  style={buttonStyle}>Cadastrar</button>
        </Link>
      </GridStyleText>
    </Grid>
  );
}

export default Principal;