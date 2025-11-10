export default function Footer() {
  return (
    <footer className="drop-shadow-[0_-3px_3px_rgba(0,0,0,0.12)]">
      <div className="font-typed mx-auto flex w-screen flex-col items-center px-12 pb-6 pt-12 text-center text-sm text-amber-500 drop-shadow-xl md:flex-row">
        <p>© made by rinka with 🎃</p>
        <a
          href="#top"
          className="mt-2 block text-amber-500 hover:text-amber-600 md:ml-auto">
          ↑ Back to top
        </a>
      </div>
    </footer>
  );
}
