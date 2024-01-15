export default function Home() {
  return (
    <main className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_1000%_80%_at_50%_-20%,rgb(190,242,100,0.1),rgba(255,255,255,0))]">
      <header className="text-white flex justify-between p-4">
        <div className="font-semibold p-2">It's Dhafin!</div>
        <div className="flex gap-4">
          <a className="hover:bg-lime-400  hover:text-black p-2">Blog</a>
          <a className="hover:bg-lime-400 hover:text-black p-2">Contact</a>
        </div>
      </header>
      <div
        id="containerCard"
        className="grid grid-rows-1 justify-center text-white"
      >
        <div className="col-span-1">Social Media Handler</div>
        <div className="col-span-1">What if tech meets art?</div>
        <div className="col-span-1">Instagram</div>
        <div className="col-span-1">Projects</div>
        <div className="col-span-1">myX</div>
        <div className="col-span-1">Collaborate</div>
      </div>
    </main>
  );
}
