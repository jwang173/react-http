import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            errorMsg: ''
        };
    }

    componentDidMount() {
        console.log(this.props);
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMsg: 'Error retreiving data'})
        })
        
    }

    async DeletePost(id) {
        let post = {};
        let postList = [];
        // let postData = [];
        // let post1 = {};
        await axios.delete('https://jsonplaceholder.typicode.com/posts/'+id)
        post = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
        postList =await axios.get('https://jsonplaceholder.typicode.com/posts/');
        // post = await postList[id]
        // postList = await postList.push(item => {
        //     return item.id !== id
        // })
        console.log(post);
        console.log(postList)
        this.setState({
            posts: postList
        })
        // console.log(post1);
        // .then(response => {
        //     console.log(response)
        //     // this.setState({posts: response.data})
        // })
        // .catch(error => {
        //     console.log(error)
        //     this.setState({errorMsg: 'Error retreiving data'})
        // })
    }

    render() {
        const { posts, errorMsg } = this.state;
        return (
            <div>
              List of posts
              <table>
                  <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                        {/* <th>operate</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {
                        posts.length ?
                        posts.map(post =>
                        
                            <tr key={post.id}>
                                <td>{post.userId}</td>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                                <td><button onClick={() => this.DeletePost(post.id)}>delete</button></td>
                            </tr>
                            
                        )
                        :
                        null
                    }
                  </tbody>  
              </table>
              {/* {
                  posts.length ?
                  posts.map(post => <div key={post.id}>{post.title}</div>):
                  null
              }  */}
              { errorMsg ? <div>{errorMsg}</div> : null}
            </div>
        )
    }
}

export default PostList;
