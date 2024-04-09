import './globals.css';
import { inter } from './fonts';
import Navbar from './components/Navbar';
import { AuthProvider } from './components/Providers';


const InterFont = inter;

export const metadata = {
  title: 'Pan Casero',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={InterFont.className}> {/* Apply the font class directly */}
        <AuthProvider>
        <Navbar />
        {children}</AuthProvider>
      </body>
    </html>
  );
}