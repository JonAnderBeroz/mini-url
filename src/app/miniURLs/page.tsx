'use client'

import { type url } from "../page"

export default function miniURLs() {
  const urls = JSON.parse(localStorage.getItem('urls') ?? '[]') as url[]

  if (urls.length === 0) {
    return <p>There are no minified urls on localStorage</p>
  }

  async function copyURL(slug: string | undefined) {
    if(!slug) return
    console.log(location.origin)
    await navigator.clipboard.writeText(`${location.origin}/min/${slug}`)
  }

  function openWindow(slug: string | undefined) {
    if(!slug) return;
    open(`${location.origin}/min/${slug}`, "_blank")
  }

  return (
    <section className="grid gap-5 max-w-6xl w-full grid-cols-[repeat(auto-fill,minmax(220px,1fr))]  px-5 content-center ">
      {
        urls.map(({ id, url, slug }) =>
          <section key={id} className="flex flex-col bg-zinc-900 p-5 h-30 rounded-md h-28 justify-center relative group/link hover:outline hover:outline-2 hover:outline-gray-400 ">
            <p className="text-xl font-semibold">{`/min/${slug}`}</p>
            <small className="text-gray-400">{url}</small>
            <article className="absolute top-2 right-2 gap-1 text-gray-400 flex invisible group-hover/link:visible">
              <button onClick={() => copyURL(slug)} className="flex hover:bg-zinc-600/50 rounded-full w-[36px] aspect-square  transition-all justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /></svg>
              </button>
              <button onClick={() => openWindow(slug)} className="flex hover:bg-zinc-600/50 rounded-full w-[36px] aspect-square  transition-all justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" /><path d="M11 13l9 -9" /><path d="M15 4h5v5" /></svg>
              </button>
            </article>
          </section>
        )
      }
    </section>
  )
}