import { useEffect, useState } from 'react';

const emojis = [
  'fueling the broom... 🧙‍♀️',
  'polishing fangs to a mirror shine... 🧛‍♀️',
  'reattaching a limb... 🧟‍♂️',
  'adjusting transparency levels... 👻',
  'sharpening horns... 😈',
  'gathering fairy dust... 🧚‍♀️',
  'growing fur and claws... 🐺',
];

export default function Loader() {
  const [currentEmoji, setCurrentEmoji] = useState(emojis[0]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentEmoji((prev) => {
          const next = emojis.indexOf(prev) + 1;
          return emojis[next % emojis.length];
        });
        setFade(true);
      }, 200);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto mb-12 max-w-3xl rounded-2xl border border-stone-800 bg-gradient-to-br from-stone-900 to-neutral-950 p-12 px-4 py-12 text-center shadow-lg">
      <p className="_animate-pulse font-typed text-3xl font-medium tracking-wide text-amber-500">
        <span className="mb-4 block">Preparing your costume:</span>
        <span
          className={`transition-opacity duration-300 ${
            fade ? 'opacity-100' : 'opacity-0'
          }`}>
          {currentEmoji}
        </span>
      </p>
    </div>
  );
}
