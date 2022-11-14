import React ,  { useContext} from 'react';
import { Link, useParams } from 'react-router-dom'
import '../../css/repository.css'
import { useAllFetch} from '../../utils/hooks';
import { RepositoriesContext, SelectRepositoryContext } from '../../utils/hooks/context';

function User() {
const params = useParams();
const Url1 = `https://api.github.com/users/${params.ProfileName}`
const Url2 = `https://api.github.com/users/${params.ProfileName}/repos`
const {data ,  isLoading} = useAllFetch(Url1 , Url2);

const {repositories , saveRepositories , Input} = useContext(RepositoriesContext)
const {Repository , saveRepositoryname , isSearch , setIsSearch} = useContext(SelectRepositoryContext);


if(!isLoading && Object.keys(data).length === 0){
    return (<div>Problem with server !</div>)
}
 

    return (
        <div className="contain">
            <div className="contain_repo">
                <div className="repo_profile">
                    <div className="back_repo">
                        <img src={!isLoading ? data[0].data.avatar_url:''} alt=""/>
                    </div>
                    <div className="name_profile">
                        <span> {!isLoading ? data[0].data.name:''}</span>
                        <span>@{!isLoading ? data[0].data.login:''}</span>
                    </div>
                    <div className="profile_follow">
                        <i className="fa fa-user"></i>
                        <span>{!isLoading ? data[0].data.followers:''} followers . {!isLoading ? data[0].data.following:''} following</span>
                    </div>
                </div>
                <div className="repo_git">
                    <div className="search_repo">
                        <input id='search_Repository' onChange={(e) => saveRepositories(e.target.value , data[1].data)} placeholder="Search Repository ..." type="text"/>
                    </div>
                    <div id='search_lists_repo' className="search_lists_repo">
                        {
                            repositories !== '[]' && Input !== '' ? (

                                repositories.map((repository , index) =>(
                                    <Link onClick={() =>saveRepositoryname(repository)} className="found_lists_repo" key={`${index}`}>
                                        <span>{repository.full_name}</span>
                                    </Link>
                                ))
                              
                            ):null
                        }
                    </div>

                    <div className="list_repositories">
                        {
                            isLoading ? (
                                <div>A Moment please ...</div>
                            ):(

                                !isSearch ? (
                                    data[1].data.map((repository , index) =>(
                                        <div className="repositories" key={`${index}`}>
                                            <div className="detail_repositories">
                                                <span>{repository.full_name}</span>
                                                <span>{repository.visibility}</span>
                                            </div>
                                            <div className="skill_repositories">
                                                <span>{repository.language}</span>
                                                <span>Updated at {format_date(repository.updated_at)}</span>
                                            </div>
                                        </div>
                                    ))
                                ):(
                                    <>
                                        <div className="repositories" key={`${Repository.id}`}>
                                            <div className="detail_repositories">
                                                <span>{Repository.full_name}</span>
                                                <span>{Repository.visibility}</span>
                                            </div>
                                            <div className="skill_repositories">
                                                <span>{Repository.language}</span>
                                                <span>Updated at {format_date(Repository.updated_at)}</span>
                                            </div>
                                        </div>
                                        <div className='search_repo'>
                                            <button onClick={() => setIsSearch(false)}>back</button>
                                        </div>
                                    </>
                                )      
                            )
                        }    
                    </div>
                </div>
            </div>
        </div>
    )
}

export function format_date(value){
    var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var d = new Date(value);
    var monthName=months[d.getMonth()]
    return d.getDate() + ' ' + monthName + ' '+ d.getFullYear() + ' '+d.getHours() + ':' + d.getMinutes();
}

export default User