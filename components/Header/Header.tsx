import React from 'react';

const Header = () => {
    return (
        <div className="w-full py-3 lg:py-4 px-4 lg:px-6 relative header-banner">
            <div className="flex flex-col sm:flex-row items-center justify-center text-white font-semibold text-xs sm:text-sm lg:text-lg text-center">
                <div className="flex items-center mb-1 sm:mb-0">
                    <span className="mr-1 lg:mr-2">🚀</span>
                    <span className="text-cyan-300">FRESH BEGINNINGS SALE:</span>
                </div>
                <div className="sm:ml-1 lg:ml-2">
                    <span>Extra 25% OFF, Limited Spots - start your journey today!</span>
                </div>
            </div>
        </div>
    );
};

export default Header;