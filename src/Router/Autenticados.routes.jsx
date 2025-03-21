import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from '../Dashboard'
import Perfil from '../Components/Perfil/Perfil';
import CadProdutos from '../Components/Cadastro/Produtos';
import TempGarantia from '../Components/Footer/TempGarantia';
import Reembolso from '../Components/Footer/Reembolso';
import Cookies from '../Components/Footer/Cookies';

export default function Autenticados() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Dashboard />} />

                    <Route path='/perfil' element={<Perfil />} />
                    <Route path='/cadastro-produtos' element={<CadProdutos />} />
                    <Route path='/reembolso-devolucoes' element={<Reembolso />} />
                    <Route path='/tempo-garantia' element={<TempGarantia />} />
                    <Route path='/cookies' element={<Cookies />} />

                    <Route path='*' element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
