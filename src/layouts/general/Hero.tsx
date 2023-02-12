import React from 'react';
import person from '../../assets/person.png';

const Hero = () => {
	return (
		<section className=' md:h-[calc(100vh-118px)] md:flex md:flex-col md:justify-start'>
			<div className='hero__wrapper px-64 mb-24 md:px-10 md:py-10 md:flex  hero__intro text-8xl md:text-5xl max-w-6xl md:max-w-md'>
				DISCOVER AUDITING PRO TIPS
			</div>

			<div className='px-64 md:px-10'>
				<div className='chat chat-start'>
					<div className='chat-image avatar'>
						<div className='w-10 rounded-full'>
							<img src='' />
						</div>
					</div>
					<div className='chat-bubble'>So, you’re an auditor now, huh?</div>
				</div>

				<div className='chat chat-start'>
					<div className='chat-image avatar'>
						<div className='w-10 rounded-full'>
							<img src='' />
						</div>
					</div>
					<div className='chat-bubble max-w-md'>
						Well, you may need some useful resources to speed up the learning
						process and access for convenience. Check out the resources drop
						down menu to get started with some useful resources or check out the
						tips tab for some meaningful suggestions
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
