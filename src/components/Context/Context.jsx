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
        localStorage.setItem('lastUpdateTime', Date.now());
    }, [barWidth]);

    useEffect(() => {
        localStorage.setItem('energyLevel', energyLevel);
        localStorage.setItem('lastUpdateTime', Date.now());
    }, [energyLevel]);

    useEffect(() => {
        localStorage.setItem('emotional', emotional);
        localStorage.setItem('lastUpdateTime', Date.now());
    }, [emotional]);

    useEffect(() => {
        const lastUpdateTime = localStorage.getItem('lastUpdateTime');
        const timeDiff = Date.now() - lastUpdateTime;

        const decreaseValues = () => {
            setBarWidth((prevWidth) => {
                const newWidth = parseFloat(prevWidth) - (timeDiff / 1000) * 0.05;
                const clampedWidth = clampValue(newWidth, 1, 100);
                return `${clampedWidth}%`;
            });

            setEnergyLevel((prevEnergyLevel) => {
                const newEnergyLevel = prevEnergyLevel - (timeDiff / 1000) * 0.05;
                return clampValue(newEnergyLevel, 1, 100);
            });

            setEmotional((prevEmotional) => {
                const newEmotional = prevEmotional - (timeDiff / 1000) * 0.05;
                return clampValue(newEmotional, 1, 100);
            });
        };

        decreaseValues();

        const intervalId = setInterval(decreaseValues, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const clampValue = (value, min, max) => {
        return Math.min(Math.max(value, min), max);
    };

    // Остальной код

    return (
        <BarWidthContext.Provider
            value={{
                barWidth,
                setBarWidth,
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
