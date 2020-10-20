import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import PostList from './components/PostList'
import asyncComponent from './hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('./components/PostForm');
})

class Blog extends Component {
    state = {
        auth: true
    }
    render() {
        return (
            <div className="Blog">  
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                            to={{
                                pathname:'/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                            {/* <li></li> */}
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ? <Route path ="/new-post" component={AsyncNewPost}/>:null}
                    <Route path="/" component={PostList} />
                    <Route render={() => <h1>Not found</h1>} />
                </Switch>
            </div>
        )
    }
}

export default Blog
