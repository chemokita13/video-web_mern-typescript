import React from 'react';
import { render, screen } from '@testing-library/react';

test('renders learn react link', () => {
    render(<h1>Hello world!</h1>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
