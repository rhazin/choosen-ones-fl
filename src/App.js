import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className='dark:bg-slate-800 dark:text-slate-50 min-h-screen' >
      <header className="flex items-center py-4 justify-center w-5/6">
        <img src="images/choosen-ones-logo.png" alt="" className='mr-auto' />
        <nav>
          <ul className='flex font-bold '>
            <li className='mx-4'>HOME</li>
            <li className='mx-4'>UTILITY</li>
            <li className='mx-4'>ROADMAP</li>
            <li className='mx-4'>TEAM</li>
            <li className='mx-4'>ABOUT</li>
          </ul>
        </nav>
      </header>
      <Home></Home>
    </div>
  );
}

export default App;
