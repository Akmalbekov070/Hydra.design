import { Box, Heading, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { VscLocation } from 'react-icons/vsc';
import { LuPhoneCall } from 'react-icons/lu';

export default function Footer() {
	return (
		<Box
			w={'full'}
			h={'150px'}
			bgGradient='linear(to-l, #3A3456, #211E2E)'
			display={'flex'}
			justifyContent={'space-around'}
			borderRadius={'200px'}
			alignItems={'center'}
			color='white'
		>
			{/* Location page--- */}
			<HStack>
				<VscLocation size={'90'} />
				<Box>
					<Heading color={'white'}>Pay Us a Visit</Heading>
					<Text fontWeight={'400'} fontStyle={'inherit'} fontFamily={'inherit'} lineHeight={10}>
						Union St, Seattle, WA 98101, United States
					</Text>
				</Box>
			</HStack>
			{/* line------ */}
			<Box w={'1px'} h={'100px'} bg={'#C0B7E8'}></Box>
			{/* Phone page--- */}
			<HStack>
				<LuPhoneCall size={'80'} />
				<Box>
					<Heading color={'white'}>Give Us a Call</Heading>
					<Text fontWeight={'400'} fontStyle={'inherit'} fontFamily={'inherit'} lineHeight={10}>
						(110) 1111-1010
					</Text>
				</Box>
			</HStack>
			<Box></Box>
		</Box>
	);
}
