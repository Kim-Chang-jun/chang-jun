import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring'

const Hello = () => {
    const [lang, setlang] = useState('Flutter');
    const [state, setState] = useState(false);

    const props = useSpring({
        fontWeight: 'bold',
        config: { duration: 1400 },
        opacity: state == true ? 0 : 1,
        from: { opacity: state == true ? 1 : 0 },
    })

    useEffect(() => {
        setTimeout(() => {
            if (lang == 'Flutter') { setlang('React-native'); }
            else if (lang == 'React-native') { setlang('Flutter'); }
        }, 3800)
    }, [lang])

    useEffect(() => {
        setTimeout(() => {
            setState(!state)
            console.log(state)
        }, 1900)
    }, [state])


    return <div><animated.div style={props}>{lang}</animated.div> Front-End Developer <br /> 김창준의 포트폴리오 입니다</div>
}

export default Hello;