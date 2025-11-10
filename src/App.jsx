import CostumeGenerator from './components/CostumeGenerator';
import DecorationIdeas from './components/DecorationIdeas';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MoviesPlaylist from './components/MoviesPlaylist';
import MusicPlaylist from './components/MusicPlaylist';
import Outro from './components/Outro';
import Snacks from './components/Snacks';

function App() {
  return (
    <>
      <Hero />
      <CostumeGenerator />
      <DecorationIdeas />
      <Snacks />
      <MoviesPlaylist />
      <MusicPlaylist />
      <Outro />
      <Footer />
    </>
  );
}

export default App;
