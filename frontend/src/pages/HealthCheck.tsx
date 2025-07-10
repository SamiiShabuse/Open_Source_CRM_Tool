import React, { useEffect, useState } from 'react';

const HealthCheck: React.FC = () => {
    const [status, setStatus] = useState<string>('Loading...');

    useEffect(() => {
        fetch('http://localhost:8000/api/health-check/')
            .then((res) => res.json())
            .then((data) => setStatus(data.status))
            .catch(() => setStatus('Error connecting to backend.'));
    }, []);

    return <div>Backend Status: {status}</div>;
};

export default HealthCheck;