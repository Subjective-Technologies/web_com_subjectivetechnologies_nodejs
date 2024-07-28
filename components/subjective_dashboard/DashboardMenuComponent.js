console.log('Loading DashboardMenuComponent.js');
import React, { useState } from 'react';
import styles from '../../public/styles/DashboardMenuComponent.module.css';

const DashboardMenuComponent = () => {
console.log('Rendering DashboardMenuComponent');
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [delayHandler, setDelayHandler] = useState(null);
    const [showUserSubMenu, setShowUserSubMenu] = useState(false);
    const [userDelayHandler, setUserDelayHandler] = useState(null);

    const handleMouseEnter = () => {
        if (delayHandler) clearTimeout(delayHandler);
        setShowSubMenu(true);
    };

    const handleMouseLeave = () => {
        const handler = setTimeout(() => {
            setShowSubMenu(false);
        }, 200); // Adjust the delay as needed (200ms in this case)
        setDelayHandler(handler);
    };

    const handleUserMouseEnter = () => {
        if (userDelayHandler) clearTimeout(userDelayHandler);
        setShowUserSubMenu(true);
    };

    const handleUserMouseLeave = () => {
        const handler = setTimeout(() => {
            setShowUserSubMenu(false);
        }, 200); // Adjust the delay as needed (200ms in this case)
        setUserDelayHandler(handler);
    };

    const menuItems = [
        { href: "/dashboard/overview", label: "Overview" },
        { href: "/dashboard/sales", label: "Sales" },
        { href: "/dashboard/customers", label: "Customers" },
        { href: "/dashboard/inventory", label: "Inventory" },
        { href: "/dashboard/reports", label: "Reports" },
        { href: "/dashboard/settings", label: "Settings" },
        { href: "/dashboard/testing1", label: "Testing Item 1" },
        { href: "/dashboard/testing2", label: "Testing Item 2" },
        // Adding 25 mock items for demonstration
        ...Array.from({ length: 25 }, (_, i) => ({
            href: `/dashboard/mock${i + 1}`,
            label: `Mock Item ${i + 1}`
        })),
    ];

    const renderMenuItems = () => {
        return menuItems.map((item, index) => (
            <a key={index} href={item.href} className={styles.subMenuItem}>
                {item.label}
            </a>
        ));
    };

console.log('Returning from DashboardMenuComponent');
    return (
        <div className={styles.menu}>
            <div 
                className={`${styles.menuItem} ${styles.link}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <a href="/">
                    <img 
                        src="/images/icons/subjective_technologies_icon_square.png" 
                        alt="Subjective Technologies Icon" 
                        className={styles.subjectiveIcon} 
                    />
                </a>
                <img 
                    src="/images/icons/dashboard_menu_grid_icon.svg" 
                    alt="Dashboard Icon" 
                    className={styles.dashboardIcon} 
                />
                {showSubMenu && (
                    <div className={styles.subMenu}>
                        {renderMenuItems()}
                    </div>
                )}
            </div>
            <a href="dashboard_my_body"><div className={styles.menuItem}>My Body</div></a>
            <a href="dashboard_my_injections"><div className={styles.menuItem}>My Injections</div></a>
            <a href="dashboard_my_knowledge_hooks"><div className={styles.menuItem}>Knowledge Hooks</div></a>
            <a href="dashboard_my_inventory"><div className={styles.menuItem}>Analytics</div></a>
            <a href="dashboard_my_stamina"><div className={styles.menuItem}>My Stamina</div></a>
            <div className={styles.rightAlignedItems}>
                <div 
                    className={styles.userProfile}
                    onMouseEnter={handleUserMouseEnter}
                    onMouseLeave={handleUserMouseLeave}
                >
                    <img 
                        src="/images/icons/profile_yo.-min.jpg" 
                        alt="User Profile" 
                        className={styles.userProfileImage} 
                    />
                    {showUserSubMenu && (
                        <div className={styles.userSubMenu}>
                            <a href="/dashboard_my_profile" className={styles.subMenuItem}>Profile</a>
                            <a href="/dashboard_my_settings" className={styles.subMenuItem}>
                                Settings
                                <img 
                                    src="/images/icons/dashboard_settings_icon.svg" 
                                    alt="Settings Icon" 
                                    className={styles.settingsIcon} 
                                />
                            </a>
                            <a href="/dashboard_security" className={styles.subMenuItem}>Security</a>
                            <a href="/dashboard_billing_and_payment" className={styles.subMenuItem}>Billing Cost and Management</a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DashboardMenuComponent;
