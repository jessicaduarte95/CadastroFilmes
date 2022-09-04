import React from "react";
import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import Axios, * as others from 'axios';
import { useState } from "react";

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

    const teste = [
        {titulo: "Teste Titulo", 
        ano: "2022",
        categoria: "Teste categoria",
        sinopse: "Teste Sinopse"
        },
        {titulo: "Teste Titulo 2", 
        ano: "2023",
        categoria: "Teste categoria 2",
        sinopse: "Teste Sinopse 2"
        },
        {titulo: "Teste Titulo 3", 
        ano: "2021",
        categoria: "Teste categoria 3",
        sinopse: "Teste Sinopse 3"
        }
    ]

    const [dataMovies, setDataMovies] = useState();

    useEffect(() => {
        Axios.get("http://localhost:5000/filmesCadastrados")
        .then((response) => {
            console.log(response.data);
            setDataMovies(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    return(
        <Grid container style={containerStyle}>
            <Grid item sm={12} style={firstPart}>
                Bóson
            </Grid>
            <Grid item sm={12} style={secondPart}>
                {typeof dataMovies !== "undefined" && dataMovies.map((item, index) => 
                <Grid item sm={12} style={filmes} key={index}>
                    <Typography name="title" style={title}>{item.title}</Typography>
                    <Typography name="year" style={title}>{item.year}</Typography>
                    <Typography name="category" style={title}>{item.category}</Typography>
                    <Typography name="sinopse" style={title}>{item.sinopse}</Typography>
                </Grid>
                )}
            </Grid>
        </Grid>
    )
}

export default FilmesCadastrados;