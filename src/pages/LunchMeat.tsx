import React from 'react';
import ReactTableUI from 'react-table-ui';
import { useMemo, useRef } from 'react';
import type { TableInstance, DataType } from 'react-table-ui';
import Dropdown from '../components/dropdown';
import { Link } from 'react-router-dom';

interface User extends DataType {
	Bills: string;
	MIC: string | number;
}

const LunchMeat = () => {
	const data: User[] = useMemo(
		() => [
			{ Bills: '0431', MIC: 265231 },
			{ Bills: '0427', MIC: 265228 },
			{ Bills: '1541', MIC: 265179 },

			{ Bills: '0429', MIC: 265229 },
			{ Bills: '0432', MIC: 265226 },
			{ Bills: '1542', MIC: 265187 },
			{ Bills: '0529', MIC: 143068 },
			{ Bills: '0430', MIC: 265225 },
			{ Bills: '0428', MIC: 265227 },
			{ Bills: '0531', MIC: 145052 },

			{ Bills: '0530', MIC: '041887' },
			{ Bills: '0033', MIC: '039735' },
			{ Bills: '0034', MIC: '029703' },
			{ Bills: '0460', MIC: '265027' },
			{ Bills: '0528', MIC: '031028' },
			{ Bills: '1543', MIC: '265185' },
			{ Bills: '1859', MIC: '265230' },
			{ Bills: '0459', MIC: '265028' },
		],
		[]
	);
	const tableInstanceRef = useRef<TableInstance<User>>(null);

	return (
		<>
			<header className=' header pl-64 pr-20  md:pl-10 md:pt-10 md:pb-10 md:mb-0  '>
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
						title='Meijer Lunchmeat'
						data={data}
						tableInstanceRef={tableInstanceRef}
					/>
				</div>
			</div>
		</>
	);
};

export default LunchMeat;
