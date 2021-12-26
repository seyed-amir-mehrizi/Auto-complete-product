import { screen , render } from "@testing-library/react";
import Table from "../Table"


describe('Table Component', () => {
    it('should render the empty product message', async() => {
        render(<Table />);
        const headingElement = screen.getByRole('heading' , {name : /There Are No Products/i});
        expect(headingElement).toBeInTheDocument();
    })
    it('should render the the table element', async() => {
        const data = [1,2,3]
        render(<Table Products={data}/>);
        const tableElement = await screen.findByTestId('products-table');
        expect(tableElement).toBeInTheDocument();
    })

})  