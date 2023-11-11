import { useEffect, useState } from "react";
import { useSpring, animated } from 'react-spring';

const AnimatedBlock = ({ delay, children }) => {
    const props = useSpring({
      opacity: 1,
      transform: 'translateY(0)',
      from: { opacity: 0, transform: 'translateY(20px)' },
      config: { duration: 500 },
      delay,
    });
  
    return <animated.div style={props}>{children}</animated.div>;
};
  

function Home() {
    const [letters, setLetters] = useState('');
    const name = 'Kate'

    const [showBlocks, setShowBlocks] = useState(false);

    useEffect(() => {
        setShowBlocks(true);

        let timerArray = [];

        const mainTimer = setTimeout(() => {
            name.split('').forEach((letter, index) => {
                const timer = setTimeout(() => {
                    setLetters((prevLetters) => prevLetters + letter);
                }, 200 * index);
        
                timerArray.push(timer);
            });
        }, 800)

        timerArray.push(mainTimer);
    
        return () => {
            timerArray.forEach((timer) => clearTimeout(timer));
        };
    }, []);
    return (
        <div className='section h-[calc(100vh-var(--navHeight))]' id='home'>

            {showBlocks && (
                <div className="flex flex-col justify-center h-full z-[-1] px-1 sm:px-10">
                    <AnimatedBlock delay={0}>
                        <h1 className="text-[28px] xs:text-4xl sm:text-5xl md:text-6xl">Hi, my name is <span className="text-[--purple] font-semibold">{letters}</span></h1>
                    </AnimatedBlock>
                    <AnimatedBlock delay={1500}>
                        <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl pt-10">Passionate <span className="font-semibold text-[--purple]">Web Developer</span>.</h2>
                    </AnimatedBlock>
                    <AnimatedBlock delay={2200}>
                        <h3 className="text-base md:text-lg md:text-xl pt-10">I'm a frontend developer on a mission to craft captivating digital experiences. With a focus on user-centric design, I specialize in creating elegant and functional web interfaces.</h3>
                    </AnimatedBlock>
                </div>
            )}
        </div>
    );
}

export default Home;
