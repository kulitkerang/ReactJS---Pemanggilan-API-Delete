import React, { Component, Fragment } from 'react';
import Post from '../../component/Post/Post';
import './Blogpost.css';

class Blogpost extends Component {
    state = {
        post: []
    }

    getPostAPI = () => {
        fetch('http://localhost:3004/posts')
        .then(response => response.json())
        .then(json => {
            this.setState({
                post:json
            })
        })
    }

    handleRemove = (data) => {
    fetch("http://localhost:3004/posts/" + data, {
      method: "DELETE",
    })
      .then((respon) => respon.json())
      .then((ra) => {
        console.log(ra);
        this.componentDidMount();
      })
      .catch((err) => {
        console.log(err);
      });
    }

    componentDidMount(){
        this.getPostAPI();
    }

    render(){
        return(
            <Fragment>
                <p className="section-title">Blogpost</p>
                {
                    this.state.post.map(post => {
                       return <Post key={post.id} data={post} remove={this.handleRemove} />
                    })
                }
            </Fragment>
        )
    }
}

export default Blogpost;