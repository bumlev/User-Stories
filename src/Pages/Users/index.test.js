import Users from '../Users'
import {render , waitFor , screen , waitForElementToBeRemoved} from '@testing-library/react'
import { MemoryRouter } from "react-router-dom";
import {SelectUserProvider, UsersProvider } from "../../utils/hooks/context";
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import React from 'react';
const UsersData = [
    {login:"mojombo" , avatar_url:"https://avatars.githubusercontent.com/u/1?v=4"},
]

const server = setupServer(
    // On précise ici l'url qu'il faudra "intercepter"
    rest.get('https://api.github.com/users', (req, res, ctx) => {

        // Là on va pouvoir passer les datas mockées dans ce qui est retourné en json
        return res(ctx.json(UsersData))

    })
)

// Active la simulation d'API avant les tests depuis server
beforeAll(() => server.listen())

// Réinitialise tout ce qu'on aurait pu ajouter en termes de durée pour nos tests avant chaque test
afterEach(() => server.resetHandlers())

// Ferme la simulation d'API une fois que les tests sont finis
afterAll(() => server.close())

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams:()=>({
    }),
    useRouteMatch:()=>({ url: '/home' })
}));



    test('Should render without crash' , async ()=>{
        render(
            <MemoryRouter>
                <UsersProvider>
                    <SelectUserProvider>
                            <Users/> 
                    </SelectUserProvider>
                </UsersProvider>
            </MemoryRouter>
        )
        await waitForElementToBeRemoved(() =>screen.queryByTestId('loader'))
        await waitFor(() => {
            expect(screen.getByText('mojombo')).toBeTruthy();
        })
    })