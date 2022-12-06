import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Dashboard from '../pages/Dashboard';
import GoalForm from '../components/GoalForm';
import App from '../App';
import { act } from 'react-dom/test-utils';

test('renders learn react link', async () => {
  await act( async() => {
    render(
        <Provider store={store}>
            <App />
            <BrowserRouter>
                <GoalForm />
            </BrowserRouter>
        </Provider>
        );

    // const goalButton = await screen.getByRole('');
    // const goalButton = await screen.getByRole('button');
    // await waitFor(() => expect(screen.getByRole('button')));
    // await expect(goalButton).toBeVisible();
    // await expect(goalButton).toBeVisible();
  });
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
});

// test("dashboard must be rendered", () => {
//     render(
//         <Provider store={store}>
//             <Dashboard />
//         </Provider>
//     );
//     const goalButton = screen.getByRole('button');
//     expect(goalButton).toBeVisible();
// });