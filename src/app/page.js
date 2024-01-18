"use client";

import { Tab } from "@headlessui/react";

// bg-neutral-950 bg-[radial-gradient(ellipse_1000%_80%_at_50%_-20%,rgb(190,242,100,0.1),rgba(255,255,255,0))]

export default function Home() {
  return (
    <main className="items-center absolute top-0 z-[-2] min-h-screen min-w-screen bg-slate-600 justify-center flex flex-col gap-4 ">
      <Tab.Group>
        <Tab.List className="text-white space-x-4 bg-slate-900 p-6 rounded-full py-4 px-8">
          <Tab className="ui-selected:bg-blue-500 ui-selected:text-white ui-not-selected:bg-white ui-not-selected:text-black">
            About me
          </Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div
              id="containerCard"
              className="grid grid-rows-1 justify-center gap-2 text-white w-screen"
            >
              <div className="card">Social Media Handler</div>
              <div className="card">What if tech meets art?</div>
              <div className="card">Instagram</div>
              <div className="card">Projects</div>
              <div className="card">
                <a></a>myX
              </div>
              <div className="card">Collaborate</div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div
              id="containerCard"
              className="grid grid-rows-1 justify-center gap-2 text-white w-screen"
            >
              <div className="card">Satu</div>
              <div className="card">What if tech meets art?</div>
              <div className="card">Instagram</div>
              <div className="card">Projects</div>
              <div className="card">
                <a></a>myX
              </div>
              <div className="card">Collaborate</div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div
              id="containerCard"
              className="grid grid-rows-1 justify-center gap-2 text-white w-screen"
            >
              <div className="card">Dua</div>
              <div className="card">What if tech meets art?</div>
              <div className="card">Instagram</div>
              <div className="card">Projects</div>
              <div className="card">
                <a></a>myX
              </div>
              <div className="card">Collaborate</div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      {/* <header className="text-white flex justify-between p-4">
        <div className="font-semibold p-2">It's Dhafin!</div>
        <div className="flex gap-4">
          <a className="hover:bg-lime-400  hover:text-black p-2">Blog</a>
          <a className="hover:bg-lime-400 hover:text-black p-2">Contact</a>
        </div>
      </header> */}
    </main>
  );
}
