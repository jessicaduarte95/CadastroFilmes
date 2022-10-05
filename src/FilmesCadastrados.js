import React from "react";
import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import Axios, * as others from 'axios';
import { useState } from "react";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CreateIcon from '@mui/icons-material/Create';
import ModalExcluir from "./ModalExcluir";
import ModalEditar from "./ModalEditar";

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
        display: "flex",
        paddingTop: "6vh",
        flexDirection: "column",
        paddingBottom: "6vh"
    }

    const filmes = {
        margin: "0vh 45vh 8vh 45vh",
        backgroundColor: "white",
        height: "52%",
        width: "60%",
        borderRadius: "0.4rem",
        direction: "column",
        flex: "wrap",
        padding: "1.5rem"
    }

    const iconsTitle = {
        display: "flex",
        direction: "row",
        justifyContent: "space-between",
        height: "12%"
    }

    const title = {
        height: "12%",
        display: "flex",
        alignItems: "center",
        marginBottom: "0.6rem",
        fontFamily: 'Comic Sans MS, Comic Sans, cursive',
        fontSize: '1.5rem',
        color: "#1E1E1E"
    }

    const text = {
        height: "8%",
        display: "flex",
        alignItems: "center",
        marginBottom: "0.6rem",
        fontFamily: 'Comic Sans MS, Comic Sans, cursive',
        fontSize: '1rem',
        color: "#3E3E3E"
    }

    const category = {
        height: "8%",
        display: "flex",
        alignItems: "center",
        marginBottom: "0.6rem",
        fontFamily: 'Comic Sans MS, Comic Sans, cursive',
        fontSize: '1rem',
        color: "#3E3E3E"
    }

    const sinopse = {
        height: "40%",
        display: "flex",
        alignItems: "center",
        marginBottom: "0.6rem",
        fontFamily: 'Comic Sans MS, Comic Sans, cursive',
        fontSize: '1rem',
        color: "#3E3E3E"
    }

    const [dataMovies, setDataMovies] = useState();
    const [openExcluir, setOpenExcluir] = useState(false);
    const [openEditar, setOpenEditar] = useState(false);
    const handleOpenExcluir = () => setOpenExcluir(true);
    const handleCloseExcluir = () => setOpenExcluir(false);   
    const handleOpenEditar = () => setOpenEditar(true);
    const handleCloseEditar = () => setOpenEditar(false);
    const [data, setData] = useState("");

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
            <Grid style={{height: "20px"}}>
                
            </Grid>
            <Grid item sm={12} style={secondPart}>
                {typeof dataMovies !== "undefined" && dataMovies.map((item) => 
                <Grid item sm={12} style={filmes} key={item.id}>
                    <ModalExcluir 
                        handleCloseExcluir={handleCloseExcluir} 
                        item={item}
                        openExcluir={openExcluir}
                        setOpenExcluir={setOpenExcluir}
                        id={data.id}
                    />
                    <ModalEditar 
                        handleCloseEditar={handleCloseEditar}
                        openEditar={openEditar}
                        setOpenEditar={setOpenEditar}
                        id={data.id}
                        title={data.title}
                        year={data.year}
                        category={data.category}
                        sinopse={data.sinopse}
                    />
                    <Grid style={iconsTitle} id={item.id}>
                        <Typography name="title" style={title}>{item.title}</Typography>
                        <Grid item style={{height: "20px"}}>
                            <CreateIcon name="edit" style={{height: "20px"}} onClick={() => {handleOpenEditar(); setData(item);}}/>
                            <DeleteOutlinedIcon name="delete" style={{height: "20px"}} onClick={() => {handleOpenExcluir(); setData(item);}}/>
                        </Grid>
                    </Grid>
                    <Typography name="year" style={text}>{item.year}</Typography>
                    <Typography name="category" style={category}>{item.category}</Typography>
                    <Typography name="sinopse" style={sinopse}>{item.sinopse}</Typography>
                </Grid>
                )}
            </Grid>
        </Grid>
        
    )
}

export default FilmesCadastrados;