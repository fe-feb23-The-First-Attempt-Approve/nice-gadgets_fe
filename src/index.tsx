import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import './styles/index.scss';
import { Provider } from './Context';
import App from './App';

ReactDOM.render(
  <Router>
    <Provider>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);
