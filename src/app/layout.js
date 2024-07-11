import "./globals.css";
import { UserProvider } from "./context/UserContext";
import SessionProviderWrapper from "./components/SessionProviderWrapper";

export const metadata = {
  title: "Victoria Bank Admin Portal",
  description: "This is the Victoria Bank Admin Portal for User Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProviderWrapper>
          <UserProvider>{children}</UserProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
