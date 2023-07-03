import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import DefaultLayout from '../components/DefaultLayout';
import Home from '../pages/Home';
import Download from '../pages/Download';

export default function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<DefaultLayout />}>
					<Route path='/' element={<Navigate to={'/home'} />} />
					<Route path='home' element={<Home />} />
					<Route path='/news' element={<h1>news</h1>} />
					<Route path='/rankings' element={<h1>rankings</h1>} />
					<Route path='/download' element={<Download />} />
					<Route path='/faq' element={<h1>faq</h1>} />
					<Route path='/team' element={<h1>team</h1>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
