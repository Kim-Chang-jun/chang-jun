import React, { useState } from 'react';
import gaap_Logo from "../Image/gaap_Splash.png";
import '../App.css';

import GaapModal from "./GaapModal";

import GD from "../Image/GD.png";

import QR_B from "../Image/QR_B.png";

import X from "../Image/X.png";
const Project = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const SwitchVisible = () => {
        setModalVisible(!modalVisible)
    }

    const clickEvent = ({ click }) => {
        console.log(click)
    }

    return <div className='Project'>
        <div>
            <p className='Project-Title'>PROJECT</p>
        </div>
        {modalVisible ? <div className='Modal' onClick={() => { SwitchVisible(); }}>
            <div className='Modal-False'> <img className='X_btn' src={X} alt='x' /></div>
            <div className='Modal-Inner'>
                <p>소개</p>
                <div>
                    <GaapModal />
                </div>
            </div>
        </div> : null}
        <div className='Project-List'>
            <div className='Project-Details' onClick={() => { clickEvent({ click: 'gaap' }); SwitchVisible(); }}>
                <img className='App-Logo' src={gaap_Logo} alt='gaap' />
                <div className='App-Text'>
                    <b>Gaap</b>
                    <p>Flutter로 League of Legends 전적 검색 및 게임중인 소환사 비교
                        <br />의사소통을 위한 게시판
                        <br />Firebase를 이용하여 Google Sign in과  League of Legends api에서 받는 소환사명을 연동하여 로그인
                        <br />Google Admob를 이용한 광고
                    </p>
                </div>
            </div>

            <div className='Project-Details' onClick={() => { clickEvent({ click: 'GD' }) }}>
                <img className='App-Logo' src={GD} alt='배달앱' />
                <div className='App-Text'>
                    <b>광주 배달앱</b>
                    <p>React Native로 목업용 앱 제작
                    <br />매장에서 음식 장바구니에 담기까지 개발
                    <br />&nbsp;
                    <br />&nbsp;
                    </p>
                </div>
            </div>
            <div className='Project-Details' onClick={() => { clickEvent({ click: 'gaap' }) }}>
                <img className='App-Logo' src={QR_B} alt='QR_B' />
                <div className='App-Text'>
                    <b>큐아리</b>
                    <p>React Native로 사업자용 개인용 앱 제작
                        <br />개인용 앱으로 QR코드를 인식 하여 사업자용 앱에서 확인
                        <br />개인의 방문기록을 확인 및 삭제 가능
                        <br />시업자용 앱에서 실시간 입장기록 확인
                    </p>
                </div>
            </div>
        </div>
    </div>
}

export default Project;
