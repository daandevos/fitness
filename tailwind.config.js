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
        extend: {
            fontFamily: {
                sans: ['Dosis', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                ...defaultTheme.colors,
                'light-blue-50': '#eef2f9',
                'light-blue-100': '#cbd8ee',
                'light-blue-200': '#a9bfe2',
                'light-blue-300': '#87a5d6',
                'light-blue-400': '#7598d1',
                'light-blue-500': '#648bcb',
                'light-blue-600': '#537ec5',
                'light-blue-700': '#3a588a',
                'light-blue-800': '#21324f',
                'light-blue-900': '#111927',
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
                'navy-blue-50': '#e6e6eb',
                'navy-blue-100': '#b3b3c3',
                'navy-blue-200': '#9999af',
                'navy-blue-300': '#676688',
                'navy-blue-400': '#4d4d74',
                'navy-blue-500': '#343360',
                'navy-blue-600': '#010038',
                'navy-blue-700': '#010027',
                'navy-blue-800': '#000016',
                'navy-blue-900': '#00000b',
            },
        },
    },

    plugins: [forms],
};
