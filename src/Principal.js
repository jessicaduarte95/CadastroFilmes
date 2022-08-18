import { Grid } from "@mui/material";
import React from "react";
import "./App.css";
import Astronalta from './img/astronalta.png';
import { Link } from 'react-router-dom';

const containerStyle = {
  backgroundImage: 'linear-gradient(90deg, #800080 0%, #C71585 100%)'
}

const firstPart = {
  fontFamily: 'Apple Chancery, cursive',
  color: 'white',
  fontSize: '70px',
  paddingLeft: "3.0rem"
}

const ThirdPart = {
  fontFamily: 'Apple Chancery, cursive',
  color: 'white',
  fontSize: '35px',
  paddingLeft: "1.5rem",
  alignContent:'center'
}

const imgStyle = {
  maxWidth: '90vh',
  maxHeight: '98vh',
  textAlign: 'center'
}

const buttonStyle = {
  height: "2.9rem",
  padding: "0.5rem",
  borderRadius: "0.4rem",
  marginTop: "1.5rem",
  borderColor: "rgb(63, 63, 63)",
  fontFamily: 'Apple Chancery, cursive',
  color: 'white',
  fontSize: '1.2rem',
  backgroundColor: "rgb(63, 63, 63)"
}

const Teste = () => {
  console.log("Testando Botão")
}

function Principal() {
  return (
    <Grid container style={containerStyle}>

      <Grid item xs={4}
        style={firstPart}
        display="flex"
        justifyContent="center"
        alignItems="center">
        Bem-vindo ao Bóson!
      </Grid>

      <Grid item xs={4}
        display="flex"
        justifyContent="center"
        alignItems="center">
        <img src={Astronalta} style={imgStyle}></img>
      </Grid>

      <Grid item xs={4}
        style={ThirdPart}
        container
        direction="row"
        display="flex"
        justifyContent="center"
        alignItems="center"
        >
        Caso tenha interesse em cadastrar um filme
        clique no botão abaixo!
        <Link to='/cadastrar' style={{height:"0px"}}>
          <button  style={buttonStyle}>Cadastrar</button>
        </Link>
      </Grid>
    </Grid>
  );
}

export default Principal;