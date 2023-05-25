import React from 'react';
import Login from '../Pages/Login/Login/Login';
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';
import Register from '../Pages/Login/Register/Register';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;