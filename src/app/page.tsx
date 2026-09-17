'use client'

export default function Home() {
  return (
    <main className="w-screen h-screen p-0 m-0 overflow-hidden bg-[#f8fafc]">
      <iframe
        src="/alicelabs.html"
        title="AliceLabs | Elite Engineering Hub"
        className="w-full h-full border-0 block"
        style={{ width: '100vw', height: '100vh', border: 'none' }}
        loading="eager"
      />
    </main>
  )
}
