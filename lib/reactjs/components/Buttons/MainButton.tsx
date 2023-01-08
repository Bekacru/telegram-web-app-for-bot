import { useEffect } from 'react';

const MainButton = ({
    onClick,
    text,
    textColor,
    color,
}: {
    onClick: (callback: () => void) => void;
    text?: string;
    textColor?: string;
    color?: string;
}) => {
    const WebAppMainButton =
        typeof window !== 'undefined'
            ? window?.Telegram?.WebApp?.MainButton
            : null;
    if (!WebAppMainButton) return null;
    useEffect(() => {
        WebAppMainButton.show();
        return () => {
            WebAppMainButton.hide();
        };
    }, []);
    useEffect(() => {
        WebAppMainButton.onClick(onClick);
        if (text) WebAppMainButton.text = text;
        if (textColor) WebAppMainButton.textColor = textColor;
        if (color) WebAppMainButton.color = color;
        return () => {
            WebAppMainButton.offClick(onClick);
            WebAppMainButton.setParams(
                'Continue',
                'blue',
                'white',
                false,
                false
            );
        };
    });
    return null;
};

export default MainButton;
