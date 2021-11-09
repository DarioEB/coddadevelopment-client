import {
  BrowserRouter as Router,
  Routes, 
  Route 
} from 'react-router-dom';
// Components
import Home from './components/Home';
import Footer from './components/layout/Footer';
// Layout 
import Header from './components/layout/Header';
// Provider

// Redux
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <Router>
      <Provider store={store}>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
      <Footer />
      </Provider>
    </Router>
  );
}

export default App;
