import Image from 'next/image';

export const Hero = () => {
    return (
        <div className="hero-container">
            <video className="video-bg" autoPlay muted loop>
                <source src="/hero-bg-video.mp4" type="video/mp4" />
            </video>
            <div className="hero-text">
                <h1>Get your 25% discount below!</h1>
                <p>Sign up below to get a 25% percent discount on your first professional website.</p>
            </div>
            <div className="hero-form">
                <form>
                    <input type="email" placeholder="Enter your email here to get started..." />
                    <button type="submit">Get Started</button>
                </form>
            </div>
            <div className="hero-image">
                <Image className="hero-logo" src="/hero-logo.svg" alt="Hero Image" width={500} height={500} />
            </div>
        </div>
    );
}