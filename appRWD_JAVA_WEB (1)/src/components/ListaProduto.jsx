import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function ListaProduto() {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/appRWD/rest/produto").then((resp)=>{
            return resp.json();
        }).then((resp)=>{
            setProdutos(resp);
            console.log(resp);
        }).catch((error) => {
            console.log(error);
        })
    },[])

    const handleDelete = (id) =>{
      fetch("http://localhost:8080/appRWD/rest/produto/"+id,{
        method:"delete"
      }).then(()=>{
        window.location="/"
      }).catch((error)=>{
        console.log(error);
      })
    }

  return (
    <>
      <h1>Lista Produto</h1>
      <Link to="/incluir">Incluir Produto</Link>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th colSpan='2'>Ação</th>
          </tr>
        </thead>
        <tbody>
        {produtos.map((produto)=>
          <tr  key={produto.codigo}>
            <td>{produto.titulo}</td>
            <td><Link to={`/editar/${produto.codigo}`}>Atualizar</Link></td>
            <td><button title="Excluir" onClick={handleDelete.bind(this,produto.codigo)}>Excluir</button></td>
          </tr>
        )}
        </tbody>
      </table>
    </>
  );
}
