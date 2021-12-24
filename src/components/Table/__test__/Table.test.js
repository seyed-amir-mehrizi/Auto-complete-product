import { screen , render } from "@testing-library/react";
import Table from "../Table"


describe('Table Component', () => {
    it('should render the empty product message', async() => {
        render(<Table />);
        const headingElement = screen.getByRole('heading' , {name : /There Are No Products/i});
        expect(headingElement).toBeInTheDocument();
    })
})  