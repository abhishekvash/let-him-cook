import GreenLogoNoBackground from "@/assets/GreenLogoNoBackground.svg";
import { SearchBar } from "@/components/SearchBar";
import { useEffect, useRef, useState } from "react";

export function HomePage() {
	const [stepCount, setStepCount] = useState(1);
	const interval = useRef<NodeJS.Timeout>();

	useEffect(() => {
		interval.current = setInterval(() => {
			if (stepCount === 4) {
				clearInterval(interval.current);
				return;
			}
			setStepCount(stepCount => stepCount + 1);
		}, 1000);

		return () => {
			clearInterval(interval.current);
		};
		// This is to ensure that the interval function only runs once since it has no dependencies
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="flex flex-col items-center justify-center md:h-[80vh]">
			<img
				src={GreenLogoNoBackground}
				alt="Let Him Cook Logo"
				className="m-2 md:w-[50%]"
			/>

			<p className="m-4 max-w-lg text-center md:mb-10">
				Search, combine, and install NPM packages with ease. Build your
				project's recipe and install with a single command. Streamline
				your development, effortlessly.
			</p>

			<ul className="steps steps-vertical mb-10 md:steps-horizontal">
				<li className={`step ${stepCount > 0 ? "step-primary" : ""}`}>
					Search For Packages
				</li>
				<li className={`step ${stepCount > 1 ? "step-primary" : ""}`}>
					Add Dependencies
				</li>
				<li className={`step ${stepCount > 2 ? "step-primary" : ""}`}>
					Create Recipe
				</li>
				<li className={`step ${stepCount > 3 ? "step-primary" : ""}`}>
					Save and Use them!
				</li>
			</ul>

			<div className="w-full md:w-auto">
				<SearchBar shouldNavigate={true} />
			</div>
		</div>
	);
}
