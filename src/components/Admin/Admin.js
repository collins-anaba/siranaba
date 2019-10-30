import React, { Component} from "react";
import axios from 'axios';


export default class Admin extends Component {
constructor(){
    super()
    this.state = {
            newsArticle : '',
            newsImage:'',
            reviewsArticle: '',
            reviewsImage: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit1 = this.onSubmit1.bind(this);
    this.onSubmit2 = this.onSubmit2.bind(this);

}
handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


delete(id) {
    let newsArticle 
}

addArticle(e){
    const {newsArticle,newsImage,reviewsArticle,reviewsImage}= this.state;
axios.post(`/api/news/`, {newsArticle,newsImage,reviewsArticle,reviewsImage}).then(res => {
    this.props.history.push('/')
}).catch(err => console.log(err))
}

onSubmit1 (e){
    const newNewsArticle = {
        newsArticle: this.refs.newsArticle.value,
        newImage: this.refs.newsImage.value
    }
    this.addNewsArticle(newNewsArticle);
    e.preventDefault();
}

onSubmit2 (e){
    console.log('alert')
    const newReviewsArticle = {
        reviewsArticle: this.refs.reviewsArticle.value,
        reviewImage: this.refs.reviewImage.value
    }
    this.addArticle(newReviewsArticle);
    e.preventDefault();
}

render () {
    return (
         <div>
             <form onSubmit1={this.onSubmit1.bind(this)}>
                 <div className='input-field-newsImage'>
                     <input type='image' name='newImage' ref='newsImage'/>
                     <label htmlFor='newsImage'/>
                 </div>
                 <div className='input-field-newsCaption'>
                     <input type='text' name='newsArticle' ref='newsArticle'/>
                     <label htmlFor='text'/>
                     <button onClick={this.addArticle}>Add news article</button>
                 </div>
             </form>
                 <br/>
             <form onSubmit2={this.onSubmit1.bind(this)}>
                 <div className='input-field-reviewsImage'>
                     <input type='image' name='image' ref='news'/>
                     <label htmlFor='image'/>
                 </div>
                 <div className='input-field-reviewsCaption'>
                     <input type='text' name='news' ref='news'/>
                     <label htmlFor='text'/>
                     <button onClick={this.addArticle}>Add review article</button>
                 </div>
             </form>


             <button className="edit-article-button" onClick={() => {this.setState({ showEdit: !this.state.showEdit }); }}>Edit</button>
             
             {/* <button className='delete-article-button' onClick={this.onDelete.bind(this)}>Delete</button> */}
         </div>
    )
}
}