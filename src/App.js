import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import InfoArea from './components/infoarea';

function App() {
  return (
    <div className="App">
    <main className='flex flex-col items-center mt-16'>
        <Navbar />
        <InfoArea />

    </main>

  </div>
  );
}

export default App;
