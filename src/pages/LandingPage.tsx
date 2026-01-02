import { ArrowRight, CheckCircle, MessageSquare, Building2, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="flex flex-col items-center w-full">
            {/* Hero Section */}
            <section className="w-full px-6 py-12 md:py-20 lg:py-24 max-w-[1200px]">
                <div className="@container">
                    <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-center">
                        {/* Text Content */}
                        <div className="flex flex-col gap-8 flex-1 w-full lg:w-1/2">
                            <div className="flex flex-col gap-4 text-left">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-[#111418] dark:text-white">
                                    Tu conocimiento corporativo, <span className="text-primary text-[#1980e6]">estructurado.</span>
                                </h1>
                                <h2 className="text-base md:text-lg lg:text-xl font-normal leading-relaxed text-[#637588] dark:text-[#92a4c9] max-w-xl">
                                    Genera tu Biblia Corporativa a través de entrevistas guiadas por departamentos y exporta los datos para potenciar tu IA y LLMs.
                                </h2>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/setup" className="flex h-12 min-w-[160px] cursor-pointer items-center justify-center rounded-lg bg-[#1980e6] px-6 text-base font-bold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-600 hover:-translate-y-0.5 transition-all duration-200">
                                    <span className="truncate">Iniciar Entrevista</span>
                                    <ArrowRight className="ml-2 size-5" />
                                </Link>
                                <button className="flex h-12 min-w-[160px] cursor-pointer items-center justify-center rounded-lg border border-[#e5e7eb] dark:border-[#324467] bg-transparent px-6 text-base font-bold text-[#111418] dark:text-white hover:bg-[#f3f4f6] dark:hover:bg-[#192233] transition-colors">
                                    <span className="truncate">Ver Demo</span>
                                </button>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-[#637588] dark:text-[#92a4c9] mt-2">
                                <CheckCircle className="text-[#1980e6] size-5" />
                                <span>No se requiere tarjeta de crédito</span>
                            </div>
                        </div>
                        {/* Hero Image */}
                        <div className="flex-1 w-full lg:w-1/2">
                            <div className="w-full aspect-[4/3] rounded-2xl bg-center bg-cover shadow-2xl shadow-blue-900/10 border border-[#e5e7eb] dark:border-[#232f48] relative overflow-hidden group"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD5Liq6Y8Fi6OKjbH1NXg6jjtDKQ9ypdDso9Gl6w6az0OZeBVZMf_2CAsqbpiYQkFkeVjm7_fgLe4EtxTx7NL3RQ1UkWDkHyuHvzfsNYz2uNEDDy8Jh8nx2T4YP6w9TXek1ZWazASTG2MPOJWEVsTBMqXYi_tzC7ZPa8il7XrBXnJrjSqeQUXa5zpk5vT-TogVckOL3WcX71eUlPz5K0hGOMZSHMpLjaA5-hvnH2RbO7UCF7-GFOtOdLnnBvn5EthND7ZRN458c1eA")' }}>
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent mix-blend-multiply"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Section */}
            <section className="w-full px-6 py-12 md:py-16 bg-[#f3f4f6] dark:bg-[#151c2b] border-y border-[#e5e7eb] dark:border-[#232f48]">
                <div className="max-w-[1200px] mx-auto w-full flex flex-col gap-12">
                    <div className="flex flex-col gap-3 text-center items-center">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111418] dark:text-white">
                            Características Principales
                        </h2>
                        <p className="text-base md:text-lg text-[#637588] dark:text-[#92a4c9] max-w-2xl">
                            Descubre cómo Cubículo Digital transforma la información tácita de tu empresa en activos digitales estructurados.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {/* Card 1 */}
                        <div className="flex flex-col gap-5 rounded-xl border border-[#e5e7eb] dark:border-[#324467] bg-white dark:bg-[#192233] p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex size-12 items-center justify-center rounded-lg bg-[#1980e6]/10 text-[#1980e6]">
                                <MessageSquare className="size-8" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl font-bold leading-tight text-[#111418] dark:text-white">Entrevistas Guiadas</h3>
                                <p className="text-[#637588] dark:text-[#92a4c9] text-sm leading-relaxed">
                                    Cuestionarios inteligentes y adaptativos diseñados específicamente para extraer conocimiento clave de cada área de tu empresa sin fricción.
                                </p>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="flex flex-col gap-5 rounded-xl border border-[#e5e7eb] dark:border-[#324467] bg-white dark:bg-[#192233] p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex size-12 items-center justify-center rounded-lg bg-[#1980e6]/10 text-[#1980e6]">
                                <Building2 className="size-8" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl font-bold leading-tight text-[#111418] dark:text-white">Segmentación por Depto.</h3>
                                <p className="text-[#637588] dark:text-[#92a4c9] text-sm leading-relaxed">
                                    Organiza automáticamente el conocimiento en silos accesibles, permitiendo una gestión granular por departamentos clave.
                                </p>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="flex flex-col gap-5 rounded-xl border border-[#e5e7eb] dark:border-[#324467] bg-white dark:bg-[#192233] p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex size-12 items-center justify-center rounded-lg bg-[#1980e6]/10 text-[#1980e6]">
                                <Database className="size-8" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl font-bold leading-tight text-[#111418] dark:text-white">Exportación para LLM</h3>
                                <p className="text-[#637588] dark:text-[#92a4c9] text-sm leading-relaxed">
                                    Descarga tus datos en formatos JSON, JSONL y CSV, perfectamente optimizados y limpios para el entrenamiento o fine-tuning de modelos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
