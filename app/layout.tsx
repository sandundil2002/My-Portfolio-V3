import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import {Navbar} from "@/components/Navbar";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Sandun Dilshan - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, TypeScript, Node.js & Java',
    openGraph: {
        title: 'Sandun Dilshan - Full Stack Developer',
        description: 'Full Stack Developer specializing in React, Next.js, TypeScript, Node.js & Java',
        url: 'https://sandundilshan.dev',
        siteName: 'Sandun Dilshan',
        locale: 'en_US',
        type: 'website',
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
            <div className="flex min-h-screen flex-col">
                <Navbar/>
                <main className="flex-1">{children}</main>
            </div>
        </body>
        </html>
    );
}
