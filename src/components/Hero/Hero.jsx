import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { Footer, HeaderPage, Users } from '..';

export default function Hero() {
	return (
		<Box
			w={'full'}
			h={{ md: '130vh', base: '170vh' }}
			bg={'#302C42'}
			px={{ xl: '120px', lg: '20px', base: '5px' }}
			py={{ md: '50px', base: '20px' }}
		>
			{/* Header page */}
			<Box>
				<HeaderPage />
			</Box>
			<Box>
				<Users />
			</Box>
			<Box pt={'80px'}>
				<Footer />
			</Box>
		</Box>
	);
}
