import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import {
	ArrowRightCircleIcon,
	Bars2Icon,
	Bars3CenterLeftIcon,
	ChevronDownIcon,
	HandThumbDownIcon,
} from '@heroicons/react/20/solid';
import React from 'react';
//import Ham from './Ham';

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

export default function Example() {
	return (
		<Menu as='div' className='relative inline-block text-left'>
			<Menu.Button className=' inline-flex  justify-center rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-50 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100'>
				Resources
				<ChevronDownIcon className='-mr-1 ml-2 h-5 w-5' aria-hidden='true' />
			</Menu.Button>

			<Transition
				as={Fragment}
				enter='transition ease-out duration-100'
				enterFrom='transform opacity-0 scale-95'
				enterTo='transform opacity-100 scale-100'
				leave='transition ease-in duration-75'
				leaveFrom='transform opacity-100 scale-100'
				leaveTo='transform opacity-0 scale-95'
			>
				<Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
					<div className='py-1'>
						<Menu.Item>
							{({ active }) => (
								<Link
									to='/LunchMeat'
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'block w-full px-4 py-2 text-sm'
									)}
								>
									LunchMeat
								</Link>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<Link
									to='/BulkBeef'
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'block w-full px-4 py-2 text-sm'
									)}
								>
									Bulk Beef
								</Link>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<Link
									to='/CottegeCheese'
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'block w-full px-4 py-2 text-sm'
									)}
								>
									Cottege Cheese
								</Link>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<Link
									to='/Links'
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'block w-full px-4 py-2 text-sm'
									)}
								>
									Links
								</Link>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<Link
									to='/Mfolio'
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'block w-full px-4 py-2 text-sm'
									)}
								>
									Mfolio
								</Link>
							)}
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
function useState(arg0: boolean): [any, any] {
	throw new Error('Function not implemented.');
}
