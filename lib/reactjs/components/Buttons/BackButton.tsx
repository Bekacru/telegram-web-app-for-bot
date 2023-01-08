import { FC, useEffect } from 'react';

export interface BackButtonProps {
    onClick: () => void;
}

const BackButton: FC<BackButtonProps> = ({ onClick }) => {
    const WebAppBackButton =
        typeof window !== 'undefined'
            ? window?.Telegram?.WebApp?.BackButton
            : null;
    if (!WebAppBackButton) return null;

    useEffect(() => {
        WebAppBackButton.show();
        return () => {
            WebAppBackButton.hide();
        };
    }, []);

    useEffect(() => {
        if (!onClick) {
            return;
        }

        WebAppBackButton.onClick(onClick);
        return () => {
            WebAppBackButton.offClick(onClick);
        };
    }, [onClick]);

    return null;
};

export default BackButton;
