export default function Hero() {
  return (
    <section className="hero relative h-screen w-screen overflow-hidden bg-[url('hero.png')] bg-cover bg-bottom">
      <div className="relative m-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-shadow-lg mb-4 text-4xl font-bold text-[#fff5e1] md:text-7xl">
          The One Halloween Page
        </h1>
        <p className="text-shadow-sm mb-8 max-w-2xl text-lg text-[#fff5e1] md:text-xl">
          Forget digging for Halloween inspiration through twelve spooky blogs
          at 3AM. Build your perfect costume, explore spooky decorations, creepy
          snacks, movies, and music — it’s all here, on the One Halloween page.
          You’re welcome.
        </p>
        <div className="flex">
          <a
            href="#costumes"
            className="font-typed block rounded-md border-2 border-[#fff5e1] px-6 py-3 text-lg font-semibold text-[#fff5e1] shadow-2xl transition hover:bg-[#fff5e1] hover:text-stone-800 md:text-xl">
            Jump to the fun 🎃
          </a>
        </div>
      </div>
    </section>
  );
}
