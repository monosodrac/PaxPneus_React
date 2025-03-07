import React, { useContext, useState, useEffect } from 'react';
import { AutenticadoContexto } from '../../Contexts/authContexts';
import apiLocal from '../../Api/apiLocal';

import { NavItem, Usuario, Conta, Compras } from './Components'

export default function Perfil() {
    const { verificarToken } = useContext(AutenticadoContexto);
    verificarToken();

    const [activeIndex, setActiveIndex] = useState(0);
    const navItems = ['Informações do usuario', 'Informações da conta', 'Histórico de compras'];

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    const renderizar = () => {
        switch (activeIndex) {
            case 0:
                return <Usuario />
            case 1:
                return <Conta />
            case 2:
                return <Compras />
        };
    };

    return (
        <>
            <section className='perfil'>
                <aside>
                    <nav>
                        <ul>
                            {navItems.map((item, index) => (
                                <NavItem
                                    key={index}
                                    name={item}
                                    isActive={index === activeIndex}
                                    onClick={() => handleClick(index)}
                                />
                            ))}
                        </ul>
                    </nav>
                </aside>
                {renderizar()}
            </section>
        </>
    );
};