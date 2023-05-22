import { Copyright } from '../components/Copyright'
import { Sigin } from '../components/SignIn';
import { Hero } from '../components/Hero';
import { EmptyMemories } from '../components/EmptyMemories';

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div className="border-white/10 bg-cover relative flex flex-col items-start justify-between overflow-hidden border-r bg-[url(../assets/bg-stars.svg)] px-28 py-16">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 bg-purple-700 blur-full"></div>

        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes"/>

        {/* sign In */}
        <Sigin/>

        {/* Hero */}
         <Hero/>
        {/* Copyright */}
        <Copyright/>
      </div>

      {/* Right */}
      <div className="bg-cover flex flex-col bg-[url(../assets/bg-stars.svg)] p-16">
        <EmptyMemories/>
      </div>
    </main>
  );
}
