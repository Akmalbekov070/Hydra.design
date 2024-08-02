import { Box, Heading, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { VscLocation } from 'react-icons/vsc';
import { LuPhoneCall } from 'react-icons/lu';
import { CgMail } from 'react-icons/cg';

export default function Footer() {
	const carouselItems = [
		// Your carousel items here
	];

	const responsive = {
		// Define responsive settings for different screen sizes
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1,
		},
	};
	return (
		<Box
			w={'full'}
			h={{ md: '150px', base: '470px' }}
			bgGradient='linear(to-l, #3A3456, #211E2E)'
			display={{ md: 'flex', base: 'block' }}
			justifyContent={{ md: 'space-around', base: 'center' }}
			borderRadius={'200px'}
			alignItems={'center'}
			color='white'
			py={{ base: 10 }}
		>
			{/* Location page--- */}
			<HStack justifyContent={{ base: 'center' }}>
				<VscLocation color='#C0B7E8' size={'90'} />
				<Box>
					<Heading color={'white'} fontSize={{ xl: 'xl', base: 'lg' }}>
						Pay Us a Visit
					</Heading>
					<Text fontWeight={'400'} fontStyle={'inherit'} fontFamily={'inherit'} lineHeight={10}>
						Union St, Seattle, WA 98101, United States
					</Text>
					<Box w={'250px'} h={'1px'} display={{ md: 'none', base: 'flex' }} bg={'#C0B7E8'}></Box>
				</Box>
			</HStack>
			{/* line------ */}
			<Box w={'1px'} h={'100px'} display={{ xl: 'flex', base: 'none' }} bg={'#C0B7E8'}></Box>
			{/* Phone page--- */}
			<HStack justifyContent={{ base: 'center' }} py={{ base: 10 }}>
				<LuPhoneCall color='#C0B7E8' size={'80'} />
				<Box>
					<Heading color={'white'} fontSize={{ xl: 'xl', base: 'lg' }}>
						Give Us a Call
					</Heading>
					<Text fontWeight={'400'} fontStyle={'inherit'} fontFamily={'inherit'} lineHeight={10}>
						(110) 1111-1010
					</Text>
					<Box w={'250px'} h={'1px'} display={{ md: 'none', base: 'flex' }} bg={'#C0B7E8'}></Box>
				</Box>
			</HStack>
			<Box w={'1px'} h={'100px'} display={{ xl: 'flex', base: 'none' }} bg={'#C0B7E8'}></Box>
			<HStack justifyContent={{ base: 'center' }}>
				<CgMail color='#C0B7E8' size={'98'} />
				<Box>
					<Heading color={'white'} fontSize={{ xl: 'xl', base: 'lg' }}>
						Send Us a Message
					</Heading>
					<Text fontWeight={'100'} fontStyle={'inherit'} fontFamily={'inherit'} lineHeight={10}>
						akmalbekov2007@gmail.com
					</Text>
					<Box w={'200px'} h={'1px'} display={{ md: 'none', base: 'flex' }} bg={'#C0B7E8'}></Box>
				</Box>
			</HStack>
		</Box>
	);
}
