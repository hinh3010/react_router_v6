import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Invoices from './pages/Invoices';
import Invoice from './pages/Invoice';
import NewInvoice from './pages/NewInvoice';
import Expenses from './pages/Expenses';
import NotFound from './pages/NotFound';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} >
					<Route path="/invoices" element={<Invoices />} >
						<Route index element={<h2 style={{ padding: '1rem' }}>failed</h2>} ></Route>
						<Route path=":invoiceId" element={<Invoice />} ></Route>
						<Route path="new" element={<NewInvoice />} ></Route>
					</Route>
					<Route path="/expenses" element={<Expenses />} ></Route>
					<Route path="*" element={<NotFound />} ></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
