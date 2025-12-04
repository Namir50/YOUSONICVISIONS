import React, { useEffect } from 'react';

const CustomAlert = ({ message, type, onClose }) => {
    if (!message) return null;

    const baseClasses = "fixed bottom-4 right-4 p-4 rounded-lg shadow-2xl z-[100] font-mono text-sm";
    const typeClasses = type === 'error'
        ? "bg-red-800 text-white border border-red-600"
        : "bg-[#3F00FF] text-white border border-indigo-600";

    useEffect(() => {
        const timer = setTimeout(onClose, 5000);
        return () => clearTimeout(timer);
    }, [message, onClose]);

    return (
        <div className={`${baseClasses} ${typeClasses}`}>
            {message}
            <button onClick={onClose} className="ml-4 font-bold opacity-70 hover:opacity-100">&times;</button>
        </div>
    );
};

export default CustomAlert;
