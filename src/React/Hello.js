import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import "../App.css";

import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const Hello = ({ size, currentScroll }) => {
    const langs = ["React Native", "하이브리드 앱","React"];
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    const textProps = useSpring({
        opacity: visible ? 1 : 0,
        fontWeight: "bold",
        config: { duration: 1000 }, 
    });

    const totalProps = useSpring({
        color: currentScroll < size.height * 0.8 ? "white" : "black",
        opacity: currentScroll < size.height * 0.8 ? 1 : 0,
        width: "100%",
        minHeight: size.height - currentScroll * 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "3%",
    });

    useEffect(() => {
        const toggleTimer = setInterval(() => {
            setVisible(prev => !prev);
        }, 1900);

        const langTimer = setInterval(() => {
            setIndex(prev => (prev + 1) % langs.length);
        }, 3800);

        return () => {
            clearInterval(toggleTimer);
            clearInterval(langTimer);
        };
    }, []);

    return (
        <animated.div style={totalProps}>
            <div>
                <animated.span style={textProps}>
                    {langs[index]}
                </animated.span> 
                {" "}Front-End Developer <br /> 
                김창준의 포트폴리오 입니다
            </div>
        </animated.div>
    );
};

export default Hello;
