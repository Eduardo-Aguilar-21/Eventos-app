const React = require('react');
import Login from './../screens/Login/Login';
const { render } = require('@testing-library/react-native');


describe('Login component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Login />);
    const textElement = getByText('Iniciar Sesion');
    expect(textElement).toBeDefined();
  });
});
