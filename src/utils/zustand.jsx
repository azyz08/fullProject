import { create } from 'zustand';

// Local storage'dan dark mode holatini olish funksiyasi
const getInitialDarkMode = () => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode !== null ? JSON.parse(savedMode) : false;
};

// Zustand do'koni yaratish
export const useMode = create((set) => ({
    darkMode: getInitialDarkMode(),
    toggleDarkMode: () =>
        set((state) => {
            const newMode = !state.darkMode;
            localStorage.setItem('darkMode', JSON.stringify(newMode)); // localStorage'ga saqlash
            return { darkMode: newMode };
        }),
}));

export default useMode;
