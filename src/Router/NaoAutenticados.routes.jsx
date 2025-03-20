import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Inicio from '../Inicio';
import Login from '../Components/Login';
import CadUsuarios from '../Components/Cadastro/Usuarios';
import TempGarantia from '../Components/Footer/TempGarantia';
import Reembolso from '../Components/Footer/Reembolso';

export default function Autenticados() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Inicio />} />

                    <Route path='/login' element={<Login />} />
                    <Route path='/cadastro-usuario' element={<CadUsuarios />} />
                    <Route path='/reembolso' element={<Reembolso />} />
                    <Route path='/tempo-garantia' element={<TempGarantia />} />

                    <Route path='*' element={<Inicio />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
