import React from "react";
import { Grid, Typography, TextareaAutosize } from "@mui/material";

function Cadastrar() {
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
        height: "100%"
    }

    const filmes = {
        margin: "10vh 45vh 10vh 45vh",
        backgroundColor: "white",
        height: "75%",
        width: "100%",
        borderRadius: "0.4rem",
        display: "flex",
        flexDirection: "column",
        flex: "wrap"
    }

    const title = {
        height: "14%",
        display: "flex",
        alignItems: "center",
        paddingLeft: "0.7rem",
        marginBottom: "1rem",
        fontFamily: 'Comic Sans MS, Comic Sans, cursive',
        fontSize: '1.8rem',
        color: "#767676",
    }

    const styleData = {
        height: "15.5%", 
        width: "90%",
        paddingLeft: "0.7rem",
        fontFamily: 'Comic Sans MS, Comic Sans, cursive',
        color: "#767676"
    }

    const styleAnoCategoria = {
        height: "15.5%", 
        width: "90%",
        paddingLeft: "0.7rem",
        fontFamily: 'Comic Sans MS, Comic Sans, cursive',
        color: "#767676"
    }

    return(
        <Grid container style={containerStyle}>
            <Grid item sm={12} style={firstPart}>
                Bóson
            </Grid>
            <Grid item sm={12} style={secondPart}>
                <Grid container item sm={12} style={filmes}>
                    <Typography style={title}>Cadastrar Filme</Typography>
                    <label style={styleData}>
                        Título
                        <input type="text" name="name" style={{height: "30px", width: "100%", marginTop: "0.3rem"}}/>
                    </label>
                    <label style={styleAnoCategoria}>
                        Ano
                        <input type="text" name="name" style={{height: "30px", width: "100%", marginTop: "0.3rem"}}/>
                    </label>
                    <label style={styleAnoCategoria}>
                        Categoria
                        <input type="text" name="name" style={{height: "30px", width: "100%", marginTop: "0.3rem"}}/>
                    </label>
                    <label style={styleData}>
                        Sinopse
                        <TextareaAutosize
                        maxRows={4}
                        minRows={4}
                        aria-label="maximum height"
                        placeholder="Descrição do Filme"
                        defaultValue=""
                        style={{ width: 700, marginTop: "0.3rem" }}
                        />
                    </label>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default Cadastrar;