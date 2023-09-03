//images
import me from '../../img/me.png';

function Home() {
    return (
        <div className="flex flex-col items-center">
            
            <div className="flex justify-between items-center  w-full px-20 text-lg">
                <div className="max-w-[500px]">
                    Hello! <span className="font-semibold text-[#b788ff]">I'm Kate</span>, and I have a passion for crafting digital experiences that come to life on the web.<br/><br/>

                    Currently, I'm proud to be a part of <a href="https://www.neovinci.pl/" className="font-semibold text-[#b788ff]">Neo-Vinci</a>, where I work on creating accessible and inclusive products and digital experiences.<br/><br/>

                    Aside from my professional life, I'm also a <span className="font-semibold text-[#b788ff]">third-year student</span> pursuing a degree in <span className="font-semibold text-[#b788ff]">Computer Science</span> at <span className="font-semibold text-[#b788ff]">Warsaw University of Life Sciences</span>.<br/><br/>

                    <span className="font-semibold text-[#b788ff] kitty">Cats</span> hold a special place in my heart, and I find immense joy in their company. In my free time, I love delving into the world of crafting and solving Japanese crosswords.
                </div>
                <div className='w-[300px]'>
                    <img src={me} alt='pani sak'></img>
                </div>
            </div>
        </div>
    );
}

export default Home;
