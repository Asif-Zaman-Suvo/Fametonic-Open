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
        <div ref={menuRef} className="w-full bg-black pb-15 relative">
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
                    <a href="#" className="text-white hover:text-gray-300">
                        About us
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                        Contact
                    </a>
                </div>

                {/* Mobile Hamburger Menu */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white p-2 focus:outline-none z-50"
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-6 flex flex-col justify-center items-center">
                            <span className={`block w-5 h-0.5 bg-white ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                            <span className={`block w-5 h-0.5 bg-white mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-5 h-0.5 bg-white mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black border-t border-gray-800 z-40">
                    <div className="flex flex-col space-y-0 p-0">
                        <a href="#" className="text-white hover:text-gray-300 py-4 px-6 border-b border-gray-700">
                            About us
                        </a>
                        <a href="#" className="text-white hover:text-gray-300 py-4 px-6">
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Menu;