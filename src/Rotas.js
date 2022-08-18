import React from "react";
import { Route, Routes } from 'react-router-dom';
import Cadastrar from "./Cadastrar";
import Principal from "./Principal";
import FilmesCadastrados from "./FilmesCadastrados";

function Rotas() {
    return(
        <Routes>
            <Route path="/" element={<Principal/>}/>   
            <Route path="/cadastrar" element={<Cadastrar/>}/>
            <Route path="/filmesCadastrados" element={<FilmesCadastrados/>}/>
        </Routes>
    )
}

export default Rotas;