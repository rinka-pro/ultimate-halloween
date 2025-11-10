export default function DecorationCard({ decoration }) {
  const { title, desc, link, img } = { ...decoration };
  return (
    <label className="group relative block aspect-square w-full cursor-pointer [perspective:1000px]">
      <input type="checkbox" className="peer hidden" />

      <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] peer-checked:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 overflow-hidden rounded-lg [backface-visibility:hidden]">
          <img src={img} alt={title} className="h-full w-full object-cover" />
          <div className="font-typed absolute bottom-0 left-0 w-full bg-stone-900/80 p-2 text-lg font-semibold text-amber-500">
            {title}
          </div>
        </div>
        <div className="absolute inset-0 overflow-auto rounded-lg bg-stone-900 p-4 text-stone-100 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <p>{desc}</p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-amber-500 hover:text-amber-600">
              See a Tutorial →
            </a>
          )}
        </div>
      </div>
    </label>
  );
}
