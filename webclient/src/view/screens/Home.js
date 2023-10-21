import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Carousel from 'react-bootstrap/Carousel';

function Home() {

    const [camp1, setCamp1] = useState({});
    const [camp2, setCamp2] = useState({});
    const [camp3, setCamp3] = useState({});
    const [camp4, setCamp4] = useState({});
    const [camp5, setCamp5] = useState({});
    const [camp6, setCamp6] = useState({});

    useEffect(() => {
        fetch("/properties?camp=doro")
            .then((res) => res.json())
            .then((data) => setCamp1(data));
    }, []);

    useEffect(() => {
        fetch("/properties?camp=pamir")
            .then((res) => res.json())
            .then((data) => setCamp2(data));
    }, []);

    useEffect(() => {
        fetch("/properties?camp=ajuong")
            .then((res) => res.json())
            .then((data) => setCamp3(data));
    }, []);

    useEffect(() => {
        fetch("/properties?camp=gendrassa")
            .then((res) => res.json())
            .then((data) => setCamp4(data));
    }, []);

    useEffect(() => {
        fetch("/properties?camp=yusuf")
            .then((res) => res.json())
            .then((data) => setCamp5(data));
    }, []);

    useEffect(() => {
        fetch("/properties?camp=kaya")
            .then((res) => res.json())
            .then((data) => setCamp6(data));
    }, []);

    return (
        <><div className="Body">
            <h1>Camps</h1>
            <div class="tabs_camp">
                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="doro" title="Doro">
                        <h2>{
                            camp1["name"]
                        }</h2>

                        <div>Site code: {
                            camp1["site_code"]
                        }</div>

                        <div>
                            Size of area: 1.368 hectares
                        </div>

                        <div>Capacity: 80.000</div>
                        <div>GPS coordinates: N 09.98268, E33.74548</div>
                        <div>
                            <img src="/assets/doro.png" alt='picture' />
                        </div>
                        <div className="carousel">
                            {ShowCarousel(["/assets/doro/doro1.png", "/assets/doro/doro2.png",
                                "/assets/doro/doro3.png", "/assets/doro/doro4.png",
                                "/assets/doro/doro5.png", "/assets/doro/doro6.png",
                                "/assets/doro/doro7.png", "/assets/doro/doro8.png",
                                "/assets/doro/doro9.png", "/assets/doro/doro10.png"
                            ], "Doro", "2022-04-24 to 2022-10-21")}
                        </div>
                    </Tab>
                    <Tab eventKey="pamir" title="Pamir">
                        <h2>{
                            camp2["name"]
                        }</h2>

                        <div>Site code: {
                            camp2["site_code"]
                        }</div>

                        <div>
                            Size of area: 1.879 hectares
                        </div>

                        <div>Capacity: 34.000</div>
                        <div>GPS coordinates: N 09.54537, E30.20519</div>
                        <div>
                            <img src="/assets/pamir.png" alt='picture' />
                        </div>
                        <div className="carousel">
                            {ShowCarousel(["/assets/pamir/pamir1.png", "/assets/pamir/pamir2.png",
                                "/assets/pamir/pamir5.png",
                                "/assets/pamir/pamir7.png", "/assets/pamir/pamir8.png",
                                "/assets/pamir/pamir9.png", "/assets/pamir/pamir10.png"
                            ], "Pamir", "2022-04-25 to 2022-10-22")}
                        </div>
                    </Tab>
                    <Tab eventKey="ajuong" title="Ajuong Thok">
                        <h2>{
                            camp3["name"]
                        }</h2>

                        <div>Site code: {
                            camp3["site_code"]
                        }</div>

                        <div>
                            Size of area: 1.218 hectares
                        </div>

                        <div>Capacity: 55.000</div>
                        <div>GPS coordinates: N 09.967587, E30.278000</div>
                        <div>
                            <img src="/assets/ajuong.png" alt='picture' />
                        </div>
                        <div className="carousel">
                            {ShowCarousel(["/assets/ajuong/ajuong1.png", "/assets/ajuong/ajuong2.png",
                                "/assets/ajuong/ajuong3.png", "/assets/ajuong/ajuong4.png",
                                "/assets/ajuong/ajuong5.png", "/assets/ajuong/ajuong6.png",
                                "/assets/ajuong/ajuong7.png", "/assets/ajuong/ajuong8.png",
                                "/assets/ajuong/ajuong9.png", "/assets/ajuong/ajuong10.png"
                            ], "Ajuong", "2022-04-25 to 2022-10-22")}
                        </div>
                    </Tab>
                    <Tab eventKey="gendrassa" title="Gendrassa">
                        <h2>{
                            camp4["name"]
                        }</h2>

                        <div>Site code: {
                            camp4["site_code"]
                        }</div>

                        <div>
                            Size of area: 385.60 hectares
                        </div>

                        <div>Capacity: 30.000</div>
                        <div>GPS coordinates: N 09.98395, E30.33.61348</div>
                        <div>
                            <img src="/assets/gendrassa.png" alt='picture' />
                        </div>
                        <div className="carousel">
                            {ShowCarousel(["/assets/gendrassa/gendrassa1.png", "/assets/gendrassa/gendrassa2.png",
                                "/assets/gendrassa/gendrassa3.png", "/assets/gendrassa/gendrassa4.png",
                                "/assets/gendrassa/gendrassa5.png", "/assets/gendrassa/gendrassa6.png",
                                "/assets/gendrassa/gendrassa7.png", "/assets/gendrassa/gendrassa8.png",
                                "/assets/gendrassa/gendrassa9.png", "/assets/gendrassa/gendrassa10.png"
                            ], "Gendrassa", "2022-04-21 to 2022-10-24")}
                        </div>
                    </Tab>
                    <Tab eventKey="yusuf" title="Yusuf Batil">
                        <h2>{
                            camp5["name"]
                        }</h2>

                        <div>Site code: {
                            camp5["site_code"]
                        }</div>

                        <div>
                            Size of area: 703 hectares
                        </div>

                        <div>Capacity: 60.000</div>
                        <div>GPS coordinates: N:9.98272 E:33.58442</div>
                        <div>
                            <img src="/assets/yusuf.png" alt='picture' />
                        </div>
                        <div className="carousel">
                            {ShowCarousel(["/assets/yusuf/yusuf1.png", "/assets/yusuf/yusuf2.png",
                                "/assets/yusuf/yusuf3.png", "/assets/yusuf/yusuf4.png",
                                "/assets/yusuf/yusuf5.png", "/assets/yusuf/yusuf6.png",
                                "/assets/yusuf/yusuf7.png", "/assets/yusuf/yusuf8.png",
                                "/assets/yusuf/yusuf9.png", "/assets/yusuf/yusuf10.png"
                            ], "Yusuf", "2022-04-21 to 2022-10-24")}
                        </div>
                    </Tab>
                    <Tab eventKey="kaya" title="Kaya">
                        <h2>{
                            camp6["name"]
                        }</h2>

                        <div>Site code: {
                            camp6["site_code"]
                        }</div>

                        <div>
                            Size of area: 712.50 hectares
                        </div>

                        <div>Capacity: 70.000</div>
                        <div>GPS coordinates: N:10.09349 E:33.57579</div>
                        <div>
                            <img src="/assets/kaya.png" alt='picture' />
                        </div>
                        <div className="carousel">
                            {ShowCarousel(["/assets/kaya/kaya1.png", "/assets/kaya/kaya2.png",
                                "/assets/kaya/kaya3.png", "/assets/kaya/kaya4.png",
                                "/assets/kaya/kaya5.png", "/assets/kaya/kaya6.png",
                                "/assets/kaya/kaya7.png", "/assets/kaya/kaya8.png",
                                "/assets/kaya/kaya9.png", "/assets/kaya/kaya10.png"
                            ], "Kaya", "2022-04-21 to 2022-10-24")}
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div></>

    );
}

export default Home;

function ShowCarousel(imageList, camp, date) {
    const arrayDataItems = imageList.map(image =>
        <Carousel.Item>
            <img src={image} alt='picture' />
            <Carousel.Caption>
                <h3>{camp}</h3>
                <p>{date}</p>
            </Carousel.Caption>
        </Carousel.Item>

    )
    return (

        <Carousel>
            {arrayDataItems}
        </Carousel>
    );
}