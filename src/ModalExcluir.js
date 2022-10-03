import React, { useEffect } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import { Grid, Typography } from "@mui/material";
import Axios, * as others from 'axios';


function ModalExcluir(props) {

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

    const handleExcluir = async () => {
        console.log("Excluir Filme!", props.id);
        await Axios.delete(`http://localhost:5000/deletarFilme/${props.id}`)
        .then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }

    return(
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.openExcluir}
        onClose={props.handleCloseExcluir}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
        timeout: 500,
        }}
        >
            <Fade in={props.openExcluir}>
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
                        {props.id}
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
                            onClick={props.handleCloseExcluir}>
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
                            onClick={() => {handleExcluir(props.id)}}>
                                Excluir
                        </button>
                    </Grid>
                </Box>
            </Fade>
        </Modal>
    )
}

export default ModalExcluir;