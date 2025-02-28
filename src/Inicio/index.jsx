import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { AutenticadoContexto } from '../Contexts/authContexts';

import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Buscar from '../Components/Buscar'
import Ofertas from '../Components/Ofertas/Ofertas'
import CarouselOne from '../Components/Carousel/CarouselOne'
import Banner1 from '../Components/Banners/BannerOne'
import Banner2 from '../Components/Banners/BannerTwo'
import Banner3 from '../Components/Banners/BannerThree'
import Footer from '../Components/Footer'

export default function Inicio() {

    const { verificarToken } = useContext(AutenticadoContexto);
    verificarToken();

    return (
        <>
            <Header />
            <Hero />
            <Buscar />
            <Ofertas />
            <CarouselOne />
            <Ofertas />
            <Banner1 />
            <Ofertas />
            <Banner2 />
            <Banner3 />
            <Footer />
        </>
    );
};