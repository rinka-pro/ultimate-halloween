import { useState } from 'react';

const characters = [
  'witch',
  'vampire',
  'zombie',
  'ghost',
  'pirate',
  'doll',
  'demon',
  'fairy',
  'clown',
  'werewolf',
];

export default function CharacterSelect({ onUpdate }) {
  const [selectedChar, setSelectedChar] = useState('');
  function handleSelection(e) {
    setSelectedChar(e.target.value);
    onUpdate('character', e.target.value);
  }
  return (
    <div className="flex flex-wrap gap-3">
      {characters.map((char) => {
        return (
          <label
            key={char}
            className="cursor-pointer rounded-full border border-stone-700 px-4 py-2 text-sm text-stone-300 transition hover:border-amber-500 hover:text-amber-500 has-[:checked]:border-amber-500 has-[:checked]:text-amber-500">
            <input
              className="peer sr-only absolute h-0 w-0 opacity-0"
              type="radio"
              value={char}
              checked={selectedChar === char}
              onChange={handleSelection}
            />
            {char}
          </label>
        );
      })}
    </div>
  );
}
