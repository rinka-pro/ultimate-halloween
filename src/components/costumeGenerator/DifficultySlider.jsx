import { useState } from 'react';

export default function DifficultySlider({ difficulty, onUpdate }) {
  const [selectedDifficulty, setSelectedDifficulty] = useState(difficulty);

  function handleChangeDifficulty(e) {
    setSelectedDifficulty(e.target.value);
    onUpdate('difficulty', e.target.value);
  }

  const difficultyMap = {
    0: 'Quick & Easy',
    1: 'Moderately Challenging',
    2: 'Epic',
  };

  return (
    <div className="relative mx-auto mt-16 max-w-2xl">
      <span
        className="absolute bottom-0 mb-4 -translate-y-1/2 whitespace-nowrap rounded-full border bg-stone-900 px-4 py-2 text-sm text-amber-500"
        style={{
          left: `calc((100 / 2) * ${selectedDifficulty}%)`,
          transform: `translateX(-${50 * selectedDifficulty}%)`,
        }}>
        {difficultyMap[selectedDifficulty]}
      </span>
      <input
        type="range"
        min="0"
        max="2"
        value={selectedDifficulty}
        className="w-full cursor-pointer bg-amber-400 accent-amber-500"
        onChange={handleChangeDifficulty}
      />
    </div>
  );
}
