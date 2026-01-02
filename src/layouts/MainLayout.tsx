import { Outlet, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const MainLayout = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="relative flex size-full min-h-screen flex-col bg-white dark:bg-[#101622] group/design-root overflow-x-hidden font-sans">
            <div className="layout-container flex h-full grow flex-col">
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e5e7eb] dark:border-b-[#232f48] px-10 py-3">
                    <div className="flex items-center gap-4 text-[#111418] dark:text-white">
                        <div className="size-4">
                            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01972 4C7.01972 4 1.40491 14.8562 6.94957 24C12.4942 33.1438 6.94957 44 6.94957 44L42.4379 44Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Cubículo Digital</h2>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex flex-1 justify-end gap-8">
                        <div className="flex items-center gap-9">
                            <Link to="/" className="text-[#111418] dark:text-white text-sm font-medium leading-normal hover:text-primary">Inicio</Link>
                            <Link to="/dashboard" className="text-[#111418] dark:text-white text-sm font-medium leading-normal hover:text-primary">Panel</Link>
                            <Link to="/library" className="text-[#111418] dark:text-white text-sm font-medium leading-normal hover:text-primary">Biblioteca</Link>
                            <Link to="/contact" className="text-[#111418] dark:text-white text-sm font-medium leading-normal hover:text-primary">Contacto</Link>
                        </div>
                        <div className="flex gap-2">
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                                <span className="truncate">Comenzar</span>
                            </button>
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f4] dark:bg-[#192233] text-[#111418] dark:text-white text-sm font-bold leading-normal tracking-[0.015em]">
                                <span className="truncate">Login</span>
                            </button>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2 text-[#111418] dark:text-white" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </header>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden fixed inset-0 top-[65px] z-50 bg-white dark:bg-[#101622] p-4 flex flex-col gap-4">
                        <Link to="/" className="text-lg font-medium" onClick={toggleMobileMenu}>Inicio</Link>
                        <Link to="/dashboard" className="text-lg font-medium" onClick={toggleMobileMenu}>Panel</Link>
                        <Link to="/library" className="text-lg font-medium" onClick={toggleMobileMenu}>Biblioteca</Link>
                        <Link to="/contact" className="text-lg font-medium" onClick={toggleMobileMenu}>Contacto</Link>
                    </div>
                )}

                <main className="flex-1 overflow-y-auto">
                    <Outlet />
                </main>

                <footer className="w-full border-t border-[#e5e7eb] dark:border-[#232f48] bg-white dark:bg-[#101622] py-10 px-6">
                    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="size-6 text-primary">
                                <span className="material-symbols-outlined text-2xl">dns</span>
                            </div>
                            <span className="text-lg font-bold text-[#111418] dark:text-white">Cubículo Digital</span>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-8">
                            <a className="text-[#637588] dark:text-[#92a4c9] text-sm hover:text-primary transition-colors" href="#">Privacidad</a>
                            <a className="text-[#637588] dark:text-[#92a4c9] text-sm hover:text-primary transition-colors" href="#">Términos</a>
                            <a className="text-[#637588] dark:text-[#92a4c9] text-sm hover:text-primary transition-colors" href="#">Soporte</a>
                        </div>
                        <p className="text-[#637588] dark:text-[#92a4c9] text-sm">© 2024 Cubículo Digital.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default MainLayout;
