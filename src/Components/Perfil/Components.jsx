import React, { useState, useEffect, useContext } from 'react';
import { AutenticadoContexto } from '../../Contexts/authContexts';
import apiLocal from '../../Api/apiLocal';
import { CirclesWithBar } from 'react-loader-spinner'

import Logo from '../../assets/imgs/logo.png';

const NavItem = ({ name, isActive, onClick }) => {
    return (
        <li className={isActive ? 'active' : ''} onClick={onClick}>
            {name}
        </li>
    )
};

const Usuario = () => {
    const { verificarToken, token } = useContext(AutenticadoContexto);
    verificarToken();

    const [dados, setDados] = useState(['']);

    const [load, setLoad] = useState(false);

    const idT = localStorage.getItem('@id');
    const id = JSON.parse(idT);

    useEffect(() => {
        try {
            async function consultarDados() {
                const response = await apiLocal.post('/ConsultarUsuariosUnico', {
                    id
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                // console.log(response.data);
                if (response.data.dados === 'Token Inválido') {
                    setLoad(false);
                } else {
                    setDados(response.data);
                    setLoad(true);
                };
            };
            consultarDados();
        } catch (err) { };
    }, [token, id]);

    return (
        <div className="ctner">
            {load === false ?
                <CirclesWithBar
                    height="100"
                    width="100"
                    color="#4fa94d"
                    outerCircleColor="#ffffff"
                    innerCircleColor="#000000"
                    barColor="#0000ff"
                    ariaLabel="circles-with-bar-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
                :
                <div className="info__usuario">
                    <img src={`http://localhost:3333/files/${dados.foto}`} alt="Foto de Perfil" />
                    <p>
                        <b>Nome: </b>
                        <input
                            type="text"
                            disabled
                            value={dados.nome}
                        />
                    </p>
                    <div className="info__usuario__item1">
                        <p>
                            <b>E-mail: </b>
                            <input
                                type="text"
                                disabled
                                value={dados.email}
                            />
                        </p>
                        <p>
                            <b>Telefone: </b>
                            <input
                                type="text"
                                disabled
                                value="(66) 66666-6666"
                            />
                        </p>
                    </div>
                    <div className="info__usuario__item2">
                        <p>
                            <b>Endereço: </b>
                            <input
                                type="text"
                                disabled
                                value={dados.rua}
                            />
                        </p>
                        <p>
                            <b>Numero: </b>
                            <input
                                type="text"
                                disabled
                                value={dados.numero}
                            />
                        </p>
                        <p>
                            <b>Complemento: </b>
                            <input
                                type="text"
                                disabled
                                value={dados.complemento}
                            />
                        </p>
                    </div>
                    <div className="info__usuario__item3">
                        <p>
                            <b>Bairro: </b>
                            <input
                                type="text"
                                disabled
                                value={dados.bairro}
                            />
                        </p>
                        <p>
                            <b>Cidade: </b>
                            <input
                                type="text"
                                disabled
                                value={dados.cidade}
                            />
                        </p>
                        <p>
                            <b>Estado: </b>
                            <input
                                type="text"
                                disabled
                                value={dados.estado}
                            />
                        </p>
                        <p>
                            <b>CEP: </b>
                            <input
                                type="text"
                                disabled
                                value={dados.cep}
                            />
                        </p>
                    </div>
                </div>
            }
        </div>
    );
};

const Conta = () => (
    <div className="ctner">
        <p>
            <b>Email: </b>
            <input
                type="text"
                disabled
                value="email@email.com"
            />
        </p>
    </div>
);

const Compras = () => (
    <div className="ctner">
        <div className="hist__compras">
            <img src={Logo} alt="" />
            <p>
                <b>Produto: </b>
                <input
                    type="text"
                    disabled
                    value="email@email.com"
                />
            </p>
        </div>
    </div>
);

export { Usuario, Conta, Compras, NavItem };