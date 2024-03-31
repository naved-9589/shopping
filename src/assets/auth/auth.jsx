import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
    const isAuthenticated = true; // Example: Replace with your authentication logic
    return isAuthenticated ? (
        <Routes>
            <Route element={<Element />} />
        </Routes>

    ) : (
        <Navigate to="/login" replace />
    );
};

export default PrivateRoute;