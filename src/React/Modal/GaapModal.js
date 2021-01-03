import React from 'react';

import '../../App.css';
import image0 from "../../Image/gaap/0.jpg";
import image1 from "../../Image/gaap/1.jpg";
import image2 from "../../Image/gaap/2.jpg";
import image3 from "../../Image/gaap/3.jpg";
import image4 from "../../Image/gaap/4.jpg";
import image5 from "../../Image/gaap/5.jpg";
import image6 from "../../Image/gaap/6.jpg";
import image7 from "../../Image/gaap/7.jpg";
import image8 from "../../Image/gaap/8.jpg";
import image9 from "../../Image/gaap/9.jpg";


const GaapModal = () => {
    const data = [image0, image1, image2, image3, image4, image5, image6, image7, image8, image9]

    return <div>
        <div className='Modal-Image-List' >
            {data.map((imgs, i) => {
                return <img className='Modal-Image' src={imgs} key={i} onClick={() => {
                    window.open(imgs);
                }} />
            })}
        </div>
        <div className='Modal-Details-Text'>
            <p> <li>Google Sign-In과 LOL소환사명을 사용해서 로그인 합니다.</li>
                <li>로그아웃을 하기 전까지 앱 실행시 자동으로 로그인 합니다.</li>
                <li>소환사명 검색 및 전적 확인을 할수 있습니다.</li>
                <li>게임중인 소환사명을 검색하여 인게임 정보를 볼 수 있습니다.</li>
                <li>챔피언 추천 아이템 스킬트리 승률 등을 볼 수 있습니다.</li>
                <li>게시판을 구현했습니다.</li>
                <li>Google Admob을 이용해서 광고를 보여줍니다.</li>
            </p>
        </div>
    </div>
}

export default GaapModal;
