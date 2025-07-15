import Head from "next/head";

export function MetaTags() {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>Timilehin Omotugba | Frontend Engineer</title>
      <meta
        name="title"
        content="Timilehin Omotugba | Frontend Developer Portfolio"
      />
      <meta
        name="description"
        content="Hi, I'm Timilehin — a frontend developer passionate about building beautiful, performant web experiences using React, Next.js, and modern tools."
      />
      <meta
        name="keywords"
        content="Frontend Developer, Timilehin Omotugba, React, Next.js, UI Developer, Portfolio"
      />
      <meta name="author" content="Timilehin Omotugba" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.timilehinomotugba.com/" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.timilehinomotugba.com/" />
      <meta
        property="og:title"
        content="Timilehin Omotugba | Frontend Developer Portfolio"
      />
      <meta
        property="og:description"
        content="Explore my work as a frontend developer. I specialize in creating sleek and responsive interfaces with React, Next.js, and modern UI tools."
      />
      <meta property="og:image" content="/timilehin.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.timilehinomotugba.com/"
      />
      <meta
        property="twitter:title"
        content="Timilehin Omotugba | Frontend Developer Portfolio"
      />
      <meta
        property="twitter:description"
        content="Hi, I'm Timilehin — a frontend developer passionate about building beautiful, performant web experiences."
      />
      <meta property="twitter:image" content="/timilehin.png" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Head>
  );
}
