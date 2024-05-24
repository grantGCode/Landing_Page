import Image from "next/image";

export const Card = ({title, src, copy, number}) => {
    const blackFont = number === 4 ? 'black-font' : '';

    console.log(blackFont)

    return (
        <div className={`card-container card-${number}`}>
            <div className='card-content'>
                <p className={`card-title ${blackFont}`}>{title}</p>
                <div className="card-image-container">
                    <Image className="card-image" src={src} alt="Card Image" width={500} height={500} />
                </div>
                <p className={`card-copy ${blackFont}`}>{copy}</p>
            </div>
        </div>
    );
};