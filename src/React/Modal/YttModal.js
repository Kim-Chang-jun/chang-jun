import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../../App.css";
import image0 from "../../Image/Ytt/0.jpg";
import image1 from "../../Image/Ytt/1.jpg";
import image2 from "../../Image/Ytt/2.jpg";
import image3 from "../../Image/Ytt/3.jpg";
import image4 from "../../Image/Ytt/4.jpg";
import image5 from "../../Image/Ytt/5.jpg";

const YttModal = () => {
    const data = [image0, image1, image2, image3, image4, image5];

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
                    <li>geolocation를 이용하여 기기의 lat long 값을 확인합니다.</li>
                    <li>reverse geolocation를 이용하여 기기의 위치명을 얻습니다.</li>
                    <li>openweathermap api를 이용하여 날씨 표시합니다.</li>
                    <li>async storage로 위치를 저장하고 불러옵니다.</li>
                    <li>native ad를사용해서 광고를 표시합니다.</li>
                    <li>
                        <a href="https://play.google.com/store/apps/details?id=com.loger.ytt" target="blank">
                            Google Play
                        </a>{" "}
                        에서 확인하기
                    </li>
                </p>
            </div>
        </div>
    );
};

export default YttModal;
