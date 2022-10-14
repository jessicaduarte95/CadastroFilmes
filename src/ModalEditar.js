import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import { Grid, Typography, TextareaAutosize } from "@mui/material";
import { useForm } from "react-hook-form";
import Axios, * as others from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: "0.3rem",
    boxShadow: 24,
    p: 4,
    height: 450,
    paddingTop: "1.6rem"
};

const title = {
    height: "13%",
    display: "flex",
    alignItems: "center",
    marginBottom: "0.3rem",
    fontFamily: 'Comic Sans MS, Comic Sans, cursive',
    fontSize: '1.8rem',
    color: "#474747",
}

const styleData = {
    height: "15.5%", 
    paddingRight: "1.5rem",
    fontFamily: 'Comic Sans MS, Comic Sans, cursive',
    color: "#5F5F5F",
}

const styleAnoCategoria = {
    height: "15.5%", 
    paddingRight: "1.5rem",
    fontFamily: 'Comic Sans MS, Comic Sans, cursive',
    color: "#5F5F5F"
}

function ModalEditar(props) {
  const {handleCloseEditar, setDataMovies} = props;

  const {register, handleSubmit, formState: { erros }} = useForm()

  const onSubmit = async (values) => {
    console.log(values)
    console.log(props.id)
    const id = props.id
    handleCloseEditar()
    await Axios.put(`http://localhost:5000/editarfilme/${id}`, {
      name: values.name,
      year: values.year,
      category: values.category,
      sinopse: values.sinopse
    })
    .then((response) => {
        console.log(response)
        const dados = response.data
        setDataMovies(dados)
    }).catch((error) => {
        console.log(error)
    })
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props.openEditar}
      onClose={props.handleCloseEditar}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
      timeout: 500,
      }}
    >
      <Box>
        <Grid container sx={style}>
          <Grid container item sm={12} style={{height: "100%"}}>
              <Typography style={title}>Editar Filme</Typography>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label style={styleData}>
                        Título
                    <input 
                    type="text" 
                    name="name" 
                    required
                    defaultValue={props.title}
                    style={{height: "30px", width: "100%", marginTop: "0.3rem"}} 
                    {...register("name")}/>
                </label>
                <label style={styleAnoCategoria}>
                        Ano
                    <input 
                    type="number" 
                    name="year"
                    required 
                    defaultValue={props.year}
                    style={{height: "30px", width: "100%", marginTop: "0.3rem"}} 
                    {...register("year")}/>
                </label>
                <label style={styleAnoCategoria}>
                    Categoria
                    <input 
                    type="text" 
                    name="category" 
                    required
                    defaultValue={props.category}
                    style={{height: "30px", width: "100%", marginTop: "0.3rem"}} 
                    {...register("category")}/>
                </label>
                <label style={styleData}>
                    Sinopse
                    <TextareaAutosize
                    maxRows={4}
                    minRows={4}
                    required
                    aria-label="maximum height"
                    placeholder="Descrição do Filme"
                    defaultValue={props.sinopse}
                    name="sinopse"
                    maxLength="280"
                    {...register("sinopse")}
                    style={{ width: "100%", marginTop: "0.3rem" }}
                    />
                </label>
                <Grid style={{height: "50px", marginTop: "5px"}} flexDirection="row" display="flex" justifyContent="flex-end">
                    <button 
                        style={{height: "40px", 
                        width: "80px", 
                        marginRight:"0.7rem",
                        borderRadius: "0.3rem", 
                        border: "none",
                        backgroundColor: "#CDCDCD",
                        fontFamily: 'Apple Chancery, cursive',
                        }}
                        onClick={props.handleCloseEditar}>
                            Fechar
                    </button>
                    <button 
                        type="submit"
                        style={{height: "40px",
                        width: "80px",
                        borderRadius: "0.3rem", 
                        border: "none",
                        backgroundImage: "linear-gradient(90deg, #800080 0%, #C71585 100%)",
                        color: 'white',
                        fontFamily: 'Apple Chancery, cursive'}}>
                            Salvar
                    </button>
                </Grid>
              </form>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}

export default ModalEditar;
