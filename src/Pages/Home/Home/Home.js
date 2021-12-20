import React, { useEffect, useState } from 'react';
import AppBer1 from '../../../Share/AppBer1';
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
// import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/modules/navigation/navigation.min.css';
import { Col, Container, Row } from 'react-bootstrap';
// import Swiper core and required modules
import SwiperCore, {
  Navigation
} from 'swiper';
import Year from '../Year/Year';
// / install Swiper modules
SwiperCore.use([Navigation]);



const Home = () => {
    const [semesterData11, setSemesterData11] = useState([])
    useEffect(() => {
        fetch("semister11.json")
            .then(res => res.json())
            .then(data => setSemesterData11(data))
    }, [])
    // console.log(semesterData11);

    return (
        <section>
            <Swiper navigation={true} className="mySwiper">
                <SwiperSlide>
                    <Container>
                        <Row sm={1} md={2} className=" py-5 align-items-center">
                            <Col className="banner pe-5">
                                <h1 className="">Hi There Next Top Planner!
                                    Welcome</h1>
                                <p>You can get all the study materials for BURP in PUST
                                    Just follow three simple steps.</p>
                            </Col>
                            <Col>
                            <img className="img-fluid" src="https://i.ibb.co/gPXH6KF/banner1.png" alt="" />
                            </Col>
                        </Row>
                    </Container>
                </SwiperSlide>
                <SwiperSlide>
                    <Container>
                        <Row sm={1} md={2} className=" py-5 align-items-center">
                            <Col className="banner pe-5">
                                <h1 className="">Hi There Next Top Planner!
                                    Welcome</h1>
                                <p>You can get all the study materials for BURP in PUST
                                    Just follow three simple steps.</p>
                            </Col>
                            <Col>
                            <img className="img-fluid" src="https://i.ibb.co/X4vyVdP/about.png" alt="" />
                            </Col>
                        </Row>
                    </Container>
                </SwiperSlide>
            </Swiper>

            {/* about section */}
            <Container>
                <Row xs={1} md={2} className="gy-4" >
                    <Year id='0' td="0" img="https://i.ibb.co/c6XZ3wd/download.jpg" text="1st Year" text1='1st Year 1st Semister' /> 
                    <Year id='1' td="1" img="https://i.ibb.co/c6XZ3wd/download.jpg" text="1st Year"  text1="1st Year 2st Semister" /> 
                    <Year id="2" td="2"  img="https://i.ibb.co/PGM0BFd/download-1.jpg" text="2nd Year" text1='2st Year 1st Semister' /> 
                    <Year id="3" td="3" img="https://i.ibb.co/PGM0BFd/download-1.jpg" text="2nd Year" text1='2st Year 2nd Semister' /> 
                    <Year id='4' td='4' img="https://i.ibb.co/c6XZ3wd/download.jpg" text="3rd Year" text1='3st Year 1st Semister' /> 
                    <Year id='4' td="5" img="https://i.ibb.co/c6XZ3wd/download.jpg" text="3rd Year" text1="3st Year 2st Semister" /> 
                    <Year id='6' td="6" img="https://i.ibb.co/c6XZ3wd/download.jpg" text="4th Year" text1='4st Year 1st Semister' text2="4st Year 2st Semister" /> 
                    <Year id='7' td="7" img="https://i.ibb.co/c6XZ3wd/download.jpg" text="4th Year" text1="4st Year 2st Semister" /> 
                </Row>
            </Container>
        </section>
    );
};

export default Home;