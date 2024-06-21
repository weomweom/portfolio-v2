import { useState, useEffect } from 'react';

//components
import Nav from './components/Nav/Nav';
import Home from './components/Sections/Home';
import About from './components/Sections/About';
import Projects from './components/Sections/Projects';
import Experience from './components/Sections/Experience';
import Contact from './components/Sections/Contact';

//styles
import './index.css';
import Arrow from './components/Icons/Arrow';

function PageLayout() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [cursorXY, setCursorXY] = useState({ x: -550, y: -550 });
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};
		
		const moveCursor = (e) => {
			const x = e.clientX - 325
			const y = e.clientY - 325
			setCursorXY({ x, y })
		}

		const handleScroll = () => {
			const headerSection = document.getElementById('home');
			if (headerSection) {
				const headerSectionHeight = headerSection.offsetHeight;
				const scrolled = window.scrollY;
		
				setShowButton(scrolled > headerSectionHeight);
			}
		};
	
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('mousemove', moveCursor)
		window.addEventListener('resize', handleResize);
	
		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('mousemove', moveCursor);
			window.removeEventListener('scroll', handleScroll)
		};
    }, []);

	const scrollToTop = () => {
        window.scrollTo({ top: 0 });
    };

    return (
		<div>
			<div
				className={`cursor ${windowWidth <= 992 ? 'hidden' : 'fixed'}`}
				style={{
					transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
				}}
            />

			<Nav/>
			<div className='max-w-[1000px] my-0 mx-auto'>
				<Home/>
				<About/>
				<Projects/>
				<Experience/>
				<Contact/>
			</div>

            <button onClick={scrollToTop} className={`fixed bottom-5 right-4 z-50 transition duration-300 bg-[#9345b0] hover:bg-[#84399f] rounded-full p-2 ${showButton ? 'scale-100' : 'scale-0 pointer-events-none select-none'}`}>
                <Arrow/>
            </button>
		</div>
    );
}

export default PageLayout;
