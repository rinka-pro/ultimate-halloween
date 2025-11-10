import { useState } from 'react';

const moods = [
  'scary',
  'funny',
  'sexy',
  'cute',
  'creative',
  'gothic',
  'minimalistic',
];

export default function MoodSelector({ onUpdate }) {
  const [selectedMood, setSelectedMood] = useState([]);

  function handleSelection(e) {
    setSelectedMood(e.target.value);
    onUpdate('mood', e.target.value);
  }

  return (
    <div className="flex flex-wrap gap-3">
      {moods.map((mood) => {
        return (
          <label
            key={mood}
            className="cursor-pointer rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-amber-500 hover:text-amber-500 has-[:checked]:border-amber-500 has-[:checked]:text-amber-500">
            <input
              className="peer sr-only absolute h-0 w-0 opacity-0"
              type="checkbox"
              value={mood}
              checked={selectedMood === mood}
              onChange={handleSelection}
            />
            {mood}
          </label>
        );
      })}
    </div>
  );
}
