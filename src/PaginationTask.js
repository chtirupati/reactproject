import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

import Pager from './Pager.js';

const url = "https://jsonplaceholder.typicode.com/posts";

const PaginationTask = (props) => {
    //State management
    const [Posts, setPosts] = useState([]);


    //Max-Post per Action into view
    const [postperAction, setpostperAction] = useState(10);

     //BY Default button-1 activated with first record to display first  1-10 posts
     const [currentpage, setcurrentpage] = useState(1);


     const indexOfLastPost=currentpage*postperAction// 1*10-> 10-lastINdexPost
    
    //step-9
    const indexOfFirstPost=indexOfLastPost-postperAction// 10-10->0->FirstIndexPost
    
    //step-9
    const currentPosts=Posts.slice(indexOfFirstPost,indexOfLastPost)//0,10-> -> 0-9




    //RESTAPI_CALLS
    useEffect(() => {
        axios
            .get(url)
        .then((apiresult) => setPosts(apiresult.data))

    }, [])


    //chnage current page activation with pagination numbers....
    const paginate=(no)=>
{  
    setcurrentpage(no);//1,2 3,......Number Seriers.....
}

    return (
        <div className="container py-5">
            <h3 className="text-center">Pagination Task</h3>

            <Pager postperAction={postperAction}
            totalPosts ={Posts.length}
            paginate={ (res)=>paginate(res) }/>

            <div className="row">

                {
                    //Posts.map( (res,index)=>{//step-3}---

                    currentPosts.map((res, index) => {
                        return (
                            <div className="col-lg-4" key={index}>

                                <div className="card my-2">

                                    {/*<img src={res.thumbnailUrl} className="card-img-top" />*/}

                                    <div className="card-body">
                                        <h6 className="card-text">
                                            {res.id}.{res.title}
                                        </h6>

                                        <p className="text-justify">
                                            {res.body}
                                        </p>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default PaginationTask;