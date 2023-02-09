import React from 'react';
import ReactTableUI from 'react-table-ui';
import { useMemo, useRef } from 'react';
import type { TableInstance, DataType } from 'react-table-ui';
import Header from '../layouts/general/header';
import Dropdown from '../components/Dropdown';
import { Link } from 'react-router-dom';

/** Structure of data provided foe each row. */
interface User extends DataType {
	MIC: string | number;
	National: string;
	Excel: string;
	IBP: string;
}

const Bulkbeef = () => {
	const data: User[] = useMemo(
		() => [
			{ MIC: 250293, National: '6138', Excel: '81722', IBP: 'D1306AH' },
			{ MIC: 250009, National: '1428', Excel: '87121', IBP: 'D6256AH' },
			{ MIC: 250068, National: '6428/6488', Excel: '86921/86920', IBP: '' },
			{ MIC: 250066, National: '6868', Excel: '86923', IBP: '' },
			{ MIC: 250103, National: '4438', Excel: '87323', IBP: '' },
			{ MIC: 250277, National: '4458', Excel: '87827', IBP: '' },
			{ MIC: 139268, National: '4468', Excel: '88225', IBP: 'D4576AH' },
			{ MIC: 252081, National: '', Excel: '80240', IBP: '' },
			{ MIC: 252084, National: '', Excel: '80243', IBP: '' },
			{ MIC: 145523, National: '', Excel: '67104', IBP: '' },
			{ MIC: 143883, National: '', Excel: '67667', IBP: '' },
			{ MIC: 143350, National: '', Excel: '67897', IBP: '' },
			{ MIC: 257001, National: '', Excel: '21136', IBP: '' },
			{ MIC: 250231, National: '4451', Excel: '', IBP: '' },
			{ MIC: 250218, National: '2731/2648 ', Excel: '93124', IBP: '' },
			{ MIC: '037902', National: '4471', Excel: '', IBP: '' },
			{ MIC: '250181', National: '2873', Excel: '', IBP: '' },
			{ MIC: '266308', National: '', Excel: '88321', IBP: '' },
			{ MIC: '878675', National: '7188', Excel: '', IBP: '' },
			{ MIC: '252079', National: '578', Excel: '', IBP: 'D00068HV' },
			{ MIC: '187131', National: '4048', Excel: '', IBP: '' },
			{ MIC: '851233', National: '2738', Excel: '', IBP: 'D-2146' },
			{ MIC: '264410', National: '2748', Excel: '', IBP: 'D-2346' },
			{ MIC: '144797', National: '1378', Excel: '', IBP: 'D1566AH' },
			{ MIC: '251198', National: '4798', Excel: '', IBP: 'D-4086' },
			{ MIC: '722904', National: '4508', Excel: '', IBP: '' },
			{ MIC: '512417', National: '353', Excel: '', IBP: '' },
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
						title='Meijer Bulk Beef'
						data={data}
						tableInstanceRef={tableInstanceRef}
					/>
				</div>
			</div>
		</>
	);
};
export default Bulkbeef;
