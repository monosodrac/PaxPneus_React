import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { AutenticadoContexto } from "../Contexts/authContexts";

export default function Dashboard() {
    const { verificarToken } = useContext(AutenticadoContexto);
    verificarToken();

    return (
        <>
            <h1>Dashboard</h1>
        </>
    );
};