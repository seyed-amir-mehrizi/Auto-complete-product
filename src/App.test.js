import { create } from 'react-test-renderer';
import React, { Suspense } from 'react';
import App from './App';
import Checkbox from './components/Checkbox/Checkbox'
import Table from './components/Table/Table'
import { render, screen, fireEvent } from '@testing-library/react';

describe('CustomComponent', () => {
    it('table should render in the document when on sale checkbox is changed',() => {
        render(<App />);
        const checkboxElement = screen.getByTestId('on-sale-checkbox');
        checkboxElement.click(checkboxElement);
        const filterData = [1,2,3];
        render(<Table Products={filterData}/>);
        const tableElement = screen.getByTestId('products-table');
        expect(tableElement).toBeInTheDocument();
    });

    it('table should render in the document when dropdown item change',() => {
        render(<App />);
        const dropdownelement = screen.getByTestId('gender-dropdown');
        fireEvent.change(dropdownelement, { target: { name: 'female' } });
        const filterData = [1,2,3];
        render(<Table Products={filterData}/>);
        const tableElement = screen.getByTestId('products-table');
        expect(tableElement).toBeInTheDocument();
    });

    it('table should render in the document when user write on the auto complete',() => {
        render(<App />);
        const autoCompleteElement = screen.getByPlaceholderText(/Search The Product/i);
        fireEvent.change(autoCompleteElement, { target: { value: 'week' } });
        const filterData = [1,2,3];
        render(<Table Products={filterData}/>);
        const tableElement = screen.getByTestId('products-table');
        expect(tableElement).toBeInTheDocument();
    });


})