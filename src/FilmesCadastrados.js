import React from "react";
import { Grid } from "@mui/material";

function FilmesCadastrados() {

    const containerStyle = {
        flexDirection: "column"
    }

    const firstPart = {
        backgroundImage: "linear-gradient(90deg, #800080 0%, #C71585 100%)",
        width: "100%",
        maxWidth: "initial",
        padding: "0vh 45vh 2vh 45vh",
        display: "flex",
        alignItems:"flex-end",
        fontFamily: 'Apple Chancery, cursive',
        fontSize: '4.5rem',
        color: 'white'
    }

    const secondPart = {
        backgroundColor: "#C0C0C0",
        maxWidth: "initial",
        display: "flex"
    }

    const filmes = {
        margin: "10vh 45vh 10vh 45vh",
        backgroundColor: "white",
        height: "70%",
        width: "100%",
        borderRadius: "0.4rem"
    }

    return(
        <Grid container style={containerStyle}>
            <Grid item xs={3} style={firstPart}>
                Bóson
            </Grid>
            <Grid item xs={9} style={secondPart}>
                <Grid item style={filmes}>
                    
                </Grid>
            </Grid>
        </Grid>
    )
}

export default FilmesCadastrados;