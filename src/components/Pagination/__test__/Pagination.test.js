import { fireEvent, render, screen } from '@testing-library/react';
import Pagination from '../Pagination'

describe('AutoComplete Component', () => {
    it('should have input by the place holder text', async () => {
        render(<Pagination />);
        const navElement = screen.getByTestId(/pagination-navbar/i);
        expect(navElement).toBeInTheDocument();
    });


})


