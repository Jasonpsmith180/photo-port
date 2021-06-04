import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component renders', () => {
    // baseline test
    it('renders', () => {
        render(<ContactForm />);
    });

    // snapshot test
    it('matches snapshot', () => {
        // arrange
        const { asFragment } = render(<ContactForm />);
        // assert
        expect(asFragment()).toMatchSnapshot();
    });
});

it('renders', () => {
    // arrange
    const { getByTestId } = render(<ContactForm />);
    // assert
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
});

it('renders', () => {
    // arrange
    const { getByTestId } = render(<ContactForm />)
    // assert
    expect(getByTestId('button')).toHaveTextContent('Submit');
});

