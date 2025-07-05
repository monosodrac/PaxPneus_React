import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from '../Pages/Dashboard'
import Perfil from '../Pages/Perfil/Perfil';
import Carrinho from '../Pages/Carrinho/Carrinho';

import CadProdutos from '../Pages/Cadastro/Produtos';
import TempGarantia from '../Pages/TempGarantia';
import Reembolso from '../Pages/Reembolso';
import Cookies from '../Pages/Cookies';

export default function Autenticados() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Dashboard />} />

                    <Route path='/perfil' element={<Perfil />} />
                    <Route path='/cadastro-produtos' element={<CadProdutos />} />
                    <Route path='/carrinho' element={<Carrinho />} />
                    <Route path='/reembolso-devolucoes' element={<Reembolso />} />
                    <Route path='/tempo-garantia' element={<TempGarantia />} />
                    <Route path='/cookies' element={<Cookies />} />

                    <Route path='*' element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
