// import { render } from "@testing-library/react-native"
const { Cuenta } = require("../screens/Cuenta") ;
const Login =  require("../screens/Login/Login") ;
const React = require('react');

describe('Cuenta component', () => {
    it('renders correctly', () => {
        const {getByText} = render(<Cuenta />);
        const textElement = getByText('Cuenta');
        expect(textElement).toBeDefined();
    });
});