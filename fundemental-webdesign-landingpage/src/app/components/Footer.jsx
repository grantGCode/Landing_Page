import { Form } from './Hero';
import Image from 'next/image';
import { FaMugHot } from "react-icons/fa";

export const Footer = () => {
    const copy = `We just have one question for you. 
        Are you ready to build your business dream? 
        If so, sign up next to this text. 
        We’ll reach out to set up a meeting.
    `
    return (
        <footer>
            <div className="footer-top-container">
                <p className='footer-copy'>{copy}</p>
                <Form/>
            </div>
            <div className='line'></div>
            <div className='footer-bottom-container'>
                <div className='footer-image-container'>
                    <Image className='footer-logo' src='footer-logo.svg' width={500} height={500}/>
                </div>
                <p className='credits'>
                <FaMugHot size={14}/> A collaboration: Alvaro Castro Cid X Grant Bentley
                </p>
                <div className='footer-image-container'>
                    <Image className='footer-logo' src='footer-text-logo.svg' width={500} height={500}/>
                </div>
            </div>
        </footer>
    );
}
