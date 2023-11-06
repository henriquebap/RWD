import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import ListaProduto from './components/ListaProduto'
import FormProduto from './components/FormProduto'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListaProduto />}/>
          <Route path="/editar/:id" element={<FormProduto/>}/>
          <Route path="/incluir" element={<FormProduto/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
