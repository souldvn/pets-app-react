import React from 'react';
import styles from './KitchenPanel.module.css'
import meet from '../../images/meet.png'
import milk from '../../images/milk.png'
import fish from '../../images/fish.png'
import vege from '../../images/veget.png'

const KitchenPanel = (props) =>  {

    const handleWidth = (item) => {
        const allWidths = menuItems.reduce((sum, menuItem) => sum + menuItem.width, 0);
        const coefficient = 100 / allWidths;
        const currentWidthValue = props.barWidth ? parseInt(props.barWidth.slice(0,-1)) : 0;
        const newWidthValue = currentWidthValue + item.width * coefficient;
        const newWidth = newWidthValue > 100 ? "100%" : `${newWidthValue}%`;
        props.onBarWidthChange(newWidth);
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
                        <li key={index} onClick={() => handleWidth(item, item.width)}>
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