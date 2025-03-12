import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from '../Dashboard'
import Perfil from '../Components/Perfil/Perfil';

export default function Autenticados() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Dashboard />} />

                    <Route path='/perfil' element={<Perfil />} />

                    <Route path='*' element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
