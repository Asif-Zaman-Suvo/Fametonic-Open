"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Logo } from '../Logo/Logo';

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                closeMenu();
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <div ref={menuRef} className="w-full bg-black py-4 px-6 lg:px-22 relative">
            <div className="flex items-center justify-between">
                {/* Desktop Logo - Left side */}
                <div className="hidden md:block">
                    <Logo />
                </div>
                
                {/* Mobile Logo - Centered */}
                <div className="md:hidden flex-1 flex justify-center">
                    <Logo />
                </div>
                
                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
                        About us
                    </a>
                    <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
                        Contact
                    </a>
                </div>

                {/* Mobile Hamburger Menu */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white p-2 focus:outline-none z-50 hover:bg-gray-800 rounded-lg transition-all duration-300"
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-6 flex flex-col justify-center items-center">
                            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                            <span className={`block w-5 h-0.5 bg-white mt-1 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0 scale-0' : ''}`}></span>
                            <span className={`block w-5 h-0.5 bg-white mt-1 transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay with Animation */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm border-t border-gray-800 z-40 transition-all duration-500 ease-in-out ${
                isMenuOpen 
                    ? 'opacity-100 translate-y-0 shadow-2xl' 
                    : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}>
                <div className="flex flex-col space-y-0 p-0">
                    <a href="#" className="text-white hover:text-gray-300 transition-all duration-300 py-4 px-6 border-b border-gray-700 hover:bg-gray-800 transform hover:translate-x-2">
                        About us
                    </a>
                    <a href="#" className="text-white hover:text-gray-300 transition-all duration-300 py-4 px-6 hover:bg-gray-800 transform hover:translate-x-2">
                        Contact
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Menu;