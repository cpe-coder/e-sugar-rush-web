"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<Button>
				<a
					href="e-sugar-rush.apk"
					download="e-sugar-rush.apk"
					target="_blank"
					title="download app"
				>
					Download App
				</a>
			</Button>

			<ModeToggle />
		</div>
	);
}
