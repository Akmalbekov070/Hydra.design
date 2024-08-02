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
				<VscLocation color='#C0B7E8' size={'90'} />
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
				<LuPhoneCall color='#C0B7E8' size={'80'} />
				<Box>
					<Heading color={'white'}>Give Us a Call</Heading>
					<Text fontWeight={'400'} fontStyle={'inherit'} fontFamily={'inherit'} lineHeight={10}>
						(110) 1111-1010
					</Text>
				</Box>
			</HStack>
			<Box w={'1px'} h={'100px'} bg={'#C0B7E8'}></Box>
			<HStack>
				<CgMail color='#C0B7E8' size={'98'} />
				<Box>
					<Heading color={'white'}>Send Us a Message</Heading>
					<Text fontWeight={'100'} fontStyle={'inherit'} fontFamily={'inherit'} lineHeight={10}>
						akmalbekov2007@gmail.com
					</Text>
				</Box>
			</HStack>
		</Box>
	);
}
