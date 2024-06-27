// components/MenuFromDashboardComponent.js
import React from 'react';
import Link from 'next/link';
import styles from '../public/styles/MenuFromDashboardComponent.module.css';

const MenuFromDashboardComponent = () => {
    return (
        <nav className={styles.menu}>
            <ul>
                <li><Link href="/dashboard">Dashboard</Link></li>
                <li><Link href="/body">My Body</Link></li>
                <li><Link href="/my_knowledge_hooks">My KnowledgeHooks</Link></li>
                <li><Link href="/testing">Testing</Link></li>
                <li><Link href="/deploy">Deploy</Link></li>
                <li><Link href="/contact">About</Link></li>
            </ul>
        </nav>
    );
};

export default MenuFromDashboardComponent;
