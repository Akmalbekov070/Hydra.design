import { Box, Button, Heading, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';

export default function Users() {
	return (
		<Box w={'full'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
			<Box>
				<HStack>
					<Heading fontSize={'5xl'} bgGradient='linear(to-l, #C0B7E8, #8176AF)' bgClip='text'>
						Divi
					</Heading>
					<Heading fontSize={'5xl'} color={'white'}>
						{' '}
						Into The Depths
					</Heading>
				</HStack>
				<HStack>
					<Heading fontSize={'4xl'} color={'white'}>
						Of{' '}
					</Heading>
					<Heading fontSize={'5xl'} bgGradient='linear(to-l, #C0B7E8, #8176AF)' bgClip='text'>
						{' '}
						Virtual Reality
					</Heading>
				</HStack>
				<Text w={'40%'} color={'#FFFFFF'} pt={8} fontFamily={'initial'}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore nisl
					tincidunt eget. Lectus mauris eros in vitae .
				</Text>
				<HStack>
					<Button w={'220px'} h={'50px'} bgGradient='linear(to-l, #8176AF, #C0B7E8)' border={'1px'} borderRadius={'2xl'} mt={5}>
						BUILD YOUR WORLD
					</Button>
				</HStack>
			</Box>
			<Box pt={'80px'}>
				<Image w={'full'} h={'400px'} backgroundSize={'cover'} src={'https://i.postimg.cc/0y3YQSw7/Mask-group.png'} alt='Image' />
			</Box>
		</Box>
	);
}
