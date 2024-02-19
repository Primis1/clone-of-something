import Image from 'next/image'

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Image src="/nvbar.png" height={100} width={100} alt="logo" />
        <Image src="/nvbar.png" height={100} width={100} alt="logo" />
    </main>
  );
}
