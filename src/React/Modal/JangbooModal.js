import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../../App.css";
import image0 from "../../Image/Jangboo/0.jpg";
import image1 from "../../Image/Jangboo/1.jpg";
import image2 from "../../Image/Jangboo/2.jpg";
import image3 from "../../Image/Jangboo/3.jpg";
import image4 from "../../Image/Jangboo/4.jpg";
import image5 from "../../Image/Jangboo/5.jpg";
import image6 from "../../Image/Jangboo/6.jpg";

const JangbooModal = () => {
    const data = [image0, image1, image2, image3, image4, image5, image6];

    return (
        <div>
            <div className="Modal-Image-List">
                {data.map((imgs, i) => {
                    return (
                        <LazyLoadImage
                            className="Modal-Image"
                            effect="blur"
                            key={i}
                            src={imgs}
                            onClick={() => {
                                window.open(imgs);
                            }}
                        />
                    );
                })}
            </div>
            <div className="Modal-Details-Text">
                <p>
                    {" "}
                    <li>KAKAO 와 APPLE Login을 이용하여 회원 가입을 합니다.</li>
                    <li>배달의 민족 또는 여신금융협회 등록을 통해 사업장을 등록 후 서비스를 이용하실 수 있습니다.</li>
                    <li>사이트와 연결 성공 시 FCM 을 이용한 메세지를 수신 받으실수 있습니다.</li>
                    <li>useContext, AsyncStorage를 이용하였습니다.</li>
                    <li>
                        <a href="https://play.google.com/store/apps/details?id=com.foodnoteservice.jangboo" target="blank">
                            Google Play
                        </a>{" "}
                        에서 확인하기
                    </li>
                    <li>
                        <a href="https://apps.apple.com/kr/app/%EC%9E%A5%EB%B6%80%EB%8C%80%EC%9E%A5/id1528899382" target="blank">
                            App Store
                        </a>{" "}
                        에서 확인하기
                    </li>
                </p>
            </div>
        </div>
    );
};

export default JangbooModal;
