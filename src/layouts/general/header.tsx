import React from 'react';
import Dropdown from '../../components/Dropdown';

const Header = () => {
	return (
		<header className=' header pl-64 pr-20 mb-52 md:pl-10 md:pt-10 md:pb-10 md:mb-0  '>
			<nav className='header__wrapper'>
				<div className='header__logo md:text-3xl md:mr-5'>Auditor101</div>
				<ul className='header__container-links items-center '>
					<a className='md:hidden' href=''>
						<li>Home</li>
					</a>
					<Dropdown />
				</ul>
			</nav>
		</header>
	);
};

export default Header;
