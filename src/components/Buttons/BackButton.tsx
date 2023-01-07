import React, { useEffect } from 'react';
const BackButton = ({ onClick }: { onClick: () => void }) => {
    useEffect(() => {
        window.Telegram.WebApp.BackButton.show();
        window.Telegram.WebApp.BackButton.onClick = onClick;
    }, []);
    return null;
};
export default BackButton;
