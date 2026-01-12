import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "@/layouts/MainLayout";
import { ApolloWrapper } from "@/lib/apollo-wrapper";

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
                <ApolloWrapper>
                    <MainLayout>{children}</MainLayout>
                </ApolloWrapper>
            </body>
        </html>
    );
}
