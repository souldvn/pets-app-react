import React, { createContext, useState } from 'react';

const BarWidthContext = createContext();

const BarWidthProvider = ({ children }) => {
    const [barWidth, setBarWidth] = useState(localStorage.getItem('barWidth') || '50%');

    const updateBarWidth = (newWidth) => {
        setBarWidth(newWidth);
    };

    return (
        <BarWidthContext.Provider value={{ barWidth, updateBarWidth }}>
            {children}
        </BarWidthContext.Provider>
    );
};

export { BarWidthContext, BarWidthProvider };
