'use client'

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap"; // Import GSAP
import { SlowMo } from "gsap/EasePack"; // Import SlowMo for easing
import "./MachineGumAnimation.scss";

gsap.registerPlugin(SlowMo); // Register SlowMo plugin

const MachineGunAnimation = ({gunText}) => {
	const containerRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;
		const sentenceEndExp = /(\.|\?|!)$/g;

		const machineGun = (text) => {
			const words = text.split(" ");
			let tl = gsap.timeline({ delay: 0.6, repeat: Infinity, repeatDelay: 2 });
			let wordCount = words.length;
			let time = 0;

			for (let i = 0; i < wordCount; i++) {
				let word = words[i];
				let isSentenceEnd = sentenceEndExp.test(word);
				let element = document.createElement("h3");
				element.textContent = word;
				container.appendChild(element);
				let duration = Math.max(0.5, word.length * 0.08);

				if (isSentenceEnd) {
					duration += 0.6;
				}

				gsap.set(element, { autoAlpha: 0, scale: 0, z: 0.01 });
				tl.to(
					element,
					duration,
					{ scale: 1.2, ease: "slow(0.25, 0.9)" },
					time
				).to(
					element,
					duration,
					{ autoAlpha: 1, ease: "slow(0.25, 0.9, true)" },
					time
				);
				time += duration - 0.05;

				if (isSentenceEnd) {
					time += 0.6;
				}
			}
		};

		machineGun(gunText);
		// machineGun(
		// 	`I am a adventurous web developer, fervently exploring new techniques, languages, and frameworks. Passionately crafting projects, guiding juniors, and embracing freelance challenges. A perpetual learner, driven by curiosity and innovation.`
		// );

		return () => {
			// Cleanup function
			container.innerHTML = "";
		};
	}, [gunText]);

	return <div id='demo' ref={containerRef}></div>;
};

export default MachineGunAnimation;