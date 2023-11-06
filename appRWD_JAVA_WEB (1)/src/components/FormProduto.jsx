import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import {Button} from 'react-bootstrap';

export default function FormProduto(){

    let {id} = useParams('editar')
   
    const [novo,setNovo] = useState({
        codigo:id,
        titulo:"",
        preco:"",
        quantidade:""
    })
    
    let metodo = "post"
    if (id) {
        metodo = "put"
    }

    const handleChange = (e) =>{
        setNovo({...novo,[e.target.name]:e.target.value})
    }

    const handleSubmit = e =>{
        e.preventDefault()
        fetch(`http://localhost:8080/appRWD/rest/produto/${id ? id : ""}`,{
            method : metodo,
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(novo)
        }).then(()=>{
            window.location = "/"
        })
    }
    useEffect(()=>{
        if(id){
            
            fetch(`http://localhost:8080/appRWD/rest/produto/${id}`)
            .then((resp)=>{
                return (resp.json())
            }).then(data=>{
                setNovo(data)
            })
        }
    },[id])

 

    return(
    <>
        <h1>Inserir novos Produtos</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="titulo">Produto</label>
            <input type="text" name="titulo" id="titulo" value={novo.titulo} onChange={handleChange} />
            <br/>
            <label htmlFor="quantidade">Quantidade</label>
            <input type="text" name="quantidade" id="quantidade" value={novo.quantidade} onChange={handleChange} />
            <br/>
            <label htmlFor="preco">Preço</label>
            <input type="text" name="preco" id="preco" value={novo.preco} onChange={handleChange} />
            <br/>
            <Button variant="primary">Primary</Button>{' '}
            <Button as="input" type="button" value="Input" />{' '}
            <Button variant="success" type="submit">Inserir</Button>
        </form>
    </>
    )
}