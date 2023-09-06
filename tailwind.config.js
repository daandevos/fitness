import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        colors: {
            'blue-50': '#eef2f9',
            'blue-100': '#dde5f3',
            'blue-200': '#bacbe8',
            'blue-300': '#a9bfe2',
            'blue-400': '#87a5d6',
            'blue-500': '#7598d1',
            'blue-600': '#537ec5',
            'blue-700': '#42659e',
            'blue-800': '#21324f',
            'blue-900': '#111927',
        },
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
};
