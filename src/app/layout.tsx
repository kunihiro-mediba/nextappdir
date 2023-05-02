import "./global.css";

export const metadata = {
    title: "AppDir example",
    description: "Next.js /app directory example",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja">
            <body>
                <header className="font-medium text-black text-center p-2 border-b">
                    <h1>AppDir example</h1>
                </header>
                <main className="p-2">{children}</main>
            </body>
        </html>
    );
}
