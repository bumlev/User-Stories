import React , { useState , createContext} from "react";

export const UsersContext = createContext();
export const UsersProvider = ({ children }) =>{
    const [users , setUsers] = useState([]);
    const [Input , setInput] = useState('')

    const saveUsers = (inpt , usrs) =>{
        setInput(inpt);
        document.getElementById('search_lists').style.display='flex';

        // Searching user ... with users
        let list_users = usrs.filter((element) => {
            return element.login.substring(0, inpt.length) === inpt
        })

        setUsers(list_users)
    }
    return(
        <UsersContext.Provider value= {{users , saveUsers  , Input}}>
            {children}
        </UsersContext.Provider>
    )
}


export const SelectUserContext = createContext();
export const SelectUserProvider = ({children}) =>{
    const [User , setUsername] = useState('')
    const [isSearch , setIsSearch] = useState(false)

    const saveUsername = (user) =>{    
        setUsername(user)
        document.getElementById('searchUser').value=user.login;
        document.getElementById('search_lists').style.display='none';
        setIsSearch(true);
    }
    return(
        <SelectUserContext.Provider value={{User , saveUsername , isSearch , setIsSearch}}>
            {children}
        </SelectUserContext.Provider>
    )
}


export const RepositoriesContext = createContext();
export const RepositoriesProvider = ({children}) =>{
    const [repositories , setRepositories] = useState([]);
    const [Input , setInput] = useState('');

    const saveRepositories = (inpt , repositories) =>{
        setInput(inpt);
        document.getElementById('search_lists_repo').style.display='flex';

        // Searching repository ... with repositories
        let list_repositories = repositories.filter((element) => {
            return element.name.substring(0, inpt.length) === inpt
        })

        setRepositories(list_repositories)
    }

    return(
        <RepositoriesContext.Provider value= {{repositories , saveRepositories , Input}}>
            {children}
        </RepositoriesContext.Provider>
    )

}

export const SelectRepositoryContext = createContext();
export const SelectRepositoryProvider = ({children}) =>{
    const [Repository , setRepositoryname] = useState('')
    const [isSearch , setIsSearch] = useState(false)

    const saveRepositoryname = (repository) =>{     
        setRepositoryname(repository)
        document.getElementById('search_Repository').value = repository.name;
        document.getElementById('search_lists_repo').style.display='none';
        setIsSearch(true);
    }

    return(
        <SelectRepositoryContext.Provider value={{Repository , saveRepositoryname , isSearch , setIsSearch}}>
            {children}
        </SelectRepositoryContext.Provider>
    )

}



