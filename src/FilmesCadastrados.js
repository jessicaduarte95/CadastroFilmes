import React from "react";
import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import Axios, * as others from 'axios';
import { useState } from "react";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CreateIcon from '@mui/icons-material/Create';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';

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

    const styleModalExcluir = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 410,
        bgcolor: 'background.paper',
        border: 'none',
        borderRadius: "0.3rem",
        boxShadow: 24,
        p: 4,
        height: 150
      };

    const [dataMovies, setDataMovies] = useState();
    const [openExcluir, setOpenExcluir] = useState(false);
    const [idMovie, setIdMovie] = useState("");
    const handleOpenExcluir = () => setOpenExcluir(true);
    const handleCloseExcluir = () => setOpenExcluir(false);   

    const handleExcluir = (item) => {
        console.log("Excluir Filme!");
        // console.log(dataMovies[0].id);
        setIdMovie(item.id)
        console.log(idMovie)
    }

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
                <Grid item sm={12} style={filmes} key={item.id}>
                    <Grid style={iconsTitle} id={item.id}>
                        <Typography name="title" style={title}>{item.title}</Typography>
                        <Grid item style={{height: "20px"}}>
                            <PictureAsPdfIcon style={{height: "20px"}}/>
                            <CreateIcon style={{height: "20px"}}/>
                            <DeleteOutlinedIcon style={{height: "20px"}} onClick={handleOpenExcluir}/>
                        </Grid>
                    </Grid>
                    <Typography name="year" style={text}>{item.year}</Typography>
                    <Typography name="category" style={category}>{item.category}</Typography>
                    <Typography name="sinopse" style={sinopse}>{item.sinopse}</Typography>
                    <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={openExcluir}
                    onClose={handleCloseExcluir}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                    >
                        <Fade in={openExcluir}>
                            <Box sx={styleModalExcluir}>
                                <Typography 
                                id="transition-modal-title" 
                                variant="h6" 
                                component="h2" 
                                style={{height: "20px", 
                                fontFamily: 'Comic Sans MS, Comic Sans, cursive',
                                fontSize: '1.5rem',
                                color: "black"}}>
                                    Excluir Filme
                                </Typography>
                                <Typography 
                                id="transition-modal-description" 
                                sx={{ mt: 2 }} 
                                style={{height: "30px", 
                                fontFamily: 'Comic Sans MS, Comic Sans, cursive',
                                fontSize: '1rem',
                                color: "#1E1E1E",
                                paddingTop: "10px"}}>
                                    Tem certeza que deseja excluir o filme selecionado ?
                                </Typography>
                                <Grid style={{height: "50px", marginTop: "35px"}} flexDirection="row" display="flex" justifyContent="flex-end">
                                    <button 
                                        style={{height: "40px", 
                                        width: "80px", 
                                        marginRight:"0.7rem",
                                        borderRadius: "0.3rem", 
                                        border: "none",
                                        backgroundColor: "#CDCDCD",
                                        fontFamily: 'Apple Chancery, cursive',
                                        }}
                                        onClick={handleCloseExcluir}>
                                            Fechar
                                    </button>
                                    <button 
                                        style={{height: "40px",
                                        width: "80px",
                                        borderRadius: "0.3rem", 
                                        border: "none",
                                        backgroundImage: "linear-gradient(90deg, #800080 0%, #C71585 100%)",
                                        color: 'white',
                                        fontFamily: 'Apple Chancery, cursive'}}
                                        onClick={() => {handleExcluir(item)}}>
                                            Excluir
                                    </button>
                                </Grid>
                            </Box>
                        </Fade>
                    </Modal>
                </Grid>
                )}
            </Grid>
        </Grid>
        
    )
}

export default FilmesCadastrados;