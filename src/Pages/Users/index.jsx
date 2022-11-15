import React ,  { useContext} from 'react';
import { Link} from 'react-router-dom'
import '../../css/users.css'
import { useFetch } from '../../utils/hooks'
import { SelectUserContext, UsersContext } from '../../utils/hooks/context';

function Users(){
    
    //let prms = useParams();
    const {data , isLoading} = useFetch('https://api.github.com/users');
    const {users , saveUsers , Input} = useContext(UsersContext)
    const { User , saveUsername , isSearch  ,setIsSearch} = useContext(SelectUserContext)

  
    if(!isLoading && Object.keys(data).length === 0){
        return(<div>Problem with server !</div>)
    }
  
 
    return(
            <div id="contain" className="contain">
                <div>
                    <div className="search_block">
                        <input id='searchUser' onChange={(e) =>saveUsers(e.target.value , data)}  placeholder="Search User ..." type="text"/>
                        <button>Search</button>
                    </div>
                    <div id='search_lists' className="search_lists">
                        {
                            users !== '[]' && Input !== '' ? (
                                users.map((user , index) =>(
                                    <Link onClick={() => saveUsername(user)} id='found_lists' className="found_lists" key={`${index}`}>
                                        <img src={user.avatar_url} alt=""/>
                                        <span>{user.login}</span>
                                    </Link>
                                ))
                            ):null       
                        }
                    </div>
                    <div className="list_cards">
                        {   
                            isSearch === false ? (
                                isLoading ?(
                                    <div data-testid="loader">A Moment please ...</div>
                                ):(
                                    data.map((user , index) => (
                                        <div className="cards" key={`${user.login}-${index}`}>
                                            <img src={user.avatar_url} alt=""/>
                                            <div className="card_profile">
                                                <span>{user.login}</span>
                                                <Link to={`/profile/${user.login}`}>View Profile</Link>
                                            </div>
                                        </div>  
                                    ))
                                )
                            ):(
                                <>
                                    <div className="cards" key={`${User.login}-${User.id}`}>
                                        <img src={User.avatar_url} alt=""/>
                                        <div className="card_profile">
                                            <span>{User.login}</span>
                                            <Link to={`/profile/${User.login}`}>View Profile</Link>
                                        </div>
                                    </div>
                                    <div className="search_block">
                                        <button className='button_back' onClick={() => setIsSearch(false)}>Back</button>
                                    </div> 
                                </> 
                            )
                        } 
                    </div>
                </div>
            </div>
    )
}

export default Users