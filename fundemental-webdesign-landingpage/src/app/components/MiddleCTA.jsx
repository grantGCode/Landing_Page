import Image from 'next/image';

export const MiddleCTA = () => {
    const mobileCopy = `
        In a world driven by automation and AI,
        we are web designers who prioritize a human-first approach, 
        partnering with you for your online success. At Fundamental Web Design, 
        our commitment is practical—when you win, we win, leading to mutual growth and more business.
    `;

    const desktopCopy = `
        In a world full of automation and artificial intelligence, we are web designers who take a human-first approach to our work. 
        Fundamental Web Design is not just a technology shop but a dedicated partner in your business journey. We are committed to working tirelessly, side by side with you, to ensure your online success. 
        But why do we care? Is it because we’re altruists? I wish we were that pure of heart, but our incentive is a bit more practical in nature. 
        Here it is: when you win, we win, and you’ll likely recommend us, which means more business. It’s an incentive that, while less touchy, is real. 
        If that works for you, let’s get to work below. 
    `

    return (
        <div className="middle-cta-container">
            <div className="middle-cta-content">
                <div className="middle-cta-text">
                    <h4>When you win, we win. It’s that simple</h4>
                    <p className="middle-cta-copy-m">{mobileCopy}</p>
                    <p className="middle-cta-copy-d">{desktopCopy}</p>
                    <button>Get Started</button>
                </div>
                <div className="section-image">
                    <Image className="male-model" src="/nhat-anh-nguyen-chi-awO5J5S75aM-unsplash.png" alt="Section Image" width={500} height={500} />
                </div>
            </div>
        </div>
    );
}