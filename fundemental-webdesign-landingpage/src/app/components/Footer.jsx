import { Form } from './Hero';
import Image from 'next/image';

export const Footer = () => {
    const copy = `We just have one question for you. 
        Are you ready to build your business dream? 
        If so, sign up next to this text. 
        We’ll reach out to set up a meeting.
    `
    return (
        <footer>
            <p className='footer-copy'>{copy}</p>
            <Form/>
            <div className='line'></div>
            <div className='footer-image-container'>
                <Image className='footer-logo' src='footer-logo.svg' width={500} height={500}/>
            </div>
            <p className='credits'>
                A collaboration: Alvaro Castro Cid X Grant Bentley
            </p>
            <div className='footer-image-container'>
                <Image className='footer-logo' src='footer-text-logo.svg' width={500} height={500}/>
            </div>
        </footer>
    );
}
