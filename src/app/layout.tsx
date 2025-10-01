
import './globals.css';
import {Metadata} from "next";
import HeaderComponent from "@/Components/HeaderComponent/HeaderComponent";

export const metadata:Metadata  = {
    title: "MovieQueen",
    description: "Discover new movies",
    icons: {
        icon: [
            { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: '/favicon_io/apple-touch-icon.png',
    },
    manifest: '/favicon_io/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="uk">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link href="https://fonts.googleapis.com/css2?family=Tektur:wght@400..900&display=swap" rel="stylesheet" />
        </head>
        <body>
        <HeaderComponent/>
        <main>{children}</main>
        </body>
        </html>
    );
}