// import { render, screen } from '@testing-library/react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter()});

test('renders non-empty component without crashing', () => {
  const wrapper = shallow(<App />);
  console.log(wrapper.debug())
  expect(wrapper.exists()).toBe(true)
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
