import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Newtask from './components/Newtask'
import { fireEvent, getByTestId } from '@testing-library/react';


it('test add new task button', () => {
    const props = {
        "title": "need some potatos",
        "author": "zhuping",
        "date": "06/05/2020",
        "time": "10:52 PM",
        "description": "2 potatos",
        "item-list": {
            "potatos": 2
        },
        "address": "811 Emerson ST",
        "state": "IL",
        "city": "evanston"
    };

    const { container } = render(<Newtask {...props} />);
    const total = getByTestId(container, "testbutton");
    expect(total.textContent).toBe("Submit");

    fireEvent.click(total);
    expect(total.textContent).toBe("Submit");
});