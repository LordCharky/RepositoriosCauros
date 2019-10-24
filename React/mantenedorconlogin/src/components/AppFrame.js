import React, { Component } from 'react'
import AppHeader from './AppHeader';
const AppFrame = ({body,footer}) => {
    return (
        <div>
            <div className="app-frame">
                <AppHeader></AppHeader>
                <div>{body}</div>
                <div>{footer}</div>
            </div>
        </div>
    );
};
export default AppFrame;
