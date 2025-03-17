import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from '../Dashboard'
import Perfil from '../Components/Perfil/Perfil';
import CadProdutos from '../Components/Cadastro/Produtos';

export default function Autenticados() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Dashboard />} />

                    <Route path='/perfil' element={<Perfil />} />
                    <Route path='/cadastro-produtos' element={<CadProdutos />} />

                    <Route path='*' element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
