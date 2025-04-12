import { useState, useEffect, useRef } from 'react';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function MusicPlayer() {
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef(null);


	useGSAP(() => {
		// gsap.to(".play-btn", {
		// 	scrollTrigger: {
		// 		trigger: ".features",
		// 		start: "top 50%",
		// 		end: "bottom 80%",
		// 		pin: ".img",
		// 	},
		// });

		gsap.from(".audio-box", {
			opacity: 1,
			right: '48%',
			top: '50%',
			scale: 1.2,
			scrollTrigger: {
				trigger: ".play-btn",
				start: "top 40%",
				end: "bottom 40%",
				scrub: 1,
				// markers: true
			},
		});

	}, []);

	useEffect(() => {
		// Cleanup function to pause audio when component unmounts
		return () => {
			if (audioRef.current) {
				audioRef.current.pause();
			}
		};
	}, []);

	const togglePlay = () => {
		if (!audioRef.current) return;

		if (isPlaying) {
			audioRef.current.pause();
			setIsPlaying(false);
		} else {
			audioRef.current.play()
				.then(() => setIsPlaying(true))
				.catch(error => {
					console.log("Playback failed:", error);
					setIsPlaying(false);
				});
		}
	};

	return (
		<div className="audio-box fixed bottom-20 right-4 z-50">
			<audio
				ref={audioRef}
				src="/audio/audio.m4a"
				loop
				preload="metadata"
			/>
			<button
				onClick={togglePlay}
				className="animate-spin play-btn cursor-pointer flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white  hover:bg-blue-600 transition-colors"
				aria-label={isPlaying ? "Pause music" : "Play music"}
			>
				{isPlaying ? (
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				) : (
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				)}
			</button>
		</div>
	);
}