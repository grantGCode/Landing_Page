
import Image from 'next/image';

export async function GET(request) {
    return new Response('Hello from Hero')
}
export async function postEmail(email) {
    const response = await fetch('/api/submitEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
  
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
  
    const data = await response.json();
    return data;
  }

export const Form = () => {
    return (
        <form >
            <input type="email" placeholder="Enter your email here to get started..." />
            <button type="submit">Get Started</button>
        </form>
    );
}

export const Hero = () => {
    return (
        <div className="hero-position">
            <video className="video-bg" autoPlay muted loop>
                <source src="/hero-bg-video.mp4" type="video/mp4" />
            </video>
            <div className="hero-container">
                <div className="desktop-content-container">
                    <div className="hero-text">
                        <h1>Get your <span className="bold-blue">25%</span> discount below!</h1>
                        <h2>Sign up below to get a 25% percent discount on your first professional website.</h2>
                    </div>
                    <div className="hero-form">
                        <Form />
                    </div>
                </div>
                <div className="hero-image">
                    <Image className="hero-logo" src="/hero-logo.svg" alt="Hero Image" width={500} height={500} />
                </div>
            </div>
        </div>
    );
}