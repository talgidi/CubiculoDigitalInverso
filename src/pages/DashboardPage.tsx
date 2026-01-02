import { Play, Plus, Box, Briefcase, Users, DollarSign, Terminal, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
    return (
        <div className="flex flex-col w-full bg-[#f3f4f6] dark:bg-[#101622] min-h-full">
            <main className="flex-1 overflow-y-auto p-6 md:p-10">
                <div className="mx-auto max-w-[1200px]">
                    {/* Header */}
                    <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight text-[#111418] dark:text-white">Panel de Control</h1>
                            <p className="text-[#637588] dark:text-[#92a4c9]">Gestiona el progreso de tu Biblia Corporativa por departamentos.</p>
                        </div>
                        <div className="flex gap-3">
                            <button className="flex items-center gap-2 rounded-lg bg-white dark:bg-[#192233] border border-[#e5e7eb] dark:border-[#324467] px-4 py-2 text-sm font-medium text-[#111418] dark:text-white hover:bg-[#f9fafb] dark:hover:bg-[#232f48] shadow-sm">
                                <Activity className="size-4" />
                                <span>Reporte General</span>
                            </button>
                            <Link to="/setup" className="flex items-center gap-2 rounded-lg bg-[#1980e6] px-4 py-2 text-sm font-bold text-white shadow-lg shadow-[#1980e6]/20 hover:bg-[#1980e6]/90">
                                <Plus className="size-4" />
                                <span>Nueva Entrevista</span>
                            </Link>
                        </div>
                    </div>

                    {/* Stats Overview (Simplified from assumed context) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        <div className="rounded-xl bg-white dark:bg-[#192233] p-6 shadow-sm border border-[#e5e7eb] dark:border-[#324467]">
                            <p className="text-sm font-medium text-[#637588] dark:text-[#92a4c9]">Progreso Total</p>
                            <h3 className="text-2xl font-bold text-[#111418] dark:text-white mt-2">12%</h3>
                            <div className="w-full bg-gray-200 dark:bg-[#232f48] rounded-full h-2.5 mt-4">
                                <div className="bg-[#1980e6] h-2.5 rounded-full" style={{ width: '12%' }}></div>
                            </div>
                        </div>
                        {/* More stats can go here */}
                    </div>

                    {/* Departamentos Grid */}
                    <h2 className="text-xl font-bold text-[#111418] dark:text-white mb-6">Departamentos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Ventas - Completed */}
                        <div className="group relative flex flex-col rounded-xl border border-[#e5e7eb] dark:border-[#324467] bg-white dark:bg-[#192233] p-5 shadow-sm hover:border-[#1980e6]/50 transition-all duration-300">
                            <div className="absolute top-5 right-5">
                                <span className="inline-flex items-center rounded-full bg-green-50 dark:bg-green-500/10 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-400 ring-1 ring-inset ring-green-600/20 dark:ring-green-500/20">Completado</span>
                            </div>
                            <div className="mb-4 size-12 rounded-lg bg-green-50 dark:bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                                <DollarSign className="size-7" />
                            </div>
                            <h3 className="text-[#111418] dark:text-white text-lg font-bold mb-1">Ventas</h3>
                            <p className="text-[#637588] dark:text-[#92a4c9] text-sm mb-6 line-clamp-2">Estrategias comerciales, CRM y funnels de conversión.</p>
                            <div className="mt-auto">
                                <div className="flex justify-between text-xs font-medium text-[#637588] dark:text-[#92a4c9] mb-2">
                                    <span>Progreso</span>
                                    <span className="text-[#111418] dark:text-white">100%</span>
                                </div>
                                <div className="h-1.5 w-full rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden mb-5">
                                    <div className="h-full bg-green-500 rounded-full w-full"></div>
                                </div>
                                <button className="w-full py-2.5 rounded-lg border border-[#e5e7eb] dark:border-[#324467] text-[#111418] dark:text-white hover:bg-gray-50 dark:hover:bg-[#232f48] text-sm font-bold transition-all flex items-center justify-center gap-2">
                                    Ver Respuestas
                                </button>
                            </div>
                        </div>

                        {/* Operaciones - In Progress */}
                        <div className="group relative flex flex-col rounded-xl border border-[#e5e7eb] dark:border-[#324467] bg-white dark:bg-[#192233] p-5 shadow-sm hover:border-[#1980e6]/50 transition-all duration-300">
                            <div className="absolute top-5 right-5">
                                <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-400 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-500/20">En Progreso</span>
                            </div>
                            <div className="mb-4 size-12 rounded-lg bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">
                                <Box className="size-7" />
                            </div>
                            <h3 className="text-[#111418] dark:text-white text-lg font-bold mb-1">Operaciones</h3>
                            <p className="text-[#637588] dark:text-[#92a4c9] text-sm mb-6 line-clamp-2">Logística, cadena de suministro y procesos diarios.</p>
                            <div className="mt-auto">
                                <div className="flex justify-between text-xs font-medium text-[#637588] dark:text-[#92a4c9] mb-2">
                                    <span>Progreso</span>
                                    <span className="text-[#111418] dark:text-white">75%</span>
                                </div>
                                <div className="h-1.5 w-full rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden mb-5">
                                    <div className="h-full bg-[#1980e6] rounded-full w-[75%]"></div>
                                </div>
                                <Link to="/interview" className="w-full py-2.5 rounded-lg bg-[#1980e6] text-white hover:bg-blue-600 text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-sm shadow-blue-500/20">
                                    <Play className="size-4" />
                                    Continuar Entrevista
                                </Link>
                            </div>
                        </div>

                        {/* Finanzas - Pending */}
                        <div className="group relative flex flex-col rounded-xl border border-[#e5e7eb] dark:border-[#324467] bg-white dark:bg-[#192233] p-5 shadow-sm hover:border-[#1980e6]/50 transition-all duration-300">
                            <div className="absolute top-5 right-5">
                                <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-700 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 ring-1 ring-inset ring-gray-500/10 dark:ring-gray-400/20">Pendiente</span>
                            </div>
                            <div className="mb-4 size-12 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                                <DollarSign className="size-7" />
                            </div>
                            <h3 className="text-[#111418] dark:text-white text-lg font-bold mb-1">Finanzas</h3>
                            <p className="text-[#637588] dark:text-[#92a4c9] text-sm mb-6 line-clamp-2">Presupuestos, proyecciones fiscales y gestión de activos.</p>
                            <div className="mt-auto">
                                <div className="flex justify-between text-xs font-medium text-[#637588] dark:text-[#92a4c9] mb-2">
                                    <span>Progreso</span>
                                    <span className="text-[#111418] dark:text-white">0%</span>
                                </div>
                                <div className="h-1.5 w-full rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden mb-5">
                                    <div className="h-full bg-[#1980e6] rounded-full w-0"></div>
                                </div>
                                <Link to="/interview" className="w-full py-2.5 rounded-lg border border-dashed border-gray-300 dark:border-[#324467] text-[#1980e6] hover:bg-[#1980e6]/5 hover:border-[#1980e6] hover:border-solid text-sm font-bold transition-all flex items-center justify-center gap-2">
                                    <Plus className="size-4" />
                                    Iniciar Entrevista
                                </Link>
                            </div>
                        </div>

                        {/* Add New Department */}
                        <div className="flex flex-col rounded-xl border border-dashed border-gray-300 dark:border-[#324467] bg-gray-50/50 dark:bg-[#192233]/30 p-5 shadow-sm hover:border-[#1980e6]/50 hover:bg-gray-100 dark:hover:bg-[#192233]/50 transition-all duration-300 cursor-pointer items-center justify-center min-h-[280px]">
                            <div className="size-16 rounded-full bg-gray-200 dark:bg-[#324467] flex items-center justify-center text-gray-500 dark:text-[#92a4c9] mb-4">
                                <Plus className="size-8" />
                            </div>
                            <h3 className="text-[#111418] dark:text-white text-base font-bold mb-1">Añadir Departamento</h3>
                            <p className="text-[#637588] dark:text-[#92a4c9] text-sm text-center">Personaliza la estructura de tu Biblia Corporativa.</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DashboardPage;
