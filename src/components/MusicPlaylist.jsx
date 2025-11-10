export default function MusicPlaylist() {
  return (
    <section className="section divider-bottom relative px-4 pb-6 pt-16 sm:px-6 sm:pb-8 md:px-10">
      <div className="relative mx-auto max-w-5xl">
        <h2
          className="mb-4 mt-8 max-w-xl text-2xl text-amber-500 md:text-4xl"
          id="music">
          Turn up the spooky tunes
        </h2>
        <p className="mb-8 max-w-xl">
          Set the mood with some hauntingly good tunes. Make sure you’re logged
          into Spotify to enjoy full tracks.
        </p>
        <iframe
          data-testid="embed-iframe"
          src="https://open.spotify.com/embed/playlist/5rXTIghwdcH7yfJ8d2ho79?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"></iframe>
      </div>
    </section>
  );
}
