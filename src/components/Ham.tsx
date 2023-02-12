// import React from 'react';
// import { useState } from 'react'; // import state
// import { slide as Menu } from 'react-burger-menu';

// export default function Ham() {
// 	const [isOpen, setIsOpen] = useState(false);
// 	const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

// 	return (
// 		<div>
// 			<button
// 				className='flex flex-col outline w-6 justify-center rounded group'
// 				onClick={() => setIsOpen(!isOpen)}
// 			>
// 				<div
// 					className={`${genericHamburgerLine} ${
// 						isOpen
// 							? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100'
// 							: 'opacity-50 group-hover:opacity-100'
// 					}`}
// 				/>
// 				<div
// 					className={`${genericHamburgerLine} ${
// 						isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
// 					}`}
// 				/>
// 				<div
// 					className={`${genericHamburgerLine} ${
// 						isOpen
// 							? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
// 							: 'opacity-50 group-hover:opacity-100'
// 					}`}
// 				/>
// 			</button>

// 			<Menu>
// 				<a id='home' className='menu-item' href='/'>
// 					Home
// 				</a>
// 				<a id='about' className='menu-item' href='/about'>
// 					About
// 				</a>
// 				<a id='contact' className='menu-item' href='/contact'>
// 					Contact
// 				</a>
// 			</Menu>
// 		</div>
// 	);
// }
