import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedRoutes({ component }) {
    const navigate = useNavigate();
    let login = localStorage.getItem("login");

    useEffect(() => {
        if (!login) {
            navigate("/login");
        }
    }, [navigate]);

    return (
        <div>
            {component}
        </div>
    );
}

export default ProtectedRoutes;
