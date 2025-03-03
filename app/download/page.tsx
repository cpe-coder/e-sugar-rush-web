"use client";

import React from "react";

export default function Download() {
	const [count, setCount] = React.useState(3);
	React.useEffect(() => {
		if (count === 0) {
			window.location.href = "http://localhost:8000/api/download";
		}
		if (count > 0) {
			const timer = setInterval(() => {
				setCount((prevCount) => prevCount - 1);
			}, 1000);
			return () => clearInterval(timer);
		}
	}, [count]);
	return (
		<div className="flex justify-center items-center h-screen w-full bg-[#015d9c] font-[family-name:var(--font-geist-sans)]">
			<title>Download</title>
			<div className="flex-col text-white font-bold text-4xl justify-center items-center text-center">
				<h1 className="mb-5">Wait a second!</h1>
				<h2 className="text-2xl text-amber-300">
					{count === 0 ? "Thank you!" : count}
				</h2>
			</div>
		</div>
	);
}
