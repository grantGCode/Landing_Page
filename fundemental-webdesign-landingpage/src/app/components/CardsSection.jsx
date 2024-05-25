import { Card } from "./Cards/Card";

async function fetchCardContent () {
    return {
        cards: [
            {title: 'ui & ux', src: 'eye.svg', copy: `Unlock the potential of your digital products with our UI UX expertise. Our team combines intuitive, user-centered design to create visually stunning and highly functional interfaces that captivate and delight your users. `},
            {title: 'software', src: 'gear.svg', copy: `Enhance your business with our premier software development services. Our expert team delivers efficient, scalable solutions tailored to your needs, ensuring your software is robust, user-friendly, and future-ready.`},
            {title: 'e-commerce', src: 'dollar.svg', copy: `Revolutionize your online store with our expert ecommerce software development. Our tailored, scalable solutions ensure a seamless shopping experience, driving sales and keeping you ahead of the competition.`},
            {title: 'consultations', src: 'blerb.svg', copy: `Elevate your business with our expert software consulting services. Our consultants combine deep technical expertise and strategic problem-solving with exceptional communication, delivering tailored solutions that drive your success.`},
        ]
    }
}
export const CardsSection = async () => {
    const { cards } = await fetchCardContent(); 
    
    return (
        <div className="card-position-container">
            <div className="card-desktop-container">
                {cards.map((card, index) => {
                    const number = index + 1;
                    return (
                        <Card key={index} title={card.title} src={card.src} copy={card.copy} number={number}/>
                    )
                })}
            </div>
        </div>
    );
};