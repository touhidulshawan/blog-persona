import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <Image
        src="/images/Shawan.jpg"
        alt="Profile Image"
        width={300}
        height={300}
      />
      <h1>Hi, I am Touhidul Shawan</h1>
      <p>
        I am a self-taught Web Developer. I build website using modern
        technologies like React, Nextjs, Tailwindcss, Nodejs.
      </p>
    </section>
  );
};

export default Hero;
