import { MemoryRouter } from "react-router-dom"
import { SelectUserProvider, UsersProvider } from "../hooks/context"
import { render as rtlRender } from '@testing-library/react'


function Wrapper({ children }) {
    return (
        <MemoryRouter>
            <UsersProvider>
                <SelectUserProvider> {children} </SelectUserProvider>   
            </UsersProvider>
        </MemoryRouter>
    )
}
 
export function render(ui) {
    rtlRender(ui, { wrapper: Wrapper })
}