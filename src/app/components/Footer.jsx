import Image from "next/image";

export const Footer = () => {
    return(
        <div className='footer-bottom-container'>
            <div className='footer-image-container'>
                <Image className='footer-logo' src='footer-logo.svg' width={500} height={500} alt='footer-logo'/>
            </div>
            <p className='credits'>
            A collaboration: Alvaro Castro Cid X Grant Bentley
            </p>
            <div className='footer-image-container'>
                <Image className='footer-logo' src='footer-text-logo.svg' width={500} height={500} alt='footer-logo' />
            </div>
        </div>
    )
};