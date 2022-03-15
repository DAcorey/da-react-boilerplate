import { useEffect } from 'react';
import logo from '../../assets/images/logo.svg';
import './App.css';

// For react router example
import { Routes, Route, Link, Outlet } from 'react-router-dom';

function App( props ) {
  // Change redux example state on load (to demonstrate that it's set up properly)
  useEffect(() => {
    props.exampleAction('Hello World! From Redux!');
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
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

        {/* Display Redux example state */}
        <p>{props.exampleState}</p>
        
        {/* Display React Router example w/ Nested Routes */}
        <Routes>
          <Route path="/" element={ <div className="tab">
            <Link className="tablinks" to="tab-one">Tab One</Link>
            <Link className="tablinks" to="tab-two">Tab Two</Link>
            <Link className="tablinks" to="tab-three">Tab Three</Link>
            <Outlet /> { /* This component MUST be in the parent Route component. It tells the parent component where to render the children components */ }
          </div>}>
            <Route index element={<span className='tabcontent'>Click a tab!</span>} /> { /* 'index' routes are for default views */ }
            <Route path="tab-one" element={ <span className='tabcontent'>This is tab one!</span> } />
            <Route path="tab-two" element={ <span className='tabcontent'>This is tab two!</span> } />
            <Route path="tab-three" element={ <span className='tabcontent'>This is tab three!</span> } />
          </Route>
        </Routes>

        {/* Super simple router example!!! */}
        {/* <Routes>
          <Route exact path="/" element={ <Link to='/test-page'>Render Link 1</Link> } />
          <Route exact path="/test-page" element={ <Link to="/">Render Link 2</Link> } />
        </Routes> */}
      </header>
    </div>
  );
};

export default App;