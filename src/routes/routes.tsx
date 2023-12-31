import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import DefaultLayout from '../components/DefaultLayout';
import Home from '../pages/Home';
import Team from '../pages/Team';
import Rankings from '../pages/Rankings';
import NotFound from '../pages/NotFound';

export default function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<DefaultLayout />}>
					<Route path='/' element={<Navigate to={'/home'} />} />
					<Route path='home' element={<Home />} />
					<Route path='news' element={<h1>news</h1>} />
					<Route path='rankings' element={<Rankings />} />
					<Route path='faq' element={<h1>faq</h1>} />
					<Route path='team' element={<Team />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
