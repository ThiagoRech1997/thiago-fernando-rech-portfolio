import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thiago Fernando Rech - Back-End Developer",
  description: "Back-End Developer com experiência em Python, JavaScript, C#, Java, SQL Server, Oracle, PostgreSQL. Especialista em ETL, APIs REST e desenvolvimento de software.",
  keywords: [
    "Back-End Developer",
    "Python",
    "JavaScript",
    "C#",
    "Java",
    "SQL Server",
    "Oracle",
    "PostgreSQL",
    "ETL",
    "APIs REST",
    "Desenvolvimento de Software",
    "DBA",
    "DevOps",
    "Docker",
    "Git",
    "GitHub"
  ],
  authors: [{ name: "Thiago Fernando Rech" }],
  creator: "Thiago Fernando Rech",
  publisher: "Thiago Fernando Rech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://thiago-fernando-rech-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Thiago Fernando Rech - Back-End Developer",
    description: "Back-End Developer com experiência em Python, JavaScript, C#, Java, SQL Server, Oracle, PostgreSQL. Especialista em ETL, APIs REST e desenvolvimento de software.",
    url: 'https://thiago-fernando-rech-portfolio.vercel.app',
    siteName: 'Thiago Fernando Rech Portfolio',
    images: [
      {
        url: '/profile.png',
        width: 400,
        height: 400,
        alt: 'Thiago Fernando Rech',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Thiago Fernando Rech - Back-End Developer",
    description: "Back-End Developer com experiência em Python, JavaScript, C#, Java, SQL Server, Oracle, PostgreSQL.",
    images: ['/profile.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/profile.png" />
        <meta name="theme-color" content="#1e3a5f" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Thiago Fernando Rech",
              "jobTitle": "Back-End Developer",
              "description": "Back-End Developer com experiência em Python, JavaScript, C#, Java, SQL Server, Oracle, PostgreSQL",
              "url": "https://thiago-fernando-rech-portfolio.vercel.app",
              "image": "/profile.png",
              "sameAs": [
                "https://github.com/ThiagoRech1997",
                "https://www.linkedin.com/in/thiago-fernando-rech/",
                "https://www.instagram.com/thiago.rech1/"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Silicon Village"
              },
              "alumniOf": {
                "@type": "Organization",
                "name": "Universidade Tecnológica Federal do Paraná"
              },
              "knowsAbout": [
                "Python",
                "JavaScript",
                "C#",
                "Java",
                "SQL Server",
                "Oracle",
                "PostgreSQL",
                "ETL",
                "APIs REST",
                "Docker",
                "Git",
                "DevOps"
              ]
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}