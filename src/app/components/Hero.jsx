"use client"
import { Suspense, useRef } from "react";
import Image from "next/image";
import {useRouter, useSearchParams} from "next/navigation"
    
export const Form = () => {
    const inputRef = useRef(null);
    const router = useRouter()
    const addNewEmail = async (e) => {
        
        e.preventDefault();
        
        if (!inputRef.current.value) {
            throw new Error(`Empty input field.`);
        }

        const response = await fetch("/api/submitEmail", {
            body: JSON.stringify({
                email: inputRef.current?.value,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });
 
         inputRef.current.value = "";
         console.log(response.ok)
         if (response.ok) { 
             router.push('?submitted=true');
        } else {
            throw new Error(
                window.alert('Something went wrong')
            )
        } 
    }
    
    return (
        <form onSubmit={addNewEmail}>
            <input 
                name="email"
                type="email" 
                ref={inputRef}
                placeholder="Enter your email here to get started..."
                required
                autoCapitalize="off"
                autoCorrect="off" 
            />
            <button type="submit" value="" name='addNewEmail'>Get Started</button>
            
        </form>
    );
}

export const Hero = () => {
    const searchParams = useSearchParams();
    const thankYou = searchParams.get("submitted");
    return (
        <Suspense fallback={"Loading..."}>
            <div className="hero-position">
            <video className="video-bg" autoPlay muted loop>
            <source src="/hero-bg-video.mp4" type="video/mp4" />
            </video>
                <div className="hero-container">
                    {thankYou ? 
                        <div className="thank-you-wrapper">
                            <Image className="thank-you-card" src='/thank-you-card.png' width={500} height={500} alt="thank-you-card"/>
                        </div>:
                    <div className="desktop-content-container">
                        <div className="hero-text">
                            <h1>Get your <span className="bold-blue">25%</span> discount below!</h1>
                            <h2>Sign up below to get a 25% percent discount on your first professional website.</h2>
                        </div>
                        <div className="hero-form">
                            <Form />
                        </div>
                    </div>}
                    <div className="hero-image">
                        <Image className="hero-logo" src="/hero-logo.svg" width={500} height={500} alt="hero-logo" />
                    </div>
                </div>
            </div>
        </Suspense>
    );
}