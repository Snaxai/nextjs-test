import Image from "next/image";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-6xl font-bold text-center'>Hello World</h1>

      <h3>Teste routing</h3>

      <Image
        className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
        src='/next.svg'
        alt='Next.js Logo'
        width={180}
        height={37}
        priority
      />
    </main>
  );
}
