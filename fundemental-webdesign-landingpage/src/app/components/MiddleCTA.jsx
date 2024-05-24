import Image from 'next/image';

export const MiddleCTA = () => {
    const copy = `
        In a world driven by automation and AI,
        we are web designers who prioritize a human-first approach, 
        partnering with you for your online success. At Fundamental Web Design, 
        our commitment is practical—when you win, we win, leading to mutual growth and more business.
    `;

    return (
        <div className="middle-cta-container">
            <div className="middle-cta-content">
                <h4>When you win, we win. It’s that simple</h4>
                <p className="middle-cta-copy">{copy}</p>
                <button>Get Started</button>
                <div className="section-image">
                    <Image className="male-model" src="/nhat-anh-nguyen-chi-awO5J5S75aM-unsplash-mobile.png" alt="Section Image" width={500} height={500} />
                </div>
            </div>
        </div>
    );
}