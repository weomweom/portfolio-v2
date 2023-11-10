//components
import Title from '../Title';

//images
import me from '../../img/me.png';

function Home() {
    return (
        <div className='section' id='about'>
            <Title text='About'/>
            <div className="max-w-[800px]">
                <div className="flex justify-between items-center w-full px-10 text-lg flex-col-reverse lg:flex-row">
                    <div className="max-w-[500px] lg:mr-10">
                        Hello! <span className="font-semibold text-[--purple]">I'm Kate</span>, and I have a passion for crafting digital experiences that come to life on the web.<br/><br/>

                        I had the privilege of working with <a href="https://www.neovinci.pl/" className="font-semibold text-[--purple]">Neo-Vinci</a>, where I contributed to the creation of accessible and inclusive products and digital experiences.<br/><br/>

                        Aside from my professional life, I'm also a <span className="font-semibold text-[--purple]">third-year student</span> pursuing a degree in <span className="font-semibold text-[--purple]">Computer Science</span> at <span className="font-semibold text-[--purple]">Warsaw University of Life Sciences</span>.<br/><br/>

                        <span className="font-semibold text-[--purple] kitty">Cats</span> hold a special place in my heart, and I find immense joy in their company. In my free time, I love delving into the world of crafting and solving Japanese crosswords.
                    </div>
                    <div className='max-w-[280px] pb-10 lg:pb-0'>
                        <img src={me} alt='pani sak'></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
