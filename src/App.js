import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
// import User from './components/User';
import Counter from './components/Counter';


function App() {
  return (
    <div className="App">
      {/* <User render={(isLoggedIn) => isLoggedIn ? 'sakib' : 'guest'}></User> */}

      <Counter
        render={(count, handleEvent) => (
          <ClickCounter count={count} handleEvent={handleEvent} />
        )}
      ></Counter>

      <Counter
        render={(count, handleEvent) =>
        (<HoverCounter count={count} handleEvent={handleEvent} />
        )}
      ></Counter>

      {/* or another way of using render prop pattern */}
      {/* <Counter>
        {(count, handleEvent) => (
          <ClickCounter count={count} handleEvent={handleEvent} />
        )}
      </Counter>

      <Counter>
        {(count, handleEvent) =>
        (<HoverCounter count={count} handleEvent={handleEvent} />
        )}
      </Counter> */}

    </div >
  );
}

export default App;
