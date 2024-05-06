import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import NavBar from "../components/NavBar"
import AddProd from "../pages/AddProd"
import ProdList from "../pages/ProdList"
import DelProd from "../pages/DelProd"
import EditProd from "../pages/EditProd"
import Products from "../pages/Products"
import Categories from "../pages/Categories"

const Router = () => 
{
    return (
    <>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/prod" element={<Products/>}/>
            <Route path="/prod/list" element={<ProdList/>}/>
            <Route path="/prod/add" element={<AddProd/>}/>
            <Route path="/prod/del" element={<DelProd/>}/>
            <Route path="/prod/edit" element={<EditProd/>}/>
            <Route path="/cat" element={<Categories/>}/>
        </Routes>
    </>
    )
}

export default Router