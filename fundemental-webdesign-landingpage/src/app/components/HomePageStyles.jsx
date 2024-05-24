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
`;