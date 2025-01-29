import "../globals.css";

import {Inter} from "next/font/google";
import {ReactNode} from "react";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	display: "swap",
});

export {metadata, viewport} from "next-sanity/studio";

export default function RootLayout({
	                                   children,
                                   }: {
	children: ReactNode;
}) {
	return (
			<html lang="no" className={inter.variable}>
			<body className="min-h-screen">{children}</body>
			</html>
	);
}
