import React from 'react';

function CertificateModal({ isOpen, onClose, image, title }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="relative bg-white dark:bg-dark-mode max-w-4xl w-full rounded-lg p-4">
            {/* Botón de cerrar */}
            <button 
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
            
            {/* Título */}
            <h2 className="text-xl font-bold mb-4 text-dark-heading dark:text-light-heading">
            {title}
            </h2>
            
            {/* Imagen */}
            <img 
            src={image} 
            alt={title} 
            className="w-full h-auto object-contain rounded-lg"
            />
        </div>
        </div>
    );
}
export default CertificateModal;