import Image from "next/image";

export const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="logo-container logo">
                <Image id="logo" src="/nav-logo.svg" alt="Fundamental Web Design Logo" width={500} height={500} />
            </div>
            <div className="logo-container logo-text">
                <Image src="/logo-text.svg" alt="Fundamental Web Design Text Logo" width={500} height={500} />
            </div>
        </div>
    );
};