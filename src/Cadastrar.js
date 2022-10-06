import React, { useState } from "react";
import { Grid, Typography, TextareaAutosize} from "@mui/material";
import { Link } from 'react-router-dom';
import  Axios  from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { styled } from '@mui/system';

function Cadastrar() {
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
        maxWidth: "initial",
        display: "flex"
    }

    const filmes = {
        margin: "3% 20% 3% 20%",
        backgroundColor: "white",
        height: "63%",
        width: "100%",
        borderRadius: "0.4rem",
        display: "flex",
        flexDirection: "column",
        flex: "wrap"
    }

    const title = {
        height: "13%",
        display: "flex",
        alignItems: "center",
        paddingLeft: "1.5rem",
        marginBottom: "0.3rem",
        fontFamily: 'Comic Sans MS, Comic Sans, cursive',
        fontSize: '1.8rem',
        color: "#474747",
    }

    const styleData = {
        height: "15.5%", 
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        fontFamily: 'Comic Sans MS, Comic Sans, cursive',
        color: "#5F5F5F"
    }

    const styleAnoCategoria = {
        height: "15.5%", 
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        fontFamily: 'Comic Sans MS, Comic Sans, cursive',
        color: "#5F5F5F"
    }

    const styleButton = {
        height: "30px",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "2.5rem",
        width: "100%"
    }

    const ToastContainerStyle = styled(ToastContainer)({
        '& .Toastify__toast-body' : {
            height: "25px",
        },
        '& .Toastify__close-button' : {
            height: "48px"
        },
        '& .Toastify__toast-body  > div:last-child' : {
            height: "15px",
        },
    });

    const [values, setValues] = useState();
    const handleChangeValues = (value) => 
        setValues(prevValue => ({
            ...prevValue,
            [value.target.name]: value.target.value,
            [value.target.year]: value.target.value,
            [value.target.category]: value.target.value,
            [value.target.sinopse]: value.target.value
        }))

    var text = "Filme cadastrado com sucesso!"

    const notify = () => {
        toast.success(text, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            className: "toast-message",
            style: ({
                height: "60px",
                minHeight: "60px"
                }),
        });
    };

    const handleClickButton = async () => {
        console.log(values)
        await Axios.post("http://localhost:5000/cadastrar", {
            name: values.name,
            year: values.year,
            category: values.category,
            sinopse: values.sinopse
        },
        ).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }

    return(
        <Grid container style={containerStyle}>
            <Grid item sm={12} style={firstPart}>
                Bóson
            </Grid>
            <Grid item sm={12} style={secondPart}>
                <ToastContainerStyle
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                style={{height: "60px"}}
                />
                <Grid container item sm={12} style={filmes}>
                    <Typography style={title}>Cadastrar Filme</Typography>
                    <label style={styleData}>
                        Título
                        <input type="text" name="name" style={{height: "30px", width: "100%", marginTop: "0.3rem"}} onChange={handleChangeValues}/>
                    </label>
                    <label style={styleAnoCategoria}>
                        Ano
                        <input type="text" name="year" style={{height: "30px", width: "100%", marginTop: "0.3rem"}} onChange={handleChangeValues}/>
                    </label>
                    <label style={styleAnoCategoria}>
                        Categoria
                        <input type="text" name="category" style={{height: "30px", width: "100%", marginTop: "0.3rem"}} onChange={handleChangeValues}/>
                    </label>
                    <label style={styleData}>
                        Sinopse
                        <TextareaAutosize
                        maxRows={4}
                        minRows={4}
                        aria-label="maximum height"
                        placeholder="Descrição do Filme"
                        defaultValue=""
                        name="sinopse"
                        style={{ width: "100%", marginTop: "0.3rem" }}
                        onChange={handleChangeValues}
                        />
                    </label>
                    <Grid item style={styleButton}>
                        <Link to='/filmesCadastrados' style={{height:"0px"}}>
                            <button 
                                style={{ height: "40px", 
                                width: "150px", 
                                borderRadius: "0.3rem", 
                                borderColor: "rgb(63, 63, 63)", 
                                backgroundColor: "rgb(63, 63, 63)", 
                                color: 'white',
                                fontFamily: 'Apple Chancery, cursive'}}>
                                Filmes Cadastrados
                            </button>
                        </Link>
                        <button 
                            style={{ height: "40px", 
                            width: "25%", 
                            borderRadius: "0.3rem", 
                            border: "none",
                            backgroundImage: "linear-gradient(90deg, #800080 0%, #C71585 100%)",
                            color: 'white',
                            fontFamily: 'Apple Chancery, cursive'}}
                            onClick={() => {handleClickButton(); notify()}}>
                            Cadastrar
                        </button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default Cadastrar;