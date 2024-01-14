import {Inter} from 'next/font/google';
import './globals.css';


const RootLayout = ({children}) => (
    <html lang="fr">
    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css"/>
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" defer></script>
        <title>Mon Portfolio</title>
    </head>
    <body className="bg-gray-900 text-white font-inter">
    {children}
    </body>
    </html>
);

export default RootLayout;