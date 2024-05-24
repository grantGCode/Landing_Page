'use client'

import styled from "styled-components"

export const HomePageStyles = styled.div`
    margin: 0;
    padding: 0;

    .navbar-container {
        background-color: black;
        display: flex;
        justify-content: center;
        padding: 25px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    #logo {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }

    .logo-text {
        display: none;
    }

    .hero-container {
        padding: 50px;
        display: flex;
        flex-direction: column;
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
    }

    button {
        background-color: white;
        font-weight: bold;
        font-size: 18px;
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

    h4 {
        font-weight: bold;
        font-size: 22px;
        font-style: italic;
    }

    .middle-cta-copy {
        font-weight: 200;
        font-size: 10px;
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
    }
`;