import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './index.css'
import { ThemeProvider } from '@material-tailwind/react';
import { ScrollToTop } from './components/others/ScrollToTop';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <ThemeProvider>
                    <ScrollToTop />
                    <ToastContainer />
                    <App />
                </ThemeProvider>
            </Router>
        </Provider>
    </React.StrictMode>
)