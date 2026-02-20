import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import SplashScreen from './pages/SplashScreen';
import LoginScreen from './pages/LoginScreen';
import RegistrationScreen from './pages/RegistrationScreen';
import DashboardScreen from './pages/DashboardScreen';

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();
    return user ? children : <Navigate to="/login" />;
};

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegistrationScreen />} />
            <Route path="/dashboard" element={
                <PrivateRoute>
                    <DashboardScreen />
                </PrivateRoute>
            } />
        </Routes>
    );
}

function App() {
    return (
        <AuthProvider>
            <Router>
                <AppRoutes />
            </Router>
        </AuthProvider>
    );
}

export default App;
