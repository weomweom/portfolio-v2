import { useEffect, useState } from "react";

function Home() {
    const [className1, setClassName1] = useState('hidden');
    const [className2, setClassName2] = useState('hidden');
    const [className3, setClassName3] = useState('hidden');
    

    useEffect(() => {
        const timer = setTimeout(() => {
          setClassName1('animatedText');
        }, 700);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setClassName2('line-1 anim-typewriter');
        }, 1400);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setClassName3('animatedText');
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex justify-center h-[100dvh] min-h-[100dvh] items-center">
            <div className="flex items-center justify-between w-full">
                <div className="flex flex-col justify-start items-start min-h-[390px] font-semibold text-[70px]">
                    <div className="animatedText">
                        Hi,
                    </div>
                    <div className={`${className1}`}>
                        my name is
                    </div>
                    <div className={`${className2} mono text-[120px] text-[#935ee7] animatedText`}>
                        Kate
                    </div>
                </div>
                <div className={`${className3} w-[500px] text-xl text-[#c0b1d4]`}>
                    Passionate <span className="font-semibold text-[#b788ff]">Web Developer</span>.<br/><br/>
                    I'm a frontend developer on a mission<br/> 
                    to craft captivating digital experiences. With a<br/>
                    focus on user-centric design, I specialize<br/> 
                    in creating elegant and functional web interfaces.<br/><br/> 
                    Currently, I'm dedicated to building accessible,<br/> 
                    user-friendly web solutions at <a href="https://www.neovinci.pl/" className="font-semibold text-[#b788ff]">Neo-Vinci</a>.
                </div>
            </div>
        </div>
    );
}

export default Home;
