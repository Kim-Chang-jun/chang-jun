import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../../App.css";
import image0 from "../../Image/GD/0.png";
import image1 from "../../Image/GD/1.png";
import image2 from "../../Image/GD/2.png";
import image3 from "../../Image/GD/3.png";
import image4 from "../../Image/GD/4.png";
import image5 from "../../Image/GD/5.png";
import image6 from "../../Image/GD/6.png";

const GDModal = () => {
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
                    <li>JSON에서 받아온 값을 이용하여 매장 목록을 확인합니다.</li>
                    <li>useContext를 이용하여 장바구니 구현했습니다.</li>
                    <li>swiper를 이용한 광고 및 공지사항 화면을 제작했습니다.</li>
                    <li>다양한 navigation을 이용해서 화면이동을 합니다.</li>
                </p>
            </div>
        </div>
    );
};

export default GDModal;
