import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring'
import '../App.css';
import Avatar from '../Image/A.jpg'
import firebase from '../Image/firebase.png'
import flutter from '../Image/Flutter.png'
import reactnative from '../Image/React-Native.png'
import js from '../Image/JS.png'
import python from '../Image/Python.png'
import git from '../Image/git.png'
import html from '../Image/Html.png'
import css from '../Image/Css.png'

const Intro = () => {

    return <div className='Intro'>
        <div>
            <p className='Intro-Title'>ABOUT ME</p>
        </div>
        <div className='Intro-Card-Div'>
            <div className='card-a'>
                <img className='card-Image' src={Avatar} alt="Avatar" />
                <div className='container'>
                    <h4><p>Front-end developer</p></h4>
                    <p><h3>김창준</h3>Kim Changjun</p>
                    <p>010-6247-8619</p>
                    <p><a href="mailto:ckdwns7463@naver.com" >ckdwns7463@naver.com</a></p>
                    <p><a href="https://github.com/loger-kcj">github.com/loger-kcj</a></p>
                </div>
            </div>
            <div className='card'>
                <div className='container'>
                    <h2><p>Introduce</p></h2>
                    <div className='Introduce-text'>
                        <p>전남대학교 전자컴퓨터공학부 소프트웨어학과 졸업 후 스마트미디어인재개발원에서
                        Java Python 빅데이터 머신러닝 딥러닝을 배웠으며 중고거레 예측 사이트, ocr 어플리케이션 제작 프로젝트를 진행했습니다.
                        <br /><br />
                        Android Studio를 이용한 프로젝트 중 앱 프론트엔드에 대한 관심이 높아졌으며 이에 대해 교육과정 중 좀 더 열심히 공부하였습니다.
                        <br /><br />
                        수료 이후 Loger에서 Flutter, React-Native 를 통한 하이브리드 앱 개발 업무를 수행하면서 프론트엔드로써의 역량을 쌓아왔습니다.
                    </p>
                    </div>
                    <br />
                    <br />
                    <h2>SKILLS</h2>
                    <div className='skills'>
                        <div className='skill_list'>
                            <div className='skillsBox'>
                                <img className='skills-Image' src={js} alt="js" />
                                <p> Js</p>
                            </div>
                            <div className='skillsBox'>
                                <img className='skills-Image' src={html} alt="html" />
                                <p> Html</p>
                            </div>
                            <div className='skillsBox'>
                                <img className='skills-Image' src={css} alt="css" />
                                <p> Css</p>
                            </div>
                        </div>
                        <div className='skill_list'>
                            <div className='skillsBox'>
                                <img className='skills-Image' src={flutter} alt="flutter" />
                                <p> Flutter</p>
                            </div>
                            <div className='skillsBox'>
                                <img className='skills-Image' src={reactnative} alt="reactnative" />
                                <p>React-Native</p>
                            </div>
                            <div className='skillsBox'>
                                <img className='skills-Image' src={python} alt="python" />
                                <p> Python</p>
                            </div>
                        </div>
                        <div className='skill_list'>
                            <div className='skillsBox'>
                                <img className='skills-Image' src={firebase} alt="firebase" />
                                <p> Firebase</p>
                            </div>
                            <div className='skillsBox'>
                                <img className='skills-Image' src={git} alt="git" />
                                <p> Git</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Intro;