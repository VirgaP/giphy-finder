import ReactDOM from 'react-dom';
import Gif from './Gif';

it('renders image element', () => {
  const img = document.createElement('img');
  ReactDOM.render(<Gif />, img);
});