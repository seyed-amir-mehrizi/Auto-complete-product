import { fireEvent, render, screen } from '@testing-library/react';
import Pagination from '../Pagination'

function PaginationList() {
    const numbers = [1, 2, 3];
    return (
        numbers.map((item, i) => {
            return <><li key={i}>
                <a href='#!' data-testid={`item-${i}`}>
                    {item}
                </a>
            </li></>
        })

    )
}
describe('AutoComplete Component', () => {
    beforeAll(() => {
        const paginate = jest.fn()
        render(<Pagination paginate={paginate} />);
    })
    it('should have input by the place holder text', async () => {
        const navElement = screen.getByTestId(/pagination-navbar/i);
        expect(navElement).toBeInTheDocument();
    });

    it('should have list of pagination in the document', async () => {
        render(<PaginationList />);
        const anchorElements = await screen.findByTestId('item-0');
        expect(anchorElements).toBeInTheDocument();
    });

    it('should change the page when click on item', async () => {
        render(<PaginationList />);
        const anchorElements = await screen.findByTestId('item-0');
        fireEvent.click(anchorElements)
        expect(anchorElements).not.toBeNull();
    });


})


