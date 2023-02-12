import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../components/dropdown';
import { useState, Fragment } from 'react';
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
} from '@material-tailwind/react';

function Icon({ id, open }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className={`${
				id === open ? 'rotate-180' : ''
			} h-5 w-5 transition-transform`}
			fill='none'
			viewBox='0 0 24 24'
			stroke='currentColor'
			strokeWidth={2}
		>
			<path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
		</svg>
	);
}

const links = () => {
	const [open, setOpen] = useState(0);

	const handleOpen = (value: React.SetStateAction<number>) => {
		setOpen(open === value ? 0 : value);
	};

	const customAnimation = {
		mount: { scale: 1 },
		unmount: { scale: 0.9 },
	};
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

			<div className='flex flex-col justify-center items-center h-[calc(100vh_-_10rem)]'>
				<div className=' ml-auto mr-auto bg-[#191d24]  rounded-md w-4/12 md:w-full px-10 py-10'>
					<Accordion
						className='mb-2'
						open={open === 1}
						icon={<Icon id={1} open={open} />}
					>
						<AccordionHeader className='text-5xl' onClick={() => handleOpen(1)}>
							Mfolio
						</AccordionHeader>

						<AccordionBody className='text-lg'>
							<a href='https://meijer.mgpfolio.com'>
								https://meijer.mgpfolio.com
							</a>
						</AccordionBody>
					</Accordion>

					<Accordion
						className='mb-2'
						open={open === 2}
						icon={<Icon id={2} open={open} />}
					>
						<AccordionHeader className='text-5xl' onClick={() => handleOpen(2)}>
							Product Identifier
						</AccordionHeader>
						<AccordionBody className='text-lg'>
							<a href='http://e-smartapps.meijer.com/MjrProductIdentifier/Default.aspx'>
								http:///MjrProductIdentifier/Default.aspx
							</a>
						</AccordionBody>
					</Accordion>

					<Accordion
						className='mb-2'
						open={open === 3}
						icon={<Icon id={3} open={open} />}
					>
						<AccordionHeader className='text-5xl' onClick={() => handleOpen(3)}>
							PO Inquiry
						</AccordionHeader>
						<AccordionBody className='text-lg'>
							<a href='https://apps.meijer.com/PMMPOInquiry'>
								https://apps.meijer.com/PMMPOInquiry
							</a>
						</AccordionBody>
					</Accordion>

					<Accordion
						className='mb-2'
						open={open === 4}
						icon={<Icon id={4} open={open} />}
					>
						<AccordionHeader className='text-5xl' onClick={() => handleOpen(4)}>
							Daily Checklist
						</AccordionHeader>
						<AccordionBody className='text-lg'>
							<a href='http://apps.meijer.com/dfdailychecklist/DailyChecklistMenu.aspx?strUnitId=85'>
								http://apps.meijer.com/dfdailychecklist/DailyChecklistMenu.aspx?strUnitId=85
							</a>
						</AccordionBody>
					</Accordion>

					<Accordion
						className='mb-2'
						open={open === 5}
						icon={<Icon id={5} open={open} />}
					>
						<AccordionHeader className='text-5xl' onClick={() => handleOpen(5)}>
							Pork SOP
						</AccordionHeader>
						<AccordionBody className='text-lg'>
							We&apos;re not always in the position that we want to be at.
							We&apos;re constantly growing. We&apos;re constantly making
							mistakes. We&apos;re constantly trying to express ourselves and
							actualize our dreams.
						</AccordionBody>
					</Accordion>

					<Accordion
						className='mb-2'
						open={open === 6}
						icon={<Icon id={6} open={open} />}
					>
						<AccordionHeader className='text-5xl' onClick={() => handleOpen(6)}>
							Buyers List
						</AccordionHeader>
						<AccordionBody className='text-lg'>
							<a href='https://meijer365.sharepoint.com/:x:/r/sites/MerchHub/_layouts/15/Doc.aspx?sourcedoc=%7B88A21422-416D-4E02-AB89-62CF046B5438%7D&file=Foods%20Area.xlsx&action=default&mobileredirect=true'>
								Buyers
							</a>
						</AccordionBody>
					</Accordion>

					<Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
						<AccordionHeader className='text-5xl' onClick={() => handleOpen(7)}>
							Temp Guidelines
						</AccordionHeader>
						<AccordionBody className='text-lg'>
							<a href='https://meijer365.sharepoint.com/:x:/r/sites/MerchHub/_layouts/15/Doc.aspx?sourcedoc=%7B88A21422-416D-4E02-AB89-62CF046B5438%7D&file=Foods%20Area.xlsx&action=default&mobileredirect=true'>
								Guidelines.docx
							</a>
						</AccordionBody>
					</Accordion>
				</div>
			</div>
		</>
	);
};

export default links;
