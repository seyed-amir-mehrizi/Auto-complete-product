import { fireEvent, render, screen } from "@testing-library/react"
import Checkbox from "../Checkbox"


describe('Checkbox Component', () => {
    it('should be in the document', () => {
        const handleChangeSale = jest.fn();
        render(<Checkbox handleChangeSale={handleChangeSale} />);
        const checkboxElement = screen.getByTestId('on-sale-checkbox');
        expect(checkboxElement).toBeInTheDocument();
    });

    it('should check it as true when click on the checkbox', () => {
        const handleChangeSale = jest.fn();
        render(<Checkbox handleChangeSale={handleChangeSale} />);
        const checkboxElement = screen.getByTestId('on-sale-checkbox');
        fireEvent.click(checkboxElement);
        expect(checkboxElement.checked).toEqual(true);
    });
})