import { fireEvent, render, screen } from "@testing-library/react"
import Dropdown from "../Dropdown"

describe('Dropdown Component', () => {
    it('should be in the document', () => {
        const handleChangeGender = jest.fn();
        render(<Dropdown handleChangeGender={handleChangeGender} />);
        const dropdownElement = screen.getByTestId('gender-dropdown');
        expect(dropdownElement).toBeInTheDocument();
    });
    it('should select value by changing the dropdown element', () => {
        const handleChangeGender = jest.fn();
        render(<Dropdown handleChangeGender={handleChangeGender}/>);
        const dropdownelement = screen.getByTestId('gender-dropdown');
        fireEvent.change(dropdownelement, { target: { name: 'male' } });
        expect(dropdownelement.value).toBe('male');
    });


});