import React from 'react';
import { Logo } from '../Logo/Logo';

const Menu = () => {
    return (
        <div className="w-full bg-black py-4 px-22">
            <div className="flex items-center justify-between">
                {/* Logo */}
               <Logo />
                
                {/* Navigation Links */}
                <div className="flex items-center space-x-8">
                    <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
                        About us
                    </a>
                    <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
                        Contact
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Menu;