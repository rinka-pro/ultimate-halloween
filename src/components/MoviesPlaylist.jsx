export default function MoviesPlaylist() {
  const movies = [
    {
      title: 'Hocus Pocus',
      desc: 'A teenage boy named Max and his little sister move to Salem, where he struggles to fit in before awakening a trio of diabolical witches that were executed in the 17th century.',
      img: 'https://m.media-amazon.com/images/M/MV5BYWRhOThjM2UtNmRhMi00YzFiLWI4MDYtOGQwNGY0ZjFlOGFkXkEyXkFqcGc@._V1_FMjpg_UY475_.jpg',
      link: 'https://www.imdb.com/title/tt0107120/',
    },
    {
      title: 'It',
      desc: 'In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.',
      img: 'https://m.media-amazon.com/images/M/MV5BZGZmOTZjNzUtOTE4OS00OGM3LWJiNGEtZjk4Yzg2M2Q1YzYxXkEyXkFqcGc@._V1_FMjpg_UY480_.jpg',
      link: 'https://www.imdb.com/title/tt1396484/',
    },
    {
      title: 'Scream',
      desc: 'In the small town of Woodsboro, California, a masked killer known as Ghostface begins murdering high school students, and a group of friends must use their knowledge of horror movies to unmask the killer.',
      img: 'https://m.media-amazon.com/images/M/MV5BMjA2NjU5MTg5OF5BMl5BanBnXkFtZTgwOTkyMzQxMDE@._V1_.jpg',
      link: 'https://www.imdb.com/title/tt0117571/',
    },
    {
      title: 'Casper',
      desc: 'An afterlife therapist and his daughter meet a friendly young ghost when they move into a crumbling mansion in order to rid the premises of wicked spirits.',
      img: 'https://m.media-amazon.com/images/M/MV5BZjYzZWZlYzYtZWZkYy00YjRkLWIxN2EtNjY1MGZmYmQxYTIxXkEyXkFqcGc@._V1_.jpg',
      link: 'https://www.imdb.com/title/tt0112642/',
    },

    {
      title: 'Halloween',
      desc: 'Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois, to kill again.',
      img: 'https://m.media-amazon.com/images/M/MV5BMzZiNTdiYTgtYjNkMS00MmJmLWEwZGQtNmY0NGJkMGE0YmYzXkEyXkFqcGc@._V1_.jpg',
      link: 'https://www.imdb.com/title/tt0077651/',
    },

    {
      title: 'The Addams Family',
      desc: 'Con artists plan to fleece an eccentric family using an accomplice who claims to be their long-lost uncle.',
      img: 'https://m.media-amazon.com/images/M/MV5BZWY0MzVlNGEtYzM1MC00OTI4LWE3ZTQtNWJjYzk2Y2MyNjVkXkEyXkFqcGc@._V1_.jpg',
      link: 'https://www.imdb.com/title/tt0101272/',
    },
  ];

  return (
    <section className="section divider-bottom relative px-4 pb-6 pt-16 sm:px-6 sm:pb-8 md:px-10">
      <div className="relative mx-auto max-w-5xl">
        <h2
          className="mb-4 mt-8 max-w-2xl text-2xl text-amber-500 md:text-4xl"
          id="movies">
          Plan your movie night
        </h2>
        <p className="mb-8 max-w-2xl">
          Not sure what to watch this Halloween? Here’s a mix of nostalgic
          favorites and light spooky fun to keep you company through the night.
          <a
            href="https://www.imdb.com/list/ls023118929/"
            target="_blank"
            className="block text-amber-500 transition-colors hover:text-amber-600">
            Find more ideas on IMDb →
          </a>
        </p>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {movies.map((movie) => {
            return (
              <label
                key={movie.title}
                className="group relative aspect-[2/3] w-full overflow-hidden rounded-xl bg-stone-900">
                <input type="checkbox" className="peer hidden" />
                <img
                  src={movie.img}
                  alt={movie.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 peer-checked:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-stone-900/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100 peer-checked:opacity-100" />
                <div className="absolute bottom-0 translate-y-[calc(100%-54px)] p-3 text-stone-100 transition-transform duration-300 group-hover:translate-y-0 peer-checked:translate-y-0">
                  <p className="font-typed mb-4 inline-block rounded bg-stone-900/90 px-2 py-1 text-lg font-semibold text-amber-500">
                    {movie.title}
                  </p>
                  <p className="text-stone-200">{movie.desc}</p>
                  <a
                    href={movie.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block rounded bg-amber-600 px-4 py-2 font-semibold text-white hover:bg-amber-500">
                    View on IMDb
                  </a>
                </div>
              </label>
            );
          })}
        </div>
      </div>
    </section>
  );
}
