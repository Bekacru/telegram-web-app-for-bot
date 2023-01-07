export async function addScript() {
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-web-app.js';
    document.getElementsByTagName('head')[0].appendChild(script);
}
addScript();
export const getTelegram = () => {
    let Telegram =
        typeof window !== undefined && window.Telegram !== undefined
            ? window.Telegram.WebApp
            : null;
    return Telegram;
};

// export const setBackButton = (onClick: () => void, offClick?: () => void) => {
//     let BackButton = window.Telegram.WebApp.BackButton;
//     BackButton.onClick(onClick);
//     if (offClick) {
//         BackButton.offClick(offClick);
//     }
//     return {
//         hide: BackButton.hide,
//         show: BackButton.show,
//         isVisible: BackButton.isVisible,
//     };
// };

// const setMainMenu = (
//     onClick: () => void,
//     offClick?: () => void,
//     text?: string
// ) => {
//     let MainMenu =
//         typeof window !== undefined
//             ? window.Telegram.WebApp.MainButton
//             : undefined;
//     if (MainMenu) {
//         MainMenu.onClick(onClick);
//     }
//     return {};
// };
