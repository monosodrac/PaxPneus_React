import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Inicio from '../Inicio';
import Login from '../Components/Login';
import CadUsuarios from '../Components/Cadastro/Usuarios';

export default function Autenticados() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Inicio />} />

                    <Route path='/login' element={<Login />} />
                    <Route path='/cadastro-usuario' element={<CadUsuarios />} />

                    <Route path='*' element={<Inicio />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
