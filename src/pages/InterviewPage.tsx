import { Home, MessageSquare, Building2, Settings, ChevronRight, Save, Bold, Italic, List, ListOrdered, Mic, ArrowLeft, ArrowRight, Book } from 'lucide-react';

const InterviewPage = () => {
    return (
        <div className="flex h-[calc(100vh-65px)] bg-[#101622] text-white font-sans overflow-hidden">
            {/* Sidebar (Mock functional) */}
            <aside className="hidden lg:flex w-64 flex-col border-r border-[#232f48] bg-[#111722]">
                <div className="flex h-16 items-center px-6 border-b border-[#232f48]/30">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-8 h-8 rounded bg-[#1980e6] text-white">
                            <Book className="size-5" />
                        </div>
                        <span className="text-lg font-bold tracking-tight text-white">Biblia Corp.</span>
                    </div>
                </div>
                <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
                    <a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[#92a4c9] hover:bg-[#192233] hover:text-white transition-colors" href="#">
                        <Home className="size-5" />
                        Inicio
                    </a>
                    {/* Active State */}
                    <a className="group flex items-center gap-3 rounded-lg bg-[#1980e6]/10 px-3 py-2.5 text-sm font-medium text-[#1980e6] hover:bg-[#1980e6]/20 transition-colors" href="#">
                        <MessageSquare className="size-5" />
                        Entrevistas
                    </a>
                    <a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[#92a4c9] hover:bg-[#192233] hover:text-white transition-colors" href="#">
                        <Building2 className="size-5" />
                        Departamentos
                    </a>
                    <a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[#92a4c9] hover:bg-[#192233] hover:text-white transition-colors" href="#">
                        <Settings className="size-5" />
                        Configuración
                    </a>
                </nav>
                <div className="border-t border-[#232f48]/30 p-4">
                    <div className="flex items-center gap-3">
                        <div className="h-9 w-9 overflow-hidden rounded-full bg-[#192233] relative flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1980e6] to-purple-600"></div>
                            <span className="relative font-bold text-xs">CR</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-white">Admin User</span>
                            <span className="text-xs text-[#92a4c9]">Admin</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex flex-1 flex-col h-full relative overflow-hidden bg-[#101622]">
                {/* Top Header */}
                <header className="flex h-16 items-center justify-between border-b border-[#232f48] bg-[#111722]/50 px-6 backdrop-blur-md">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-sm text-[#92a4c9]">
                            <span>Entrevistas</span>
                            <ChevronRight className="size-4" />
                            <span className="text-white">Sesión Activa</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-xs text-[#92a4c9] hidden sm:inline-block mr-2">Guardado automático hace 2 min</span>
                        <button className="flex items-center gap-2 rounded-lg border border-[#232f48] bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-[#192233] transition-colors">
                            <Save className="size-4" />
                            <span>Guardar y Salir</span>
                        </button>
                    </div>
                </header>

                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto scroll-smooth">
                    <div className="mx-auto max-w-4xl px-6 py-10 pb-32">
                        {/* Progress Section */}
                        <div className="mb-10 flex flex-col gap-3">
                            <div className="flex items-end justify-between">
                                <div>
                                    <h2 className="text-lg font-semibold text-white">Progreso de la Entrevista</h2>
                                    <p className="text-sm text-[#92a4c9]">Pregunta 3 de 10</p>
                                </div>
                                <span className="text-sm font-bold text-[#1980e6]">30%</span>
                            </div>
                            <div className="h-2 w-full overflow-hidden rounded-full bg-[#192233]">
                                <div className="h-full rounded-full bg-[#1980e6] transition-all duration-500 ease-out" style={{ width: '30%' }}></div>
                            </div>
                        </div>

                        {/* Question Card */}
                        <div className="flex flex-col gap-6 animate-fade-in">
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                <span className="inline-flex items-center rounded-md bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400 ring-1 ring-inset ring-purple-500/20">
                                    Departamento: Ventas
                                </span>
                                <span className="inline-flex items-center rounded-md bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">
                                    Tema: Onboarding
                                </span>
                            </div>

                            {/* Question */}
                            <div className="space-y-2">
                                <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-white">
                                    ¿Cuál es el proceso estándar para el onboarding de un nuevo cliente?
                                </h1>
                                <p className="text-base text-[#92a4c9] leading-relaxed max-w-2xl">
                                    Detalla los pasos críticos desde la firma del contrato hasta la primera reunión estratégica. Menciona si hay herramientas específicas involucradas.
                                </p>
                            </div>

                            {/* Editor Area */}
                            <div className="group mt-4 rounded-xl border border-[#232f48] bg-[#192233]/50 transition-all focus-within:border-[#1980e6] focus-within:ring-1 focus-within:ring-[#1980e6]/50 hover:border-[#232f48]/80">
                                {/* Toolbar */}
                                <div className="flex items-center gap-1 border-b border-[#232f48] p-2">
                                    <button className="rounded p-1.5 text-[#92a4c9] hover:bg-white/5 hover:text-white" title="Negrita">
                                        <Bold className="size-5" />
                                    </button>
                                    <button className="rounded p-1.5 text-[#92a4c9] hover:bg-white/5 hover:text-white" title="Cursiva">
                                        <Italic className="size-5" />
                                    </button>
                                    <div className="mx-1 h-4 w-px bg-[#232f48]"></div>
                                    <button className="rounded p-1.5 text-[#92a4c9] hover:bg-white/5 hover:text-white" title="Lista con viñetas">
                                        <List className="size-5" />
                                    </button>
                                    <button className="rounded p-1.5 text-[#92a4c9] hover:bg-white/5 hover:text-white" title="Lista numerada">
                                        <ListOrdered className="size-5" />
                                    </button>
                                    <div className="flex-1"></div>
                                    <button className="flex items-center gap-2 rounded bg-[#1980e6]/10 px-3 py-1.5 text-xs font-medium text-[#1980e6] hover:bg-[#1980e6]/20">
                                        <Mic className="size-4" />
                                        Dictar
                                    </button>
                                </div>
                                {/* Text Area */}
                                <textarea className="w-full resize-y bg-transparent p-4 text-base leading-relaxed text-white placeholder-[#92a4c9]/50 focus:outline-none min-h-[320px]" placeholder="Escribe tu respuesta aquí detalladamente. Si necesitas mencionar documentos específicos, por favor inclúyelos..."></textarea>
                                {/* Bottom hint */}
                                <div className="flex justify-between px-4 pb-3 pt-1">
                                    <span className="text-xs text-[#92a4c9] italic">Presiona 'Tab' para insertar nuevas secciones.</span>
                                    <span className="text-xs text-[#92a4c9]">0 palabras</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sticky Bottom Action Bar */}
                <div className="border-t border-[#232f48]/50 bg-[#111722]/90 px-6 py-4 backdrop-blur-lg">
                    <div className="mx-auto flex max-w-4xl items-center justify-between">
                        <button className="group flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-[#92a4c9] hover:bg-[#192233] hover:text-white transition-all">
                            <ArrowLeft className="size-4" />
                            Anterior
                        </button>
                        <button className="group relative flex items-center gap-2 overflow-hidden rounded-lg bg-[#1980e6] px-8 py-3 text-sm font-bold text-white shadow-lg shadow-[#1980e6]/25 hover:bg-[#1980e6]/90 transition-all hover:scale-[1.02] focus:ring-4 focus:ring-[#1980e6]/30">
                            <span>Siguiente Pregunta</span>
                            <ArrowRight className="size-4" />
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default InterviewPage;
