import { renderWithProviders } from "../utils/render";
import { findAllByTestId, findByTestId, within } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import {BrowserRouter} from 'react-router-dom';
import Dashboard from "../../pages/Dashboard";
import { Provider } from 'react-redux';
import store from '../../app/store'
import App from '../../App'

describe('test dashboad', () => {
    test('snapshot test', () => {
        // const component = render(
        // <Provider store={store}>
        //     {/* <App /> */}
        //     <BrowserRouter>
        //     <Dashboard />
        //     </BrowserRouter>
        // </Provider>
        // );
        
        const component = renderWithProviders(<Dashboard />)

        expect(component).toMatchSnapshot();
    });

    test('if Dashboard page contains Child element', async() => {
        // const {getByText, getByRole, getByTestId} = renderWithProviders(<Dashboard />)
        // const child = getByTestId('goals');
        // const parent = getByTestId('dashboard');
        const {container} = await renderWithProviders(<Dashboard />);
        const dashboad = container.getElementsByClassName('dashboard');
        expect(dashboad).toBeDefined()
    })
})