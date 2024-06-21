//components
import Icon from '../Icons/Icons';
import Title from '../Title';

function Contact() {
    return (
        <div className="section h-[100dvh]" id='contact'>
            <Title text='Contact' isMarginBottom={false}/>
            <section className='flex flex-col items-center justify-center h-full'>
                <p className="text-[38px] font-semibold text-[--purple] text-center mb-5">Did you like my portfolio?</p>
                <p className='text-lg text-center mb-10'>I'm also open to getting in touch or<br/> hearing  about exciting opportunities.<br/>Feel free to let me know here:</p>
                <a className='flex border-2 border-[--purple] rounded  text-xl mono px-10 py-5 mb-10 transition hover:bg-[--main-text-color] hover:text-[--purple] hover:border-[--main-text-color]' href={Icon[4].link}>Write to me</a>

                <div className='flex'>
                    {Icon.map((item, i) => {
                        return(
                            <a key={i} href={item.link} target="_blank" className='p-2' rel="noreferrer">
                                {item.icon}
                            </a>
                        )
                    })}
                </div>
            </section>
        </div>
    );
}

export default Contact;
