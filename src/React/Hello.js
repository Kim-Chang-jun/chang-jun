import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import "../App.css";

const Hello = ({ size, currentScroll }) => {
    const [lang, setlang] = useState("Flutter");
    const [state, setState] = useState(false);

    const props = useSpring({
        fontWeight: "bold",
        config: { duration: 1400 },
        opacity: state == true ? 0 : 1,
        from: { opacity: state == true ? 1 : 0 },
    });

    const total = useSpring({
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
        setTimeout(() => {
            if (lang == "Flutter") {
                setlang("React-native");
            } else if (lang == "React-native") {
                setlang("하이브리드 앱");
            } else if (lang == "하이브리드 앱") {
                setlang("Flutter");
            }
        }, 3800);
    }, [lang]);

    function LangAnimation() {
        setTimeout(() => {
            setState(!state);
        }, 1900);
    }

    useEffect(() => {
        LangAnimation();
    }, [state]);

    return (
        <animated.div style={total}>
            <animated.div style={props}>{lang}</animated.div> Front-End Developer <br /> 김창준의 포트폴리오 입니다
        </animated.div>
    );
};

export default Hello;
