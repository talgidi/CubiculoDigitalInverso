import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import InterviewPage from './pages/InterviewPage';

// Placeholder pages for now
const MockPage = ({ title }: { title: string }) => (
    <div className="p-10">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p>Component under construction.</p>
    </div>
);

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<LandingPage />} />
                    <Route path="setup" element={<MockPage title="Configuración de Entrevista" />} />
                    <Route path="interview" element={<InterviewPage />} />
                    <Route path="dashboard" element={<DashboardPage />} />
                    <Route path="contact" element={<MockPage title="Contacto y Envío" />} />
                    <Route path="audit" element={<MockPage title="Auditoría" />} />
                    <Route path="editor" element={<MockPage title="Editor" />} />
                    <Route path="library" element={<MockPage title="Biblioteca" />} />
                    <Route path="generate" element={<MockPage title="Generación" />} />
                    <Route path="guide" element={<MockPage title="Guía Diaria" />} />
                    <Route path="export" element={<MockPage title="Exportación" />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
