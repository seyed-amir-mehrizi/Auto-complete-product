import { fireEvent, render, screen } from '@testing-library/react';
import AutoComplete from '../AutoComplete'

describe('AutoComplete Component', () => {
    it('should have input by the place holder text', async () => {
        render(<AutoComplete />);
        const autoCompleteElement = screen.getByPlaceholderText(/Search The Product/i);
        expect(autoCompleteElement).toBeInTheDocument();
    });

    it('should change the value in the input when user type', async () => {
        const getSearchTitle = jest.fn();
        render(<AutoComplete getSearchTitle={getSearchTitle}/>);
        const autoCompleteElement = screen.getByPlaceholderText(/Search The Product/i);
        fireEvent.change(autoCompleteElement, { target: { value: 'week' } });
        expect(autoCompleteElement.value).toBe('week')
    });
})


