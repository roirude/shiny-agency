import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Route, BrowserRouter as Router, Routes } from 'react-router';
import Survey from './page/Survey.tsx';
import Header from './components/Header.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/survey/:questionNumber' element={<Survey />} />
            </Routes>
        </Router>
    </StrictMode>,
);
