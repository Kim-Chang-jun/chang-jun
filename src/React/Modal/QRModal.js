import React from 'react';

import '../../App.css';
import image0 from "../../Image/QR/0.jpg";
import image1 from "../../Image/QR/1.jpg";
import image2 from "../../Image/QR/2.jpg";
import image3 from "../../Image/QR/3.jpg";
import image4 from "../../Image/QR/4.jpg";
import image5 from "../../Image/QR/5.jpg";
import image6 from "../../Image/QR/6.jpg";
import image7 from "../../Image/QR/7.jpg";
import image8 from "../../Image/QR/8.jpg";
import image9 from "../../Image/QR/9.jpg";
import image10 from "../../Image/QR/10.jpg";
import image11 from "../../Image/QR/11.jpg";
import image12 from "../../Image/QR/12.jpg";
import image13 from "../../Image/QR/13.jpg";
import image14 from "../../Image/QR/14.jpg";
import image15 from "../../Image/QR/15.jpg";


const QRModal = () => {
    const data = [image0, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15]

    return <div>
        <div className='Modal-Image-List' >
            {data.map((imgs, i) => {
                return <img className='Modal-Image' src={imgs} key={i} onClick={() => {
                    window.open(imgs);
                }} />
            })}
        </div>
        <div className='Modal-Details-Text'>
            <p>
                <li>개인용과 사업자용으로 나눠져 있습니다.</li>
                <li>개인용 앱에서 문자를 통해 인증을 받아 로그인 합니다.</li>
                <li>QR코드 인식 후 데이터 전송 및 저장합니다.</li>
                <li>async storage로 방문장소를 관리합니다.</li>
                <li>사업자용 앱에서 QR인식 결과를 확인합니다.</li>
                <li>socket을 이용하여 QR체크시 바로 확인 가능합니다.</li>
                <li>사업자 회원가입 시 네이버OCR, 카카오 우편번호 서비스를 이용합니다.</li>
                <li>같은 사업자 번호로 직원 추가 등록 및 삭제가 가능합니다.</li>
                <li><a href='https://play.google.com/store/apps/details?id=com.loger.business_qari'
                    target='blank'>Google Play</a> 에서 사업주용 확인하기</li>
                <li><a href='https://play.google.com/store/apps/details?id=com.loger.person_qari'
                    target='blank'>Google Play</a> 에서 개인용 확인하기</li>
            </p>
        </div>
    </div >
}

export default QRModal;
