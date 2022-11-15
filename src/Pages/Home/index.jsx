import React ,  { useContext, useEffect} from 'react';
import {  Link, useNavigate, useParams } from 'react-router-dom';
import '../../css/home.css'
import { SelectUserContext } from '../../utils/hooks/context';
import Users from '../Users';
import User from '../Users/user';

export function logout(){
    localStorage.clear();
}

function Home(){

    const params = useParams()
    //console.log(params);
    const navigate = useNavigate();

    useEffect(() =>{
        if(!localStorage.getItem('data'))
            navigate('/');
    })

    const{isSearch , setIsSearch} = useContext(SelectUserContext);
   
    console.log(isSearch)

    return (
        <>
            <nav>
                <ul className="list_menu">
                    <li className="Name_project">
                        <Link to={`/home`}>
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