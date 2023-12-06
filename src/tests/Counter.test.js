import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Counter from '../components/Counter';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('Should render', () => {
    const element = render(
        <Counter />,
    );
});

it('Should initially display 0', () => {
    const element = render(
        <Counter />,
    );

    let text = element.baseElement.querySelector('p').textContent;

    expect(text).toBe('You clicked 0 times');
});

it('should increment the count', () => {
    const element = render(
        <Counter />,
    );

    let button = element.baseElement.querySelector('button#increment');

    fireEvent.click(button);

    let text = element.baseElement.querySelector('p').textContent;

    expect(text).toBe('You clicked 1 times');

})

it('should decrement the count', () => {
    const element = render(
        <Counter />,
    );

    let button = element.baseElement.querySelector('button#decrement');

    fireEvent.click(button);

    let text = element.baseElement.querySelector('p').textContent;

    expect(text).toBe('You clicked -1 times');
})

it('should update the title', () => {
    const element = render(
        <Counter />,
    );

    let button = element.baseElement.querySelector('button#increment');

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(document.title).toBe('You clicked 4 times');
})