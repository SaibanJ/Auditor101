import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Bulkbeef from './pages/BulkBeef';
import CottegeCheese from './pages/CottegeCheese';
import Home from './pages/Home';
import Links from './pages/links';
import LunchMeat from './pages/LunchMeat';
import Mfolio from './pages/Mfolio';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/Links' element={<Links />} />
			<Route path='/Mfolio' element={<Mfolio />} />
			<Route path='/BulkBeef' element={<Bulkbeef />} />
			<Route path='/CottegeCheese' element={<CottegeCheese />} />
			<Route path='/LunchMeat' element={<LunchMeat />} />
		</Routes>
	);
};

export default App;
