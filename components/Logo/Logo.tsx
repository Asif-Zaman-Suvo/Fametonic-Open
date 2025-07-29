import Image from 'next/image';
import React from 'react';

export const Logo = () => {
    return (
        <div className="flex items-center">
            <Image 
                src="/assets/logo.svg" 
                alt="Fametonic Logo" 
                width={100} 
                height={100}
                className="h-12 w-auto lg:h-18"
            />
        </div>
    );
};