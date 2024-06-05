'use client'
import { useEffect } from "react";
import Image from 'next/image';
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export const Modal = () => {
    const searchParams = useSearchParams();
    const modal = searchParams.get("modal");
    // const pathname = usePathname(); 
    // const router = useRouter();

    // useEffect (() => {
    //     if (modal) {
    //         const timer =- setTimeout(() =>{
    //             const newParams = new URLSearchParams(searchParams.toString());
    //             newParams.delete("modal");
    //             router.replace(`${pathname}?${newParams.toString()}`, undefined, { shallow: true });
    //         }, 6000);
    //         return () => clearTimeout(timer);
    //     }
    // }, [modal, pathname, router, searchParams]);
    
    return (
        <>
            {modal &&
                <div className="modal-overlay">
                    <div className="modal-wrapper">
                        <Image className="modal" src='/thank-you-card.png' width={500} height={500} />
                    </div>
                </div>
            } 
        </>       
    );
};

export default Modal