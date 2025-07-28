import React from 'react';

const Header = () => {
    return (
        <div className="w-full py-4 px-6 relative" style={{
            background: 'linear-gradient(to right, rgba(252, 0, 78, 1), rgba(16, 203, 224, 1))'
        }}>
            <div className="flex items-center justify-center text-white font-semibold text-lg">
                <span className="mr-2">🚀</span>
                <span className="text-cyan-300">FRESH BEGINNINGS SALE:</span>
                <span className="ml-2">Extra 25% OFF, Limited Spots - start your journey today!</span>
            </div>
        </div>
    );
};

export default Header;