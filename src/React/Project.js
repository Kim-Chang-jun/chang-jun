import React, { useState, useEffect } from "react";
import gaap_Logo from "../Image/gaap_Splash.png";
import { useSpring, animated } from "react-spring";

import "../App.css";

import GaapModal from "./Modal/GaapModal";
import GDModal from "./Modal/GDModal";
import YttModal from "./Modal/YttModal";
import QRModal from "./Modal/QRModal";

import GD from "../Image/GD.png";
import Ytt from "../Image/Ytt.png";
import QR_B from "../Image/QR_B.png";

import X from "../Image/X.png";
const Project = ({ projectAni, Ani }) => {
    const [modalVisibleGaap, setModalVisibleGaap] = useState(false);
    const [modalVisibleGD, setModalVisibleGD] = useState(false);
    const [modalVisibleYtt, setModalVisibleYtt] = useState(false);
    const [modalVisibleQR, setModalVisibleQR] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);
    const [clickResult, setClickResult] = useState("");
    const SwitchVisible = ({ click }) => {
        if (click == "gaap") setModalVisibleGaap(!modalVisibleGaap);
        if (click == "GD") setModalVisibleGD(!modalVisibleGD);
        if (click == "Ytt") setModalVisibleYtt(!modalVisibleYtt);
        if (click == "QR") setModalVisibleQR(!modalVisibleQR);
        setModalVisible(!modalVisible);
    };

    const clickEvent = ({ click }) => {
        console.log(click);
        SwitchVisible({ click: click });
        setClickResult(click);
    };

    useEffect(() => {
        if (modalVisible) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "unset";
    }, [modalVisible]);

    return (
        <animated.div className="Project" style={projectAni}>
            {modalVisible ? (
                <div className="Modal">
                    <div className="Modal-False">
                        <img
                            className="X_btn"
                            src={X}
                            alt="x"
                            onClick={() => {
                                SwitchVisible({ click: clickResult });
                            }}
                        />
                    </div>
                    <div className="Modal-Inner">
                        <p className="Modal-Inner-Title">More Information</p>
                        <div>
                            {clickResult == "gaap" && <GaapModal />}
                            {clickResult == "GD" && <GDModal />}
                            {clickResult == "Ytt" && <YttModal />}
                            {clickResult == "QR" && <QRModal />}
                        </div>
                    </div>
                </div>
            ) : null}
            <div>
                <p className="Project-Title">PROJECT</p>
            </div>
            <div className="Project-List">
                <animated.div
                    style={Ani[0]}
                    className="Project-Details"
                    onClick={() => {
                        clickEvent({ click: "gaap" });
                    }}
                >
                    <img className="App-Logo" src={gaap_Logo} alt="gaap" />
                    <div className="App-Text">
                        <p className="App-Text-Title">Gaap</p>
                        <p>
                            League of Legends 전적 검색 및 게임중인 소환사 비교 + 커뮤니티
                            <br />
                            2020/05 ~ 2020/07
                            <br />
                            Flutter
                        </p>
                    </div>
                </animated.div>

                <animated.div
                    style={Ani[1]}
                    className="Project-Details"
                    onClick={() => {
                        clickEvent({ click: "GD" });
                    }}
                >
                    <img className="App-Logo" src={GD} alt="배달앱" />
                    <div className="App-Text">
                        <p className="App-Text-Title">배달 앱</p>
                        <p>
                            매장에서 음식 장바구니에 담기까지 개발
                            <br />
                            2020/08 ~ 2020/09
                            <br />
                            React Native
                        </p>
                    </div>
                </animated.div>
                <animated.div
                    style={Ani[2]}
                    className="Project-Details"
                    onClick={() => {
                        clickEvent({ click: "Ytt" });
                    }}
                >
                    <img className="App-Logo" src={Ytt} alt="Ytt" />
                    <div className="App-Text">
                        <p className="App-Text-Title">어제 오늘 내일</p>
                        <p>
                            어제 오늘 내일에 대한 날씨를 확인하는 앱
                            <br />
                            2020/07 ~ 2020/09
                            <br />
                            React Native
                        </p>
                    </div>
                </animated.div>
                <animated.div
                    style={Ani[3]}
                    className="Project-Details"
                    onClick={() => {
                        clickEvent({ click: "QR" });
                    }}
                >
                    <img className="App-Logo" src={QR_B} alt="QR_B" />
                    <div className="App-Text">
                        <p className="App-Text-Title">QR 체크 앱</p>
                        <p>
                            매장에 QR코드를 부착하여 이용하는 개인용, 사업자용 앱
                            <br />
                            2020/10 ~ 2020/12
                            <br />
                            React Native
                        </p>
                    </div>
                </animated.div>
                <animated.div style={Ani[4]} className="Project-Details">
                    <div className="App-Logo" alt="etc" />
                    <div className="App-Text">
                        <p className="App-Text-Title">ETC</p>
                        <p>
                            Flutter {">"} Google Maps api를 이용한 위치 확인 및 경로 구하기
                            <br />
                            React Native {">"} firebase를 이용하여 google 및 Apple Authentication, 카카오 로그인
                            <br />
                            Python {">"} face recognition을 이용한 영상 및 사진에서 얼굴 검출, 중고나라 + 번개장터 크롤링을 통한 에어팟 중고거래 가격 예측
                            <br />
                        </p>
                    </div>
                </animated.div>
            </div>
        </animated.div>
    );
};

export default Project;
