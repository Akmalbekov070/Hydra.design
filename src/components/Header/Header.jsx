import { Box, Button, Heading, HStack, Image, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { CiMenuFries } from 'react-icons/ci';
export default function Header() {
	return (
		<Box w={'full'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
			<HStack>
				<Image w={{ md: '', base: '100px' }} src={'https://i.postimg.cc/BnkShYLC/Frame.png'} alt='Logo' />
				<Heading
					bgGradient='linear(to-l, #C0B7E8, #8176AF)'
					bgClip='text'
					fontFamily={'inherit '}
					fontStyle={'initial'}
					fontSize={{ md: '5xl', base: '3xl' }}
					fontWeight={'100'}
				>
					HYDRA
				</Heading>
			</HStack>
			<HStack display={{ xl: 'flex', base: 'none' }} gap={14} color={'white'} fontSize={'sm'}>
				<Link href='/About'>ABOUT</Link>
				<Link href='/Servise'>SERVICES</Link>
				<Link href='/texnologi'>TECHNOLOGIES</Link>
				<Link href='/how to'>HOW TO</Link>
			</HStack>
			<HStack gap={5}>
				{/* Menu Icon  */}
				<Box display={{ xl: 'none', base: 'flex' }}>
					<Menu>
						<MenuButton>
							<CiMenuFries size={'30'} cursor={'pointer'} />
						</MenuButton>
						<MenuList>
							<MenuItem>Download</MenuItem>
							<MenuItem>Create a Copy</MenuItem>
							<MenuItem>Mark as Draft</MenuItem>
							<MenuItem>Delete</MenuItem>
							<MenuItem>Attend a Workshop</MenuItem>
						</MenuList>
					</Menu>
				</Box>
				<Box display={{ md: 'flex', base: 'none' }} gap={4}>
					<Button w={'170px'} h={'40px'} border={'1px'} borderColor={'white'} borderRadius={'xl'}>
						CONTACT US
					</Button>
					<Button w={'160px'} h={'40px'} bgGradient='linear(to-l, #8176AF, #C0B7E8)' borderRadius={'xl'}>
						{' '}
						JOIN HYDRA
					</Button>
				</Box>
			</HStack>
		</Box>
	);
}
