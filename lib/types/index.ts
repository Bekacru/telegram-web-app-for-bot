export {};
type WebApp = {
    MainButton: {
        text: string;
        color: string;
        textColor: string;
        isVisible: boolean;
        isActive: boolean;
        isProgressVisible: boolean;
        setText: (text: string) => void;
        onClick: (callback: () => void) => void;
        offClick: (callback: () => void) => void;
        show: () => void;
        hide: () => void;
        enable: () => void;
        disable: () => void;
        showProgress: (leaveActive: boolean) => void;
        hideProgress: () => void;
        setParams: (
            text: string,
            color: string,
            text_color: string,
            is_active: string,
            is_visible: string
        ) => void;
    };
    close(): void;
    colorScheme: string;
    expand(): void;
    initData: string;
    initDataUnsafe: {
        user: {
            username: string;
        };
    };
    isExpanded: boolean;
    isVersionAtLeast(ver: string): boolean;
    offEvent(eventType: string, callBack: () => void): void;
    onEvent(eventType: string, callBack: () => void): void;
    openTelegramLink(url: string): void;
    ready(): void;
    sendData(data: string): void;
    themeParams: object;
    version: string;
    viewportHeight: number;
    viewportStableHeight: number;
    platform: string;
    setBackgroundColor: (color: string) => void;
    showPopup: (id: string, type: string, text: string) => void;
    HapticFeedback: {
        impactOccurred: (style: string) => void;
        notificationOccurred: (type: string) => void;
        selectionChanged: () => void;
    };
    BackButton: {
        isVisible: boolean;
        onClick: (onClick?: () => void) => void;
        offClick: (offClick?: () => void) => void;
        show: () => void;
        hide: () => void;
    };
};
declare global {
    interface Window {
        Telegram: {
            WebView: any;
            webData: any;
            WebApp: WebApp;
        };
    }
}
