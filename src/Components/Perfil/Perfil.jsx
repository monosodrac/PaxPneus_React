import React, {useContext, useState, useEffect} from 'react';
import {AutenticadoContexto} from '../../Contexts/authContexts';
import apiLocal from '../../Api/apiLocal';

export default function Perfil() {
    const {verificarToken, token} = useContext(AutenticadoContexto);
    verificarToken();

    const [dados, setDados] = useState(['']);

    // useEffect(() => {
    //     async function consultarDados() {};
    // }, []);

    return (
        <>
            <section className='perfil'>
                <aside>
                    <nav>
                        <ul>
                            <li>
                                Informações do usuário
                            </li>
                            <li>
                                Informações da conta
                            </li>
                            <li>
                                Histórico de compras
                            </li>
                        </ul>
                    </nav>
                </aside>
                <div className="ctner">
                    {/* <img src={} alt="" /> */}
                </div>
            </section>
        </>
    );
};