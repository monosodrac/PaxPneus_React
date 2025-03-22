import React, { useContext, useEffect, useState } from "react";
import { AutenticadoContexto } from "../../Contexts/authContexts";
import apiLocal from "../../Api/apiLocal";
import { CirclesWithBar } from "react-loader-spinner";

export default function Ofertas() {
    const { verificarToken, token } = useContext(AutenticadoContexto);
    verificarToken();

    const [dadosProdutos, setDadosProdutos] = useState(['']);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        try {
            async function consultarDadosProdutos() {
                const response = await apiLocal.get('/ConsultarProdutos');
                setDadosProdutos(response.data);
                if (response.data.dados === 'Token Inválido') {
                    setLoad(false);
                } else {
                    setLoad(true);
                    setDadosProdutos(response.data);
                };
            };
            consultarDadosProdutos();
        } catch (err) { };
    }, [token]);

    return (
        <>
            <section className="ofertas">
                <div className="ctner">
                    <div className="title">
                        <h2 className="title">Comece o Ano com Segurança: Renove Seus Pneus em 10x Sem Juros!</h2>
                        <p className="text">Dê a Largada em 2025 com Pneus Novinhos e Parcelamento Sem Juros!</p>
                    </div>
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
                        <div className="ofertas__tabs">
                            {dadosProdutos.map((item, index) => (
                                <div className="ofertas__tabs__item" key={index}>
                                    <img 
                                        src={`http://localhost:3333/files/${item.banner}`}
                                        alt={item.nome}
                                    />
                                    <p className="text"><b>{item.nome}</b></p>
                                    <h2 className="text"><b>{item.preco}</b></h2>
                                    <button>Adicionar ao Carrinho</button>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </section>
        </>
    );
};