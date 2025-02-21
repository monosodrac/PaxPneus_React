import React from "react";
import { Carousel } from "react-bootstrap";
import Img1 from '../../assets/imgs/img1-carrossel1.png'
import Img2 from '../../assets/imgs/img2-carrossel1.png'
import Img3 from '../../assets/imgs/img3-carrossel1.png'
import Img4 from '../../assets/imgs/img4-carrossel1.png'
import Img5 from '../../assets/imgs/img5-carrossel1.png'
import Img6 from '../../assets/imgs/img6-carrossel1.png'
import Img7 from '../../assets/imgs/img7-carrossel1.png'

export default function CarouselOne() {
    return (
        <section className="carrosel1">
            <div className="ctner">
                <Carousel interval={3000}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Img1}
                            alt="Imagem Promocional 1"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Img2}
                            alt="Imagem Promocional 2"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Img3}
                            alt="Imagem Promocional 3"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Img4}
                            alt="Imagem Promocional 4"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Img5}
                            alt="Imagem Promocional 5"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Img6}
                            alt="Imagem Promocional 6"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Img7}
                            alt="Imagem Promocional 7"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
    );
}