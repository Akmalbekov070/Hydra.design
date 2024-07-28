import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { HeaderPage, Users } from '..';

export default function Hero() {
	return (
		<Box w={'full'} h={'100vh'} bg={'#302C42'} px={'120px'} py={'50px'}>
			{/* Header page */}
			<Box>
				<HeaderPage />
			</Box>
			<Box>
				<Users />
			</Box>
		</Box>
	);
}
