import React from "react";

export default function Buscar() {
    return (
        <>
            <section className="buscar">
                <div className="ctner">
                    <div className="buscar__tabs">
                        <div className="buscar__tabs__item">
                            <div>A</div>
                            <select name="" id="">
                                <option value="">Largura</option>
                                <option value="">155</option>
                                <option value="">165</option>
                                <option value="">175</option>
                                <option value="">185</option>
                                <option value="">195</option>
                                <option value="">205</option>
                                <option value="">215</option>
                                <option value="">225</option>
                                <option value="">235</option>
                                <option value="">245</option>
                                <option value="">255</option>
                                <option value="">265</option>
                                <option value="">275</option>
                                <option value="">285</option>
                                <option value="">295</option>
                                <option value="">305</option>
                                <option value="">31</option>
                                <option value="">315</option>
                                <option value="">33</option>
                            </select>
                        </div>
                        <div className="buscar__tabs__item">
                            <div>B</div>
                            <select name="" id="">
                                <option value="">Perfil</option>
                            </select>
                        </div>
                        <div className="buscar__tabs__item">
                            <div>C</div>
                            <select name="" id="">
                                <option value="">Aro</option>
                            </select>
                        </div>
                        <button>Buscar</button>
                    </div>
                </div>
            </section>
        </>
    );
};