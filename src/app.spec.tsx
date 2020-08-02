import * as React from 'react';
import { shallow } from 'enzyme';

import App from './App';


describe('App', () => {
    it('renders the heading', () => {
        const result = shallow(<App />).contains(
            <h1>Hola Morsi</h1>
        );
        console.log(result)

    });
});
