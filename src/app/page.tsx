'use client';

import { v4 } from "uuid";
import { useRef, type FormEvent, useState } from "react";

type url = {
  id: string;
  url: string;
}


export default function HomePage() {
  const [urls, setUrls] = useState<url[]>([])
  const inputRef = useRef<HTMLInputElement | null>(null)

  function onFormSubmit(e: FormEvent) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      url: { value: string };
    };
    const url =  {
      id: v4(),
      url: target.url.value
    }
    setUrls([...urls, url ])
    if(!inputRef.current) return
    inputRef.current.value = ""
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 bg-gradient-to-b from-[#1b2132] to-[#162133] text-white">
      <h1 className="text-7xl tracking-tighter font-extrabold">Mini <span className="text-[hsl(248,40%,56%)]">URL</span></h1>
      <section className="flex flex-col gap-5">
        <section className="flex flex-col max-h-96 overflow-y-auto rounded-xl divide-y divide-slate-200/5 scroll-smooth">
          {
            urls.map(({id, url}) =>
              <article key={id} className="flex items-center justify-between text-lg text-white bg-white/10 py-3 px-5">
                <p>{url}</p>
                <button type="button" className=" hover:bg-zinc-600/50 rounded-full w-[40px] aspect-square  transition-all flex items-center justify-center ">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" stroke-width="0" fill="currentColor" /><path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" stroke-width="0" fill="currentColor" /></svg>
                </button>
                </article>
            )
          }
        </section>
        <form className="flex gap-2 items-center" onSubmit={onFormSubmit}>
          <input name="url" ref={inputRef} placeholder="google.com" className="text-lg text-white bg-white/10 py-3 px-5 rounded-full" required/>
          <button data-tooltip-target="tooltip-default" type="submit" className="flex hover:bg-zinc-600/50 rounded-full w-[48px] aspect-square  transition-all justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-link-plus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.072 0a4.993 4.993 0 0 1 -.001 7.072" /><path d="M12.603 18.534a5.07 5.07 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
          </button>
          <div id="tooltip-default" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Tooltip content
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </form>
      </section>


    </main>
  );
}
