import ReactDOM from 'react-dom';
import Search from './Search';

it('renders form element', () => {
  const form = document.createElement('form');
  ReactDOM.render(<Search />, form);
});