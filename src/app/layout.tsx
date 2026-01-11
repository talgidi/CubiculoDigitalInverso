import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "@/layouts/MainLayout";

export const metadata: Metadata = {
    title: "Cubículo Digital Inverso",
    description: "Advanced digital workspace",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body>
                <MainLayout>{children}</MainLayout>
            </body>
        </html>
    );
}
