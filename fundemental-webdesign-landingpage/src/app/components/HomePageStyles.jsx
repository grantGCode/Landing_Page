'use client'

import styled from "styled-components"

export const HomePageStyles = styled.div`
    overflow-x: hidden;

    .navbar-container {
        background-color: black;
        display: flex;
        justify-content: center;
        padding: 25px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
    }

    #logo {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }

    .logo-text {
        display: none;
    }

    .hero-position {
        position: relative;
        overflow: hidden;
    }

    .video-bg {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        min-width: 100%;
        min-height: 100%;
    }

    .hero-container {
        padding: 50px;
        display: flex;
        flex-direction: column;
    }

    h1, h3, .originator {
        font-size: 25px;
    }

    h1 {
        padding-bottom: 35px;
        font-weight: 300;
    }

    .bold-blue {
        font-weight: 700;
        color: #005FF6
    }

    h2 {
        font-weight: 200;
        font-size: 15px;
    }

    .hero-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 35px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input {
        margin-bottom: 35px;
        text-align: center;
        box-shadow: inset 0 0 10px #d7d6d6;
        background-color: #f5f5f5;
        font-size: 15px;
    }

    button {
        background-color: white;
        font-weight: bold;
        font-size: 18px;

        transition: box-shadow 0.3s ease-in-out;
    }

    button:hover {
        background-color: #005FF6;
        color: white;
        cursor: pointer;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);   
    }

    input, button {
        border: 3px solid black;
        width: 281px;
        height: 81px;
    }

    .hero-logo {
        object-fit: contain;
        width: 100%;
        height: 100%;
        padding-top: 50px;
    }

    .quote-container {
        background-color: #509fa5;
        background-image: url("./quote-bg-image.png");
        background-image: no-repeat;
        background-size: cover;
        background-position-x: center;

        padding-top: 200px;
        padding-bottom: 200px;
    }

    .quote-text {
        color: white;
        display: flex;
        flex-direction: column;
        gap: 240px;
        padding: 0 70px;
    }

    h3 {
        font-weight: 100;
    }

    .originator {
        font-weight: bold;
        width: 75%;
    }

    .middle-cta-container{
        background-color: #f5f5f5;
        background-image: url("./background-logo.svg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        padding-top: 50px;
    }

    .middle-cta-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
        padding: 0 50px;
    }

    .middle-cta-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    h4 {
        font-weight: bold;
        font-size: 22px;
        font-style: italic;
    }

    .middle-cta-copy-m {
        font-weight: 200;
        font-size: 10px;
    }

    .middle-cta-copy-d {
        display: none;
    }

    .male-model {
        object-fit: contain;
        object-position: center;
        display: block;
    }

    .card-container {
        display: flex;
        justify-content: center;
        padding: 50px;
    }

    .card-content {
        display: flex;
        flex-direction: column;
    }

    .card-title {
        color: white;
        font-weight: bold;
        font-size: 25px;
        text-transform: uppercase;
        letter-spacing: 5px;
    }

    .card-image-container {
        padding-top: 50px;
        padding-bottom: 25px;
    }

    .card-image {
        object-fit: contain;
        width: 50%;
        height: 75%;
    }

    .card-copy {
        color: white;
        font-weight: 200;
        font-size: 12x;
    }

    .black-font {
        color: black;
    }

    .card-1 {
        background-color: #005FF6;
    }

    .card-2 {
        background-color: #4087F8;
    }

    .card-3 {
        background-color: #80AFFB;
    }

    .card-4 {
        background-color: #BFD7FD;
    }

    @keyframes bobbing {
        0% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0); }
    }

    .card-image {
        animation: bobbing 1.5s ease-in-out infinite;
    }

    .footer-copy, .credits {
        color: white;
        font-weight: 100;
    }

    footer {
        background-color: black;
        display: flex;
        flex-direction: column;
        gap: 50px;
        padding: 50px;
    }

    .footer-image-container {
        display: flex;
        justify-content: center;
    }

    .line {
        border: 1px solid white;
    }

    .credits {
        text-align: center;
    }

    .footer-logo {
        object-fit: contain;
        width: 50%;
        height: 50%;
        animation: slide 5s ease-in-out infinite;
    }

    @media (min-width: 975px){

        .hero-position {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .hero-container {
            max-width: 1280px;
        }
        
        .desktop-content-container {
            width: 460px;            
        }

        .hero-container {
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
            padding: 100px 50px;
            gap: 100px;
        }

        .hero-text {
            align-items: flex-start;
        }

        h1 {
            font-size: 50px;
        }

        h2 {
            font-size: 20px;
        }

        input, button {
            width: 460px;
            height: 80px;
        }

        .hero-image {
            width: 475px;
        }

        .hero-logo {
            padding: 0;
        }

        .quote-container {
            display: flex;
            justify-content: center;
            background-position-y: center;
        }

        .quote-text {
            align-items: center;
            max-width: 1280px;
        }

        h3 {
            font-weight: 200;
        }

        h3, .originator {
            font-size: 50px;
            text-align: center;
        }

        .middle-cta-container {
            padding-top: 0px;
            background-image: url("./background-logo-desktop.png");
            background-size: cover;
            animation: slide 60s linear infinite;
        }

        @keyframes slide {
            0% { background-position: 0 0; }
            50% { background-position: 100 0; }
        }

        .middle-cta-content {
            flex-direction: row-reverse
        }

        .middle-cta-text {
            align-items: start;
            width: 460px;
        }

        h4 {
            font-size: 40px;
        }

        .middle-cta-copy-m {
            display: none;
        }

        .middle-cta-copy-d {
            display: block;
            font-size: 14px;
        }

        .section-image {
            height: 730px;
        }

        .male-model {
            height: 100%;
            object-position: bottom;
        }

        .card-desktop-container {
            display: flex;
        }

        .card-image-container {
            margin-top: 25px;
            padding: 0px;
            width: 250px;
            height: 100px;
        }
    }
`;