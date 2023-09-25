import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Home() {

    const [camp1, setCamp1] = useState({});
    const [camp2, setCamp2] = useState({});
    const [camp3, setCamp3] = useState({});
    const [camp4, setCamp4] = useState({});
    const [camp5, setCamp5] = useState({});
    const [camp6, setCamp6] = useState({});

    useEffect( () => {
        fetch("/properties?camp=doro")
            .then((res) => res.json())
            .then((data) => setCamp1(data));
    }, []);

    useEffect( () => {
        fetch("/properties?camp=pamir")
            .then((res) => res.json())
            .then((data) => setCamp2(data));
    }, []);

    useEffect( () => {
        fetch("/properties?camp=ajuong")
            .then((res) => res.json())
            .then((data) => setCamp3(data));
    }, []);

    useEffect( () => {
        fetch("/properties?camp=gendrassa")
            .then((res) => res.json())
            .then((data) => setCamp4(data));
    }, []);

    useEffect( () => {
        fetch("/properties?camp=yusuf")
            .then((res) => res.json())
            .then((data) => setCamp5(data));
    }, []);

    useEffect( () => {
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

                        <div>Shape area: {
                            camp1["st_area(shape)"]
                        }</div>

                        <div>Shape length: {
                            camp1["st_length(shape)"]
                        }</div>
                        <div>
                        <img src="/assets/doro.png" alt='picture'/>
                        </div>
                    </Tab>
                    <Tab eventKey="pamir" title="Pamir">
                        <h2>{
                            camp2["name"]
                        }</h2>

                        <div>Site code: {
                            camp2["site_code"]
                        }</div>

                        <div>Shape area: {
                            camp2["st_area(shape)"]
                        }</div>

                        <div>Shape length: {
                            camp2["st_length(shape)"]
                        }</div>
                        <div>
                        <img src="/assets/pamir.png" alt='picture'/>
                        </div>
                    </Tab>
                    <Tab eventKey="ajuong" title="Ajuong Thok">
                        <h2>{
                            camp3["name"]
                        }</h2>

                        <div>Site code: {
                            camp3["site_code"]
                        }</div>

                        <div>Shape area: {
                            camp3["st_area(shape)"]
                        }</div>

                        <div>Shape length: {
                            camp3["st_length(shape)"]
                        }</div>
                        <div>
                        <img src="/assets/ajuong.png" alt='picture'/>
                        </div>
                    </Tab>
                    <Tab eventKey="gendrassa" title="Gendrassa">
                    <h2>{
                            camp4["name"]
                        }</h2>

                        <div>Site code: {
                            camp4["site_code"]
                        }</div>

                        <div>Shape area: {
                            camp4["st_area(shape)"]
                        }</div>

                        <div>Shape length: {
                            camp4["st_length(shape)"]
                        }</div>
                        <div>
                        <img src="/assets/gendrassa.png" alt='picture'/>
                        </div>
                    </Tab>
                    <Tab eventKey="yusuf" title="Yusuf Batil">
                    <h2>{
                            camp5["name"]
                        }</h2>

                        <div>Site code: {
                            camp5["site_code"]
                        }</div>

                        <div>Shape area: {
                            camp5["st_area(shape)"]
                        }</div>

                        <div>Shape length: {
                            camp5["st_length(shape)"]
                        }</div>
                        <div>
                        <img src="/assets/yusuf.png" alt='picture'/>
                        </div>
                    </Tab>
                    <Tab eventKey="kaya" title="Kaya">
                    <h2>{
                            camp6["name"]
                        }</h2>

                        <div>Site code: {
                            camp6["site_code"]
                        }</div>

                        <div>Shape area: {
                            camp6["st_area(shape)"]
                        }</div>

                        <div>Shape length: {
                            camp6["st_length(shape)"]
                        }</div>
                        <div>
                        <img src="/assets/kaya.png" alt='picture'/>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div></>

    );
}

export default Home;