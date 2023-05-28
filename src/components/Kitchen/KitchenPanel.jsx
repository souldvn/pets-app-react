import React from 'react';
import styles from './KitchenPanel.module.css'
import meet from '../../images/meet.png'
import milk from '../../images/milk.png'
import fish from '../../images/fish.png'
import vege from '../../images/veget.png'

const KitchenPanel = ({setBarWidth}) =>  {


    const handleWidth = () => {
        setBarWidth((prevWidth) => {
            const numericWidth = parseInt(prevWidth, 10); // Преобразование предыдущего значения в число
            const newWidth = numericWidth + 10; // Добавление 10%
            return `${newWidth}%`; // Возвращение нового значения с добавленным процентом
        });
    };



    const menuItems = [
        { icon: meet, label: "мясо", width: 10 },
        { icon: milk, label: "молоко", width: 20 },
        { icon: fish, label: "рыба", width: 30 },
        { icon: vege, label: "овощи", width: 40 }
    ];

    return (
        <div className={styles.menu}>
            <nav className={styles.navigation}>
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index} onClick={handleWidth}>
                            <img src={item.icon} alt="" />
                            <span>{item.label}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
export default KitchenPanel;