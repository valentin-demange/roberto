import React from 'react';
import styles from './ChatBottomBar.module.css';
import { ActionsButton } from './ActionsButton';

export const ChatBottomBar = () => {
    return (
        <div className={styles.container}>
            <ActionsButton />
            <div className="text">
                {"Buildin' the chat bottom bar..."}
            </div>
        </div>
    );
    }