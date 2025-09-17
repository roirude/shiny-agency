import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Route, BrowserRouter as Router, Routes } from 'react-router';
import Survey from './page/Survey.tsx';
import Header from './components/Header.tsx';
import Error from './components/Error.tsx';
import Results from './page/Results.tsx';
import Freelances from './page/Freelances.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/survey/:questionNumber' element={<Survey />} />
                <Route path='*' element={<Error />} />
                <Route path='/results' element={<Results />} />
                <Route path='/freelances' element={<Freelances />} />
            </Routes>
        </Router>
    </StrictMode>,
);
