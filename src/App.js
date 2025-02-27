
import './App.css'; // Import CSS file for styling
import Home from './components/home/Home';

function App() {

  return (
    <div className='main-container'>
      <header className='header-footer'><img style={{ width: '30px', height: '30px' , padding: '10px'}} src='https://icon-library.com/images/employee-icon-png/employee-icon-png-17.jpg' alt='emp-img'></img></header>
      <Home/>
      <footer className='header-footer'>© 6DTech. All Rights Reserved.</footer>
    </div>
  );
}

export default App; // Export the App component as the default export