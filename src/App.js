
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import Main from './Main';

function App() {
  return (
    <div >
      <Provider store={store}>
      <BrowserRouter>
      <Main/>
      </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
