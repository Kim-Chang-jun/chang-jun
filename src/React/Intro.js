import React from "react";
import "../App.css";
import firebase from "../Image/firebase.png";
import flutter from "../Image/Flutter.png";
import reactnative from "../Image/React-Native.png";
import js from "../Image/JS.png";
import python from "../Image/Python.png";
import git from "../Image/git.png";
import html from "../Image/Html.png";
import css from "../Image/Css.png";
import me from "../Image/Me.bmp";
const Intro = () => {
    return (
        <div className="Intro">
            <div>
                <p className="Intro-Title">ABOUT ME</p>
            </div>
            <div className="Intro-Card-Div">
                <div className="card-a">
                    <img className="card-Image" src={me} alt="Avatar" />
                    <div className="container">
                        <h4>
                            <p>Front-end developer</p>
                        </h4>
                        <h3>김창준</h3>
                        <p>Kim Changjun</p>
                        <p>010-6247-8619</p>
                        <p>
                            <a href="mailto:ckdwns7463@naver.com" target="blank">
                                ckdwns7463@naver.com
                            </a>
                        </p>
                        <p>
                            <a href="https://github.com/Kim-Chang-jun" target="blank">
                                https://github.com/Kim-Chang-jun
                            </a>
                        </p>
                        <p>
                            <a href="https://www.jangboo.kr/" target="blank">
                                (주)푸드노트서비스
                            </a>
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="container">
                        <h2>
                            <p>Introduce</p>
                        </h2>
                        <div className="Introduce-text">
                            <p>
                                전남대학교 전자컴퓨터공학부 소프트웨어학과 졸업 후 스마트미디어인재개발원에서 Java Python 빅데이터 딥 러닝을 배웠습니다. 중고거래 예측 사이트, OCR 어플리케이션 제작
                                프로젝트를 진행한 이력이 있습니다.
                                <br />
                                <br />
                                ocr 어플리케이션 제작 프로젝트를 진행중 앱 프론트-엔드에 대한 관심이 높아져 교육 과정 중 더 많은 지식을 습득하기 위해 노력했습니다.
                                <br />
                                <br />
                                수료 이후 Loger에서 Flutter, React-Native 를 통한 하이브리드 앱 개발 업무를 수행하면서 프론트-엔드로써의 역량을 쌓아왔습니다.
                                <br />
                                <br />
                                현재 푸드노트서비스(주)에서 React-Native 를 이용하여 매출 정산 손익을 관리하는 앱 개발에 참여하였으며 유지 보수 중입니다.
                                <br />
                                <br />
                                새로운 기능을 구현하는것을 즐기고 있으며 기존에 배운 것들을 발전시키고 새로운 것들을 배우는것을 목표로 하고있습니다.
                            </p>
                        </div>
                        <br />
                        <br />
                        <h2>SKILLS</h2>
                        <div className="skills">
                            <div className="skill_list">
                                <div className="skillsBox">
                                    <img className="skills-Image" src={js} alt="js" />
                                    <p> Js</p>
                                </div>
                                <div className="skillsBox">
                                    <img className="skills-Image" src={html} alt="html" />
                                    <p> Html</p>
                                </div>
                                <div className="skillsBox">
                                    <img className="skills-Image" src={css} alt="css" />
                                    <p> Css</p>
                                </div>
                            </div>
                            <div className="skill_list">
                                <div className="skillsBox">
                                    <img className="skills-Image" src={flutter} alt="flutter" />
                                    <p> Flutter</p>
                                </div>
                                <div className="skillsBox">
                                    <img className="skills-Image" src={reactnative} alt="reactnative" />
                                    <p>React-Native</p>
                                </div>
                                <div className="skillsBox">
                                    <img className="skills-Image" src={python} alt="python" />
                                    <p> Python</p>
                                </div>
                            </div>
                            <div className="skill_list">
                                <div className="skillsBox">
                                    <img className="skills-Image" src={firebase} alt="firebase" />
                                    <p> Firebase</p>
                                </div>
                                <div className="skillsBox">
                                    <img className="skills-Image" src={git} alt="git" />
                                    <p> Git</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
