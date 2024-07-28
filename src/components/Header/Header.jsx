import { Box, Button, Heading, HStack, Image } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export default function Header() {
	return (
		<Box w={'full'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
			<HStack>
				<Image src={'https://i.postimg.cc/DwCXvRRt/Frame.png'} alt='Logo' />
				<Heading
					bgGradient='linear(to-l, #C0B7E8, #8176AF)'
					bgClip='text'
					fontFamily={'inherit '}
					fontStyle={'initial'}
					fontSize={'5xl'}
					fontWeight={'100'}
				>
					HYDRA
				</Heading>
			</HStack>
			<HStack gap={14} color={'white'} fontSize={'sm'}>
				<Link href='/About'>ABOUT</Link>
				<Link href='/Servise'>SERVICES</Link>
				<Link href='/texnologi'>TECHNOLOGIES</Link>
				<Link href='/how to'>HOW TO</Link>
			</HStack>
			<HStack gap={5}>
				<Button w={'170px'} h={'40px'} border={'1px'} borderColor={'white'} borderRadius={'xl'}>
					CONTACT US
				</Button>
				<Button w={'160px'} h={'40px'} bgGradient='linear(to-l, #8176AF, #C0B7E8)' borderRadius={'xl'}>
					{' '}
					JOIN HYDRA
				</Button>
			</HStack>
		</Box>
	);
}
