'use client';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

type NavItem = {
    label: string;
    href: string;
};

const navItems: NavItem[] = [
    { label: 'Home', href: '/home' },
    { label: 'About', href: '/about' },
    { label: 'Skills', href: '/skills' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blogs', href: '/blogs' },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDarkMode(prefersDark);
        }
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = document.querySelectorAll('section[id]');
            const scrollPosition = window.scrollY + 100;

            sections.forEach(section => {
                const sectionTop = (section as HTMLElement).offsetTop;
                const sectionHeight = section.clientHeight;
                const sectionId = section.getAttribute('id') || '';

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(sectionId);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <header className={cn(
            'fixed top-0 w-full z-50 transition-all duration-300',
            scrolled
                ? isDarkMode
                    ? 'bg-gray-900/80 backdrop-blur-md shadow-md py-3'
                    : 'bg-white/80 backdrop-blur-md shadow-md py-3'
                : 'bg-transparent py-6',
            isDarkMode ? 'text-white' : 'text-gray-900'
        )}>
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
                <a
                    href="/home"
                    className="text-2xl font-bold tracking-tight hover:opacity-90 transition-opacity"
                    aria-label="Logo"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
                        Sandun Dilshan
                    </span>
                </a>

                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={cn(
                                'text-sm font-medium transition-all duration-200 relative',
                                isDarkMode
                                    ? 'text-gray-200 hover:text-blue-400'
                                    : 'text-gray-800 hover:text-blue-600',
                                activeSection === item.href.substring(1) && (
                                    isDarkMode
                                        ? 'text-blue-400 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-blue-400'
                                        : 'text-blue-600 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-blue-600'
                                )
                            )}
                        >
                            {item.label}
                        </a>
                    ))}

                    <button
                        onClick={toggleTheme}
                        className={cn(
                            "p-2 rounded-full transition-colors",
                            isDarkMode
                                ? "text-yellow-300 hover:bg-gray-800"
                                : "text-gray-600 hover:bg-gray-100"
                        )}
                        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                    >
                        {isDarkMode ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                            </svg>
                        )}
                    </button>
                </nav>

                <a
                    href="/contact"
                    className={cn(
                        "hidden md:inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                        isDarkMode
                            ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg"
                            : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg"
                    )}
                >
                    Get In Touch
                </a>

                <div className="md:hidden flex items-center space-x-2">
                    <button
                        onClick={toggleTheme}
                        className={cn(
                            "p-2 rounded-full transition-colors",
                            isDarkMode
                                ? "text-yellow-300 hover:bg-gray-800"
                                : "text-gray-600 hover:bg-gray-100"
                        )}
                        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                    >
                        {isDarkMode ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                            </svg>
                        )}
                    </button>

                    <button
                        className={cn(
                            "p-2 rounded-lg transition-colors",
                            isDarkMode
                                ? "hover:bg-gray-800"
                                : "hover:bg-gray-100"
                        )}
                        aria-label="Toggle menu"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            <div
                className={cn(
                    'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
                    isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0',
                    isDarkMode ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-100'
                )}
            >
                <nav className={cn(
                    "flex flex-col px-4 py-4 backdrop-blur-md border-t",
                    isDarkMode ? "border-gray-800" : "border-gray-100"
                )}>
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={cn(
                                'py-2 text-sm font-medium transition-colors rounded-md px-2',
                                isDarkMode
                                    ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50',
                                activeSection === item.href.substring(1) && (
                                    isDarkMode
                                        ? 'text-blue-400 bg-gray-800'
                                        : 'text-blue-600 bg-blue-50'
                                )
                            )}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href="/contact"
                        className={cn(
                            "mt-2 py-2 px-4 text-sm font-medium text-center text-white rounded-md transition-colors",
                            isDarkMode
                                ? "bg-blue-600 hover:bg-blue-700"
                                : "bg-blue-600 hover:bg-blue-700"
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Get in Touch
                    </a>
                </nav>
            </div>
        </header>
    );
};