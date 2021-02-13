import React from 'react';

const Pager = (props) => {


    const { postperAction, totalPosts } = props
    //Empty Array
    var pagination = [];


    for (let i = 1; i <= Math.ceil(totalPosts / postperAction); i++) {
        pagination.push(i)
    }

    return (<>
        <nav >
            <ul className="pagination">
                {
                    pagination.map((res, index) => {
                        return (<li className="page-item" key={index}>
                            <a
                                class="page-link"
                                href="#"
                                onClick={() => props.paginate(res)}
                            >
                                {res}
                            </a>
                        </li>)
                    })
                }

            </ul>
        </nav>

    </>);
};

export default Pager;