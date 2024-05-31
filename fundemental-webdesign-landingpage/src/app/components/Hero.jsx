"use client"
import { useRef } from 'react';
import Image from 'next/image';
    
export const Form = () => {
    const inputRef = useRef(null);
    const addNewEmail = async (e) => {

        e.preventDefault();
        
        if (!inputRef.current.value) {
            throw new Error(`Empty input field.`);
        }

        const response = await fetch('/api/submitEmail', {
            body: JSON.stringify({
                email: inputRef.current?.value,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });
    
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        
        const data = await response.json();
        
        return data;
    }

    return (
        <form onSubmit={addNewEmail()}>
            <input 
                name='email'
                type="email" 
                ref={inputRef}
                placeholder="Enter your email here to get started..."
                // required
                autoComplete="off" // remove after function is built
                autoCapitalize="off"
                autoCorrect='off' 
            />
            <button onClick={() => (e.preventDefault(), addNewEmail)} value="" name='email'>Get Started</button>
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