import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Inicio from '../Pages/Inicio';
import Login from '../Pages/Login';
import CadUsuarios from '../Pages/Cadastro/Usuarios';
import TempGarantia from '../Pages/Footer/TempGarantia';
import Reembolso from '../Pages/Footer/Reembolso';
import Cookies from '../Pages/Footer/Cookies';

export default function Autenticados() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Inicio />} />

                    <Route path='/login' element={<Login />} />
                    <Route path='/cadastro-usuario' element={<CadUsuarios />} />
                    <Route path='/reembolso-devolucoes' element={<Reembolso />} />
                    <Route path='/tempo-garantia' element={<TempGarantia />} />
                    <Route path='/cookies' element={<Cookies />} />

                    <Route path='*' element={<Inicio />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
