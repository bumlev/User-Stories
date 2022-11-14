import React ,  { useContext, useEffect} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../../css/home.css'
import { SelectRepositoryContext } from '../../utils/hooks/context';
import Users from '../Users';
import User from '../Users/user';

export function logout(){
    localStorage.clear();
}

function goHome(){
    navigate(`/home`);
}


function Home(){

    const params = useParams()
    const navigate = useNavigate();
    useEffect(() =>{
        if(!localStorage.getItem('data'))
            navigate('/');
    })

    const{isSearch ,  setIsSearch} = useContext(SelectRepositoryContext);

    if(isSearch)
        goHome();

    return (
        <>
            <nav>
                <ul className="list_menu">
                    <li className="Name_project">
                        <Link onClick={()=>setIsSearch(false)}>
                            <i className="fa fa-github"></i>
                            <span data-testid="git">GitHub API</span>
                        </Link>
                    </li>
                    <li  className="logout"><a data-testid="logout" onClick={() =>logout()} href='#.html'>Logout</a></li>
                </ul>
            </nav>
            {
                !params.ProfileName && !params.repositoryname ? (
                    <Users/>
                ):(
                    <User/>
                )
            }   
        </>   
    )
}

export default Home;