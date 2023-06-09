import React, { createContext, useState, useEffect } from 'react';

const BarWidthContext = createContext();

const BarWidthProvider = ({ children }) => {
    const [barWidth, setBarWidth] = useState(
        localStorage.getItem('barWidth') || '50%'
    );
    const [energyLevel, setEnergyLevel] = useState(
        parseInt(localStorage.getItem('energyLevel')) || 100
    );
    const [emotional, setEmotional] = useState(
        parseInt(localStorage.getItem('emotional')) || 100
    );

    useEffect(() => {
        localStorage.setItem('barWidth', barWidth);
    }, [barWidth]);

    useEffect(() => {
        localStorage.setItem('energyLevel', energyLevel);
    }, [energyLevel]);

    useEffect(() => {
        localStorage.setItem('emotional', emotional);
    }, [emotional]);

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.setItem('barWidth', barWidth);
            localStorage.setItem('energyLevel', energyLevel);
            localStorage.setItem('emotional', emotional);
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [barWidth, energyLevel, emotional]);

    const updateBarWidth = (newWidth) => {
        setBarWidth(newWidth);
    };

    // Остальной код

    return (
        <BarWidthContext.Provider
            value={{
                barWidth,
                updateBarWidth,
                energyLevel,
                setEnergyLevel,
                emotional,
                setEmotional,
            }}
        >
            {children}
        </BarWidthContext.Provider>
    );
};

export { BarWidthContext, BarWidthProvider };
