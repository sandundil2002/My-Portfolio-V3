'use client';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

type NavItem = {
    label: string;
    href: string;
};

const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Skills', href: '/skills' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blogs', href: '/blogs' },
];

export const Navbar = () => {
    const [, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    return (
        <header className={cn(
            'fixed top-0 w-full z-50 transition-all duration-300 bg-gray-900 backdrop-blur-md shadow-md py-3 text-white'
        )}>
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
                <a
                    className="text-2xl font-bold tracking-tight hover:opacity-90 transition-opacity"
                    aria-label="Logo"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
                        My Portfolio
                    </span>
                </a>

                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={cn(
                                'text-sm font-medium transition-all duration-200 relative text-gray-200 hover:text-blue-400',
                                activeSection === item.href.substring(1) &&
                                'text-blue-400 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-blue-400'
                            )}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <a
                    href="/contact"
                    className={cn(
                        "hidden md:inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg"
                    )}
                >
                    Get In Touch
                </a>

                <div className="md:hidden flex items-center space-x-2">
                    <button
                        className="p-2 rounded-lg transition-colors hover:bg-gray-800"
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
                    'bg-gray-900/95 border-gray-800'
                )}
            >
                <nav className={cn(
                    "flex flex-col px-4 py-4 backdrop-blur-md border-t border-gray-800"
                )}>
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={cn(
                                'py-2 text-sm font-medium transition-colors rounded-md px-2',
                                'text-gray-300 hover:text-blue-400 hover:bg-gray-800',
                                activeSection === item.href.substring(1) &&
                                'text-blue-400 bg-gray-800'
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
                            "bg-blue-600 hover:bg-blue-700"
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