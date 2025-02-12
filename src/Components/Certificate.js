import CertificateModal from './CertificateModal';
import { useState } from 'react';
function Certificate({ image, title }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
        return (
        <>
            <div 
            className="gallery-item shadow-xl shadow-slate-300 dark:shadow-slate-900 cursor-pointer"
            onClick={() => setIsModalOpen(true)}
            >
            <img 
                className="w-full h-auto object-contain transform transition-transform duration-300 hover:scale-110 ease-in-out relative rounded-lg" 
                src={image} 
                title={title} 
                alt={title}
            />
            </div>
    
            <CertificateModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            image={image}
            title={title}
            />
        </>
        );
    }

export default Certificate;
