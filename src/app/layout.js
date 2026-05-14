import './globals.css';

export const metadata = {
  title: 'Ankit Gupta — Full Stack Developer | Cyberpunk Portfolio',
  description: 'Personal portfolio of Ankit Gupta, a full stack developer specializing in Node.js, Express, React, Next.js, and MySQL. Based in New Delhi.',
  keywords: ['developer', 'portfolio', 'full-stack', 'react', 'next.js', 'node.js', 'cyberpunk', 'ankit gupta'],
  authors: [{ name: 'Ankit Gupta' }],
  openGraph: {
    title: 'Ankit Gupta — Full Stack Developer',
    description: 'Cyberpunk-themed portfolio showcasing web development projects and expertise.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
