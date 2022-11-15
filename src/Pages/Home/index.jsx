import React ,  { useContext, useEffect} from 'react';
import { BrowserRouter, Link, useNavigate, useParams } from 'react-router-dom';
import '../../css/home.css'
import { SelectRepositoryContext } from '../../utils/hooks/context';
import Users from '../Users';
import User from '../Users/user';

export function logout(){
    localStorage.clear();
}

function Home(){

    const params = useParams()
    console.log(params);
    
    const navigate = useNavigate();
    useEffect(() =>{
        if(!localStorage.getItem('data'))
            navigate('/');
    })

    const{isSearch , setIsSearch} = useContext(SelectRepositoryContext);

    function goHome(){
        //setIsSearch(false);
        console.log('hello');

        useEffect(()=>{
            navigate(`/home`)
        })
    }

    return (
        <>
            <nav>
                <ul className="list_menu">
                    <li className="Name_project">
                        <Link  onClick={()=>goHome()}>
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