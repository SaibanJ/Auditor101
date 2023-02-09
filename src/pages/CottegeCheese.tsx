import React from 'react';
import ReactTableUI from 'react-table-ui';
import { useMemo, useRef } from 'react';
import type { TableInstance, DataType } from 'react-table-ui';
import Header from '../layouts/general/header';
import Dropdown from '../components/Dropdown';
import { Link } from 'react-router-dom';

interface User extends DataType {
	MIC: string | number;
	Bills: string;
}

const CottegeCheese = () => {
	const data: User[] = useMemo(
		() => [
			{ MIC: 50054, Bills: '104326' },
			{ MIC: 50055, Bills: '104335' },
			{ MIC: 50056, Bills: '106811' },

			{ MIC: 50068, Bills: '107508' },
			{ MIC: 50069, Bills: '135092' },
			{ MIC: 50070, Bills: '136348' },

			{ MIC: 50071, Bills: '134911' },
			{ MIC: 56246, Bills: '670735' },
			{ MIC: 67348, Bills: '805009' },
		],
		[]
	);
	const tableInstanceRef = useRef<TableInstance<User>>(null);

	return (
		<>
			<header className=' header pl-64 pr-20 md:pl-10 md:pt-10 md:pb-10 md:mb-0  '>
				<nav className='header__wrapper'>
					<div className='header__logo md:text-3xl md:mr-5'>Auditor101</div>
					<ul className='header__container-links items-center '>
						<Link to='/' className='md:hidden'>
							<li>Home</li>
						</Link>
						<Dropdown />
					</ul>
				</nav>
			</header>
			<div className='flex justify-center items-center h-[calc(100vh_-_10rem)]'>
				<div className='w-2/5 h-96'>
					<ReactTableUI
						title='Meijer Cottege Cheese'
						data={data}
						tableInstanceRef={tableInstanceRef}
					/>
				</div>
			</div>
		</>
	);
};

export default CottegeCheese;
