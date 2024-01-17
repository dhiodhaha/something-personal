export default function Home() {
  return (
    <main className="absolute top-0 z-[-2] min-h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_1000%_80%_at_50%_-20%,rgb(190,242,100,0.1),rgba(255,255,255,0))]">
      <header className="text-white flex justify-between p-4">
        <div className="font-semibold p-2">It's Dhafin!</div>
        <div className="flex gap-4">
          <a className="hover:bg-lime-400  hover:text-black p-2">Blog</a>
          <a className="hover:bg-lime-400 hover:text-black p-2">Contact</a>
        </div>
      </header>
      <div
        id="containerCard"
        className="grid grid-rows-1 justify-center gap-2 text-white"
      >
        <div className="card">Social Media Handler</div>
        <div className="card">What if tech meets art?</div>
        <div className="card">Instagram</div>
        <div className="card">Projects</div>
        <div className="card">myX</div>
        <div className="card">Collaborate</div>
      </div>
    </main>
  );
}
