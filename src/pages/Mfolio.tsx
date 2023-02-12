import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../components/dropdown';

const Mfolio = () => {
	return (
		<header className='md:hidden header pl-64 pr-20'>
			<nav className='header__wrapper'>
				<div className='header__logo'>Auditor101</div>
				<ul className='header__container-links items-center'>
					<Link to='/'>
						<li>Home</li>
					</Link>
					<Dropdown />
				</ul>
			</nav>
		</header>
	);
};

export default Mfolio;
