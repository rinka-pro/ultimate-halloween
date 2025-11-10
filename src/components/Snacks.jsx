import Masonry from 'react-masonry-css';

export default function SnacksDrinks() {
  const breakpointColumnsObj = {
    default: 3,
    768: 2,
    480: 1,
  };
  return (
    <section className="section divider-bottom relative px-4 pb-6 pt-16 sm:px-6 sm:pb-8 md:px-10">
      <div className="relative mx-auto max-w-5xl">
        <h2
          className="mb-4 mt-8 max-w-xl text-2xl text-amber-500 md:text-4xl"
          id="snacks">
          Grab some treats
        </h2>
        <p className="mb-8 max-w-xl">
          Get inspired by these spooky snacks to make your Halloween night even
          more fun.
        </p>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto gap-4"
          columnClassName="flex flex-col gap-4">
          <img
            src="snacks/popcorn.jpg"
            alt="Popcorn bags"
            className="w-full rounded-lg"
          />
          <img
            src="snacks/pizza.jpg"
            alt="Pizza bites"
            className="w-full rounded-lg"
          />
          <img
            src="snacks/spiders.jpg"
            alt="Hot dog spiders"
            className="w-full rounded-lg"
          />
          <img
            src="snacks/mandarin.jpg"
            alt="Mandarin pumpkins"
            className="w-full rounded-lg"
          />
          <img
            src="snacks/sandwiches.jpg"
            alt="Coffin sandwiches"
            className="w-full rounded-lg"
          />
        </Masonry>
      </div>
    </section>
  );
}
