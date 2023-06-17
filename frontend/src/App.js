import logo from './logo.svg';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import UserDisplay from './components/UserDisplay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
      <h1>Registration Form</h1>
      <RegistrationForm />

      <h1>Login Form</h1>
      <LoginForm />

      <h1>User Display</h1>
      <UserDisplay />
    </div>
    </div>
  );
}

export default App;
