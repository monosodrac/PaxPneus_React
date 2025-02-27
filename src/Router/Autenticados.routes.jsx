import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Dashboard from '../Dashboard'

export default function Autenticados() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Dashboard />} />

                    <Route path='*' element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
