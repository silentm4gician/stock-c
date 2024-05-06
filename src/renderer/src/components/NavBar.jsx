import React from 'react'

const NavBar = () => 
{
    return (
        <div className='p-1 mx-2 font-bold font-mono'>
            <a href="/" className='p-1 hover:bg-cyan-700 rounded-md'>inicio</a>
            <div className="dropdown p-1">
                <span className='p-1 hover:bg-cyan-700 rounded-md'>productos</span>
                <div className="dropdown-content">
                    <a href="/prod/list" className='p-1 hover:bg-cyan-700 rounded-md'>Listar</a>
                    <a href="/prod/add" className='p-1 hover:bg-cyan-700 rounded-md'>Agregar</a>
                    <a href="/prod/del" className='p-1 hover:bg-cyan-700 rounded-md'>Eliminar</a>
                    <a href="/prod/edit" className='p-1 hover:bg-cyan-700 rounded-md'>Editar</a>
                </div>
            </div>
            <div className="dropdown p-1">
                <span className='p-1 hover:bg-cyan-700 rounded-md'>categorias</span>
                <div className="dropdown-content">
                    <a href="/cat/add" className='p-1 hover:bg-cyan-700 rounded-md'>Agregar</a>
                    <a href="/cat/del" className='p-1 hover:bg-cyan-700 rounded-md'>Eliminar</a>
                    <a href="/cat/edit" className='p-1 hover:bg-cyan-700 rounded-md'>Editar</a>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default NavBar