import {fireEvent, render as renderHome , screen} from '@testing-library/react';
import Home from '../Home'
import {MemoryRouter} from "react-router-dom";
import {logout} from '../Home'
import { SelectUserProvider, UsersProvider } from '../../utils/hooks/context';


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => (jest.fn()),
    useParams:()=>({ }),
    useRouteMatch:()=>({ url: '/home' })
}));

describe('Home' , () =>{
    test('Should render without crash' , async ()=>{
        renderHome(
            <MemoryRouter>
                <UsersProvider>
                    <SelectUserProvider>
                        <Home/> 
                    </SelectUserProvider>
                </UsersProvider>
            </MemoryRouter>
        );

        expect(screen.getByTestId('git')).toBeTruthy()
        const log = screen.getByText('Logout');
        expect(logout()).toBe(localStorage.clear());
        fireEvent.click(log);
        expect(log).toBeTruthy();
    })
})
