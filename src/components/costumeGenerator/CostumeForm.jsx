import { useRef, useState } from 'react';
import CharacterSelector from './CharacterSelector';
import DifficultySlider from './DifficultySlider';
import MoodSelector from './MoodSelector';

import { GoogleGenAI } from '@google/genai';
const ai = new GoogleGenAI({
  apiKey: 'AIzaSyAdAL2hDlbJe-oDGqPLJRgcIpRtqWmBpTU',
});

import systemPrompt from '../../prompt';
import Tutorial from './Tutorial';
import Loader from './Loader';

import backupCostume from '../../backup-costume';

const initialFormData = {
  character: '',
  mood: '',
  difficulty: 1,
};

export default function CostumeForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [tutorial, setTutorial] = useState('');
  const [tutorialStatus, setTutorialStatus] = useState('form');
  const [tutorialError, setTutorialError] = useState('');
  const [costumeTitle, setCostumeTitle] = useState('');

  const difficultyMap = {
    0: 'Quick & Easy',
    1: 'Moderately Challenging',
    2: 'Epic',
  };

  const formRef = useRef(null);
  function handleFieldChange(field, data) {
    setFormData((prevFormData) => {
      return { ...prevFormData, [field]: data };
    });
  }

  async function generateCostume(e) {
    e.preventDefault();
    setTutorialStatus('loading');

    formRef.current?.scrollIntoView({
      behavior: 'instant',
      block: 'start',
    });

    const key = `${formData.character}_${formData.mood}_${formData.difficulty}`;
    const cachedTutorial = localStorage.getItem(key);

    if (cachedTutorial) {
      setTutorial(JSON.parse(cachedTutorial));
      console.log('loaded from cache');
      setTutorialStatus('ready');
      setCostumeTitle(
        `${difficultyMap[formData.difficulty]} ${formData.mood} ${formData.character} Costume`
      );

      return;
    }

    const response = await sendGeminiRequest(key);

    if (response) {
      setTutorial(JSON.parse(response));
      setTutorialStatus('ready');
      setCostumeTitle(
        `${difficultyMap[formData.difficulty]} ${formData.mood} ${formData.character} Costume`
      );
    }
  }

  async function sendGeminiRequest(key) {
    const userPrompt = `
    REQUEST: Generate a Halloween costume creation guide.
    PARAMETERS:
    Character: ${formData.character}
    Mood: ${formData.mood}
    Difficulty: ${formData.difficulty}.
    Please analyze these parameters and create a detailed step-by-step costume guide according to the specified difficulty level. Focus on practical implementation and creative solutions that match the requested mood.
    OUTPUT REQUIREMENTS:
    - Follow the exact response format
    - Adhere strictly to the easy level constraints
    - Provide actionable steps
    - Include all required sections`;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: userPrompt,
        config: {
          systemInstruction: systemPrompt,
        },
      });

      localStorage.setItem(key, response.text);
      console.log('Saved to cache!');
      return response.text;
    } catch (error) {
      let errorMsg = '';
      try {
        const parsed = JSON.parse(error.message);
        errorMsg = parsed.error?.message || errorMsg;
      } catch {
        errorMsg = error.response?.error?.message || error.message || errorMsg;
      }
      console.log(error);

      setTutorialError(errorMsg);
      setTutorialStatus('error');

      return false;
    }
  }

  function resetTutorial() {
    formRef.current?.scrollIntoView({
      behavior: 'instant',
      block: 'start',
    });
    setFormData(initialFormData);
    setTutorial('');
    setTutorialStatus('form');
  }
  function setBackupCostume() {
    setTutorial(backupCostume);
    setTutorialStatus('ready');
    setCostumeTitle(`Quick & Easy Gothic Vampire Costume`);
  }
  return (
    <div ref={formRef}>
      {tutorialStatus === 'error' && (
        <div className="mx-auto max-w-3xl rounded-2xl border border-stone-800 bg-gradient-to-br from-stone-900 to-neutral-950 p-6 shadow-lg md:p-12">
          <p className="font-typed text-xl font-medium text-amber-500">
            Oops! Something went wrong — either we ran out of AI magic or the
            server turned into a pumpkin.
            <br />
            {tutorialError && `Error: ${tutorialError}`} <br />
            You can try again later, or summon our pre-saved Quick & Easy Gothic
            Vampire Costume instead!
          </p>
          <div className="my-4 flex gap-4">
            <button
              onClick={resetTutorial}
              className="rounded-full bg-amber-500 px-4 py-3 text-base font-semibold text-slate-950 transition duration-300 hover:bg-amber-300 disabled:pointer-events-none disabled:opacity-30 sm:px-6 sm:py-4 sm:text-lg">
              Try again
            </button>
            <button
              onClick={setBackupCostume}
              className="rounded-full bg-amber-500 px-4 py-3 text-base font-semibold text-slate-950 transition duration-300 hover:bg-amber-300 disabled:pointer-events-none disabled:opacity-30 sm:px-6 sm:py-4 sm:text-lg">
              Use Backup Costume
            </button>
          </div>
        </div>
      )}
      {tutorialStatus === 'form' && (
        <>
          <h2
            className="mb-4 max-w-2xl text-2xl text-amber-500 md:text-4xl"
            id="costumes">
            Build your perfect Halloween look
          </h2>
          <p className="mb-8 max-w-2xl">
            Pick your persona, mood, and effort level — then let the AI do the
            trick! You’ll get a step-by-step guide for your costume.
          </p>
          <form className="mx-auto max-w-3xl rounded-2xl border border-stone-800 bg-gradient-to-br from-stone-900 to-neutral-950 p-6 shadow-lg md:p-12">
            <div className="mb-6">
              <label className="font-typed mb-4 block text-lg text-amber-500">
                Character
              </label>
              <CharacterSelector onUpdate={handleFieldChange} />
            </div>
            <div className="mb-6">
              <label className="font-typed mb-4 block text-lg text-amber-500">
                Mood
              </label>
              <MoodSelector onUpdate={handleFieldChange} />
            </div>
            <div className="mb-6">
              <label className="font-typed mb-4 block text-lg text-amber-500">
                Difficulty level
              </label>
              <DifficultySlider
                difficulty={formData.difficulty}
                onUpdate={handleFieldChange}
              />
            </div>
            <button
              onClick={generateCostume}
              disabled={
                !(formData.character && formData.mood && formData.difficulty) ||
                tutorialStatus === 'loading'
              }
              className="mx-auto mt-6 rounded-full bg-amber-500 px-4 py-3 text-base font-semibold text-slate-950 transition duration-300 hover:bg-amber-300 disabled:pointer-events-none disabled:opacity-30 sm:px-6 sm:py-4 sm:text-lg">
              Generate Costume
            </button>
          </form>
        </>
      )}
      {tutorialStatus === 'loading' && <Loader />}
      {tutorialStatus === 'ready' && tutorial && (
        <>
          <Tutorial tutorial={tutorial} title={costumeTitle} />
          <button
            onClick={resetTutorial}
            className="mx-auto mt-6 rounded-full bg-amber-500 px-4 py-3 text-base font-semibold text-slate-950 transition duration-300 hover:bg-amber-300 disabled:pointer-events-none disabled:opacity-30 sm:px-6 sm:py-4 sm:text-lg">
            Try again?
          </button>
        </>
      )}
    </div>
  );
}
