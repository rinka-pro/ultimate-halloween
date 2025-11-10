import DecorationCard from './DecorationCard';

const ideas = [
  {
    title: 'Eerie Yarn Spiderweb',
    desc: 'Weave a perfect spiderweb using only yarn. Cross and secure strands, then spiral the thread to form the web. An effortless way to add a touch of silent dread to any corner.',
    link: 'https://pin.it/fyt1DNX16',
    img: 'decor/web.jpg',
  },
  {
    title: 'Spooky Shadow',
    desc: 'Cast a haunting shadow with a simple cardstock cutout. Place a candle behind your carved phantom, witch, or pumpkin to project its menacing silhouette onto the wall. A timeless trick for an eerie, atmospheric glow.',
    img: 'decor/shadow.jpg',
  },
  {
    title: 'Blood-Drip Candles',
    desc: 'Create a creepy effect by dripping red candle wax onto a white one. An easy way to make your candles look gruesome.',
    img: 'decor/candles.jpg',
  },
  {
    title: 'Flocking Paper Bats',
    desc: 'Cut bat silhouettes from black paper and scatter them across your walls or hang them from threads. This simple trick creates a dynamic swarm effect, bringing eerie movement to your Halloween decor.',
    img: 'decor/bats.jpg',
  },
  {
    title: 'Floating Ghost Lights',
    desc: 'Craft glowing specters from foil and glue-soaked paper. Once dry, add eerie faces and nestle string lights inside to create an ethereal, floating squadron.',
    img: 'decor/ghosts.png',
    link: 'https://pin.it/STEYlLtQn',
  },
  {
    title: 'Bloody Handprints',
    desc: 'Mix red food coloring into clear glue and coat your hands. Let it dry completely, then peel off the flexible film. The realistic prints will cling to any mirror or glass.',
    img: 'decor/hand.jpg',
  },
  {
    title: 'Haunted Veil Passage',
    desc: 'Drape torn and tattered gauze in your doorframe to create a ghostly veil. Tear holes and fray the edges for a decayed effect. Complete the look with gruesome fake blood splatters to warn guests of the horrors that lie within.',
    img: 'decor/door.jpg',
  },
  {
    title: 'Glimmer in the Dark',
    desc: 'Transform cardboard tubes into lurking watchers. Carve sinister eyes into the tube, insert a glowing stick inside, and hide them in dark corners. A simple trick to make your garden feel alive with unseen terrors.',
    img: 'decor/eyes.jpg',
  },

  {
    title: 'The Bottle Corpse Bag',
    desc: 'Shape a haunting form from empty bottles and a trash bag. Bind them tightly with tape to create a grim, lumpen silhouette, perfect for a forgotten corner or a grisly porch display. A chilling suggestion of horrors left undiscovered.',
    img: 'decor/body.jpg',
  },
];
export default function DecorationIdeas() {
  return (
    <section className="section divider-bottom relative px-4 pb-6 pt-16 sm:px-6 sm:pb-8 md:px-10">
      <div className="relative mx-auto max-w-5xl">
        <h2
          className="mb-4 mt-8 max-w-xl text-2xl text-amber-500 md:text-4xl"
          id="decor">
          Set the scene
        </h2>
        <p className="mb-8 max-w-xl">
          Turn your home into a cozy haunt with easy DIY decor ideas — no ghosts
          required.
        </p>
        <div className="grid grid-cols-1 justify-center gap-8 md:grid-cols-3">
          {ideas.map((idea, idx) => {
            return <DecorationCard decoration={idea} key={idx} />;
          })}
        </div>
      </div>
    </section>
  );
}
