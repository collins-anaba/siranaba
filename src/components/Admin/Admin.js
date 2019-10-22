import React, { Component} from "react";
import axios from 'axios';


export default class Admin extends Component {
constructor(){
    super()
    this.state = {
        article: [],
        news: { 
            newsArticle : '',
            newsImage:'',
        },
        reviews: {
            reviewsArticle: '',
            reviewsImage: ''
        }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
}
handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

handleSubmit (){
    axios.put('/api/news/${this.state.news}', {
        newsArticle: this.state.newsArticle,
        newsImage: this.state.newsImage,
        reviewsArticle: this.state.news.reviewsArticle,
        reviewsImage: this.state.reviewsArticle
    }
    ).then(res => {
        this.setState({
article: res.data
        });
    });
}

render () {
    return (
         <div>
             <button>Add</button>
             <button>Edit</button>
             <button>Delete</button>
         </div>
    )
}
}