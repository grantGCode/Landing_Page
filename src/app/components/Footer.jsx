'use client'
import { Form } from './Hero';
import Image from 'next/image';
import {useSearchParams} from "next/navigation"
import { FaMugHot } from "react-icons/fa";

export const Footer = () => {
    const searchParams = useSearchParams();
    const thankYou = searchParams.get("submitted");
    const copy = `We just have one question for you. 
        Are you ready to build your business dream? 
        If so, sign up next to this text. 
        We’ll reach out to set up a meeting.
    `
    const thankYouCopy = `We appreciate you’re interest
        in working with us. We’ll reach out to you and
        set up a call.
    `
    return (
        <footer>
                {thankYou ? 
                    <div className="footer-top-container">
                        <p className='footer-copy'>{thankYouCopy}</p>
                        <div className='thank-you-logo-wrapper'>    
                            <Image className='footer-thank-you-logo' src='/footer-logo-and-thank-you.png' width={268} height={100} alt='thankyou' />
                        </div>
                    </div>:
            <div className="footer-top-container">
                <p className='footer-copy'>{copy}</p>
                <Form/>
            </div>
}
            <div className='line'></div>
            <div className='footer-bottom-container'>
                <div className='footer-image-container'>
                    <Image className='footer-logo' src='footer-logo.svg' width={500} height={500} alt='footer-logo'/>
                </div>
                <p className='credits'>
                <FaMugHot size={14}/> A collaboration: Alvaro Castro Cid X Grant Bentley
                </p>
                <div className='footer-image-container'>
                    <Image className='footer-logo' src='footer-text-logo.svg' width={500} height={500} alt='footer-logo' />
                </div>
            </div>
        </footer>
    );
}
