import { Box, Button, Heading, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { LuMoveRight } from 'react-icons/lu';

export default function Users() {
	return (
		<Box w={'full'} display={{ md: 'flex', base: 'block' }} justifyContent={'space-between'} alignItems={'center'}>
			<Box
				pt={'20px'}
				display={{ md: 'none', base: 'flex' }}
				justifyContent={{ base: 'center', md: 'unset' }}
				align={{ base: 'center' }}
			>
				<Image
					w={'400px'}
					h={'300px'}
					backgroundSize={'cover'}
					src={'https://i.postimg.cc/DyCyGy7H/Mask-group.png'}
					alt='Image'
				/>
			</Box>
			{/* px={{ md: 0, base: 10 }} */}
			<Box w={'full'} textAlign={'center'}>
				<HStack display={'flex'} justifyContent={{ base: 'center', md: 'unset' }} align={{ base: 'center' }}>
					<Heading
						textAlign={'center'}
						fontSize={{ md: '5xl', base: '3xl' }}
						bgGradient='linear(to-l, #C0B7E8, #8176AF)'
						bgClip='text'
					>
						Divi
					</Heading>
					<Heading fontSize={{ md: '5xl', base: '3xl' }} color={'white'}>
						{' '}
						Into The Depths
					</Heading>
				</HStack>
				<HStack display={'flex'} justifyContent={{ base: 'center', md: 'unset' }} align={{ base: 'center' }}>
					<Heading fontSize={{ md: '4xl', base: '2xl' }} color={'white'}>
						Of{' '}
					</Heading>
					<Heading fontSize={{ md: '5xl', base: '3xl' }} bgGradient='linear(to-l, #C0B7E8, #8176AF)' bgClip='text'>
						{' '}
						Virtual Reality
					</Heading>
				</HStack>
				<Text w={{ md: '40%', base: 'full' }} color={'#FFFFFF'} py={6} fontWeight={'100'} display={{ md: 'flex', base: 'none' }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore nisl
					tincidunt eget. Lectus mauris eros in vitae .
				</Text>

				<HStack gap={'10'} display={'flex'} justifyContent={{ base: 'center', md: 'unset' }} align={{ base: 'center' }}>
					<Button w={'220px'} h={'50px'} bgGradient='linear(to-l, #C0B7E8 , #8176AF)' borderRadius={'2xl'} mt={5}>
						BUILD YOUR WORLD
					</Button>
					<Box pt={5} display={{ md: 'flex', base: 'none' }} cursor={'pointer'}>
						<LuMoveRight color='#C0B7E8' size={'50'} />
					</Box>
				</HStack>
			</Box>
			<Box pt={'70px'} display={{ md: 'flex', base: 'none' }}>
				<Image w={'full'} h={'400px'} backgroundSize={'cover'} src={'https://i.postimg.cc/DyCyGy7H/Mask-group.png'} alt='Image' />
			</Box>
		</Box>
	);
}
