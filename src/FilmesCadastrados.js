import React from "react";
import { Grid, Typography } from "@mui/material";

function FilmesCadastrados() {

    const containerStyle = {
        flexDirection: "row"
    }

    const firstPart = {
        backgroundImage: "linear-gradient(90deg, #800080 0%, #C71585 100%)",
        height: "25%",
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
        display: "flex",
        paddingTop: "6vh",
        flexDirection: "column"
    }

    const filmes = {
        margin: "0vh 45vh 8vh 45vh",
        backgroundColor: "white",
        height: "35%",
        width: "60%",
        borderRadius: "0.4rem",
        direction: "column",
        flex: "wrap"
    }

    const title = {
        height: "13%",
        display: "flex",
        alignItems: "center",
        paddingLeft: "1.5rem",
        marginBottom: "0.3rem",
        fontFamily: 'Comic Sans MS, Comic Sans, cursive',
        fontSize: '1rem',
        color: "#474747",
    }

    return(
        <Grid container style={containerStyle}>
            <Grid item sm={12} style={firstPart}>
                Bóson
            </Grid>
            <Grid item sm={12} style={secondPart}>
                <Grid item sm={12} style={filmes}>
                    <Typography style={title}>Título do Filme</Typography>
                    <Typography style={title}>Ano de Estreia do filme</Typography>
                    <Typography style={title}>Categoria do Filme</Typography>
                    <Typography style={title}>Sinopse</Typography>
                </Grid>
                <Grid container item sm={12} style={filmes}>
                    Teste2
                </Grid>
            </Grid>
        </Grid>
    )
}

export default FilmesCadastrados;