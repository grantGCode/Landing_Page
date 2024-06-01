'use client'
import { useEffect } from "react";
import ReactDOM from "react-dom";


export const Modal = () => {
    useEffect(() => {
        console.log('modal is Mounted')
    });
    const modalContent = (
        <div className="modal-overlay">
            {/* Wrap the whole Modal inside the newly created StyledModalWrapper
            and use the ref */}
            <div className="modal-wrapper">
                <div className="modal" src='thank-card.svg'>
                </div>
            </div>
        </div>
    );

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
    );
};

export default Modal