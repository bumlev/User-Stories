import  { format_date } from "./user";
import {render} from '@testing-library/react'
import { MemoryRouter } from "react-router-dom";
import { RepositoriesProvider, SelectRepositoryProvider } from "../../utils/hooks/context";
import User  from '../Users/user'


describe('function format_date' , () =>{
    test('should be in that format' , () =>{
        const expectedDate = '5 August 2022 18:13';
        expect(format_date(`2022-08-06T02:13:22Z`)).toEqual(expectedDate)
    })
})



jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams:()=>({
        ProfileName:"mojombo"
    }),
    useRouteMatch:()=>({ url: '/profile/mojombo' })
}));

describe('User' , () =>{
    test('Should render without crash' , async ()=>{
        render(
            <MemoryRouter>
                <RepositoriesProvider>
                    <SelectRepositoryProvider>
                        <User/> 
                    </SelectRepositoryProvider>
                </RepositoriesProvider>
            </MemoryRouter>
        )
    })
})