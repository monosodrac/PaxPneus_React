import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Inicio from '../Inicio';

export default function Autenticados() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Inicio />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
