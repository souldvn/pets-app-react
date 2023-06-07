import React, { createContext, useState, useEffect } from 'react';

const BarWidthContext = createContext();

const BarWidthProvider = ({ children }) => {
    const [barWidth, setBarWidth] = useState(localStorage.getItem('barWidth') || '50%');
    const [energyLevel, setEnergyLevel] = useState(
        parseInt(localStorage.getItem('energyLevel')) || 100
    ); // Восстановление значения из localStorage

    useEffect(() => {
        localStorage.setItem('barWidth', barWidth);
    }, [barWidth]);

    useEffect(() => {
        localStorage.setItem('energyLevel', energyLevel); // Сохранение значения в localStorage
    }, [energyLevel]);

    const updateBarWidth = (newWidth) => {
        setBarWidth(newWidth);
    };

    return (
        <BarWidthContext.Provider value={{ barWidth, updateBarWidth, energyLevel, setEnergyLevel }}>
            {children}
        </BarWidthContext.Provider>
    );
};

export { BarWidthContext, BarWidthProvider };



