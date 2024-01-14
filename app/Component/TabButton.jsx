import React from 'react';


const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active
        ? 'mr-3 font-bold text-white border-b-4 border-orange-500 xl:text-xl lg:text-lg sm:text-base text-xs'
        : 'mr-3 hover:text-white text-[#929292] xl:text-xl lg:text-lg sm:text-base text-xs';

    return (
        <button onClick={selectTab}>
            <p className={`font-semibold ${buttonClasses}`}>{children}</p>
        </button>
    );
};

export default TabButton;