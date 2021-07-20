import "./App.css";
import Hello from "./React/Hello";
import Intro from "./React/Intro";
import Project from "./React/Project";
import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";

function App() {
    const size = useWindowSize();
    const [goingUp, setGoingUp] = useState(false);
    const [currentScroll, setCurrentScroll] = useState(0);
    const prevScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (prevScrollY.current < currentScrollY && goingUp) {
                setGoingUp(false);
            }
            if (prevScrollY.current > currentScrollY && !goingUp) {
                setGoingUp(true);
            }

            prevScrollY.current = currentScrollY;
            setCurrentScroll(currentScrollY);
            //console.log(goingUp, currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [goingUp]);

    const headerAni = useSpring({
        backgroundColor: currentScroll < size.height * 0.8 ? "rgba(0,0,0,0)" : "rgba(0,0,0,1)",
        from: { backgroundColor: currentScroll < size.height * 0.8 ? "black" : "rgba(0,0,0,0)" },
        config: { duration: 500 },
    });

    const projectAni = useSpring({
        backgroundColor: currentScroll <= size.height * 1.4 ? "rgba(255,255,255,0)" : "white",
        from: { backgroundColor: currentScroll <= size.height * 1.4 ? "white" : "rgba(255,255,255,0)" },
        config: { duration: 500 },
    });

    const JBAni = useSpring({
        opacity: currentScroll < size.height * 1.65 ? "0" : "1",
        transform: currentScroll < size.height * 1.65 ? "translate(0px, 200px)" : "translate(0px, 0px)",
        from: { backgroundColor: currentScroll < size.height * 1.5 ? "1" : "0", transform: currentScroll < size.height * 1.5 ? "translate(0px, 0px)" : "translate(0px, 200px)" },
        config: { duration: 700, tension: 300, friction: 12 },
    });

    const GAAPAni = useSpring({
        opacity: currentScroll < size.height * 1.95 ? "0" : "1",
        transform: currentScroll < size.height * 1.95 ? "translate(0px, 200px)" : "translate(0px, 0px)",
        from: { backgroundColor: currentScroll < size.height * 1.5 ? "1" : "0", transform: currentScroll < size.height * 1.5 ? "translate(0px, 0px)" : "translate(0px, 200px)" },
        config: { duration: 700, tension: 300, friction: 12 },
    });

    const GDAni = useSpring({
        opacity: currentScroll < size.height * 2.25 ? "0" : "1",
        transform: currentScroll < size.height * 2.25 ? "translate(0px, 200px)" : "translate(0px, 0px)",
        from: { backgroundColor: currentScroll < size.height * 1.5 ? "1" : "0", transform: currentScroll < size.height * 1.5 ? "translate(0px, 0px)" : "translate(0px, 200px)" },
        config: { duration: 700, tension: 300 },
    });

    const YTTAni = useSpring({
        opacity: currentScroll < size.height * 2.55 ? "0" : "1",
        transform: currentScroll < size.height * 2.55 ? "translate(0px, 200px)" : "translate(0px, 0px)",
        from: { backgroundColor: currentScroll < size.height * 1.5 ? "1" : "0", transform: currentScroll < size.height * 1.5 ? "translate(0px, 0px)" : "translate(0px,200px)" },
        config: { duration: 700, tension: 300 },
    });

    const QRAni = useSpring({
        opacity: currentScroll < size.height * 2.85 ? "0" : "1",
        transform: currentScroll < size.height * 2.85 ? "translate(0px, 200px)" : "translate(0px, 0px)",
        from: { backgroundColor: currentScroll < size.height * 1.5 ? "1" : "0", transform: currentScroll < size.height * 1.5 ? "translate(0px, 0px)" : "translate(0px, 200px)" },
        config: { duration: 700, tension: 300 },
    });

    const ETCAni = useSpring({
        opacity: currentScroll < size.height * 3 ? "0" : "1",
        transform: currentScroll < size.height * 3 ? "translate(0px, 200px)" : "translate(0px, 0px)",
        from: { backgroundColor: currentScroll < size.height * 1.5 ? "1" : "0", transform: currentScroll < size.height * 1.5 ? "translate(0px, 0px)" : "translate(0px, 200px)" },
        config: { duration: 700, tension: 300 },
    });

    return (
        <animated.div className="App">
            <animated.header className="App-header" style={headerAni}>
                {size.height && <Hello size={size} currentScroll={currentScroll} />}
            </animated.header>
            <Intro />
            <Project projectAni={projectAni} Ani={[JBAni, GAAPAni, GDAni, YTTAni, QRAni, ETCAni]} />
        </animated.div>
    );
}

export default App;

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}
