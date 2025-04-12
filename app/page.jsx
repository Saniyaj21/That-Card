'use client'; // Required for GSAP animations

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LoadingScreen from '@/components/LoadingScreen';
import MusicPlayer from '@/components/MusicPlayer';
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
	const cardRef = useRef(null);
	const imagesRef = useRef([]);

	// Add ScrollTrigger animations
	useEffect(() => {
		imagesRef.current.forEach((image) => {
			gsap.from(image, {
				scrollTrigger: {
					trigger: image,
					start: 'top 80%',
				},
				opacity: 0,
				y: 50,
				duration: 1,
				ease: 'power3.out',
			});
		});
	}, []);

	useEffect(() => {
		// GSAP Animations
		gsap.from(cardRef.current, {
			opacity: 0,
			y: 50,
			duration: 1,
			ease: 'power3.out',
		});

		gsap.from(imagesRef.current, {
			opacity: 0,
			y: 50,
			stagger: 0.2,
			duration: 1,
			ease: 'power3.out',
			delay: 0.5,
		});
	}, []);

	return (
		<div className="container flex items-center justify-center">
			<div className="mobile-screen w-full max-w-md bg-green-300">
				<LoadingScreen />

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">

					<Image
						src={`/image.png`} // Replace with your image paths
						alt={`Image`}
						width={300}
						height={300}
						className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"

					/>
					<MusicPlayer />
				</div>
			</div>

		</div>
	);
}