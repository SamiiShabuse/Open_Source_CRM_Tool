import React, { useEffect, useState } from 'react';

const HealthCheck: React.FC = () => {
    const [status, setStatus] = useState<string>('Loading...');

    useEffect(() => {
        fetch('http://localhost:8000/api/health-check/')
            .then((res) => {
                console.log('Raw Response;', res);
                return res.json();
            })
            .then((data) => {
                console.log('Parsed Data:', data);
                setStatus(data.status);
            })
            .catch((error) => {
                console.error('Error fetching health check:', error);
                setStatus('Error connecting to backend.');
            });
    }, []);

    return <div>Backend Status: {status}</div>;
};

export default HealthCheck;