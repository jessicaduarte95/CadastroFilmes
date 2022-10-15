import React from "react";
import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import Axios, * as others from 'axios';
import { useState } from "react";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CreateIcon from '@mui/icons-material/Create';
import ModalExcluir from "./ModalExcluir";
import ModalEditar from "./ModalEditar";
import { styled } from '@mui/system';

function FilmesCadastrados() {

    const containerStyle = {
        flexDirection: "row"
    }

    const firstPart = {
        backgroundImage: "linear-gradient(90deg, #800080 0%, #C71585 100%)",
        height: "25%",
        padding: "0% 20% 2% 20%",
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
        paddingBottom: "6vh",
        height: "initial"
    }

    const iconsTitle = {
        display: "flex",
        direction: "row",
        justifyContent: "space-between",
        height: "8%"
    }

    const TypographyStyleTitle = styled(Typography)(({theme}) => ({
        height: "14%",
        display: "flex",
        alignItems: "center",
        marginBottom: "0.6rem",
        fontFamily: 'Comic Sans MS, Comic Sans, cursive',
        fontSize: '1.5rem',
        color: "#1E1E1E",
        [theme.breakpoints.down('md')]: {
            fontSize: '1.2rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.9rem',
            fontWeight: "bold"
        }
    }))

    const TypographyStyleCategory = styled(Typography)(({theme}) => ({
        height: "5%",
        display: "flex",
        alignItems: "center",
        marginBottom: "0.6rem",
        fontFamily: 'Comic Sans MS, Comic Sans, cursive',
        fontSize: '1rem',
        color: "#3E3E3E",
        [theme.breakpoints.down('md')]: {
            fontSize: '0.9rem',
        }
    }))

    const TypographyStyleSinopse = styled(Typography)(({theme}) => ({
        height: "40px",
        display: "flex",
        marginBottom: "0.6rem",
        fontFamily: 'Comic Sans MS, Comic Sans, cursive',
        fontSize: '1rem',
        color: "#3E3E3E",
        [theme.breakpoints.down('md')]: {
            fontSize: '0.9rem',
            height: "80px"
        }
    }))

    const TypographyStyleYear = styled(Typography)(({theme}) => ({
        height: "1.5rem",
        marginBottom: "0.6rem",
        fontFamily: 'Comic Sans MS, Comic Sans, cursive',
        fontSize: '1rem',
        color: "#3E3E3E",
        [theme.breakpoints.down('md')]: {
            fontSize: '0.9rem',
        }
    }))

    const GridPrincipalStyle = styled(Grid)(({theme}) => ({
        margin: "3% 0% 3% 20%",
        backgroundColor: "white",
        width: "60%",
        borderRadius: "0.4rem",
        direction: "column",
        flex: "wrap",
        padding: "1.5rem",
        [theme.breakpoints.down('md')]: {
            height: '23rem',
        }
    }));

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
            <Grid item sm={12} style={secondPart}>
                {typeof dataMovies !== "undefined" && dataMovies.map((item) => 
                <GridPrincipalStyle item sm={12} key={item.id}>
                    <ModalExcluir 
                        handleCloseExcluir={handleCloseExcluir} 
                        item={item}
                        openExcluir={openExcluir}
                        setOpenExcluir={setOpenExcluir}
                        id={data.id}
                        setDataMovies={setDataMovies}
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
                        setDataMovies={setDataMovies}
                    />
                    <Grid style={iconsTitle} id={item.id}>
                        <TypographyStyleTitle name="title">{item.title}</TypographyStyleTitle>
                        <Grid item style={{height: "20px", display: "flex", justifyContent: "flex-end", width: "7rem"}}>
                            <CreateIcon name="edit" style={{height: "20px"}} onClick={() => {handleOpenEditar(); setData(item);}}/>
                            <DeleteOutlinedIcon name="delete" style={{height: "20px"}} onClick={() => {handleOpenExcluir(); setData(item);}}/>
                        </Grid>
                    </Grid>
                    <TypographyStyleYear name="year">{item.year}</TypographyStyleYear>
                    <TypographyStyleCategory name="category">{item.category}</TypographyStyleCategory>
                    <TypographyStyleSinopse name="sinopse">{item.sinopse}</TypographyStyleSinopse>
                </GridPrincipalStyle>
                )}
            </Grid>
        </Grid>
        
    )
}

export default FilmesCadastrados;