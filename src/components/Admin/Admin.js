import React, { Component} from "react";
import axios from 'axios';


export default class Admin extends Component {
constructor(){
    super()
    this.state = {
        article: {},
            newsArticle : '',
            newsImage:'',
            reviewsArticle: '',
            reviewsImage: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
}
handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

getNewsArticle(){
    let newsArticle = this.props.match.params.id;
    axios.get()
}

delete(id) {
    let newsArticle 
}

addNewsArticle(newNewsArticle){
axios.post(`/api/news/`, {news}).then(res => {
    this.props.history.push('/')
}).catch(err => console.log(err))
}

onSubmit (e){
    const newNewsArticle = {
        newsArticle: this.refs.newsArticle.value,
        newImage: this.refs.newsImage.value
    }
    this.addNewsArticle(newNewsArticle);
    e.preventDefault();
}

render () {
    return (
         <div>
             <form onSubmit={this.onSubmit.bind(this)}>
                 <div className='input-field-newsImage'>
                     <input type='image' name='newImage' ref='newsImage'/>
                     <label htmlFor='newsImage'/>
                 </div>
                 <div className='input-field-newsCaption'>
                     <input type='text' name='newsArticle' ref='newsArticle'/>
                     <label htmlFor='text'/>
                     <button type='submit' value='add'>Add news article</button>
                 </div>
                 <br/>
                 <div className='input-field-reviewsImage'>
                     <input type='image' name='image' ref='news'/>
                     <label htmlFor='image'/>
                 </div>
                 <div className='input-field-reviewsCaption'>
                     <input type='text' name='news' ref='news'/>
                     <label htmlFor='text'/>
                     <button type='submit' value='add'>Add review article</button>
                 </div>
             </form>


             <button className="edit-article-button" onClick={() => {this.setState({ showEdit: !this.state.showEdit }); }}>Edit</button>
             
             <button className='delete-article-button' onClick={this.onDelete.bind(this)}>Delete</button>
         </div>
    )
}
}