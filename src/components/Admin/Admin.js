import React, { Component} from "react";
import axios from 'axios';


export default class Admin extends Component {
constructor(){
    super()
    this.state = {
            article: [],
            newsArticle : '',
            newsImage:'',
            reviewsArticle: '',
            reviewsImage: '',
            articleParam: ''
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

handleSubmit() {
    axios
      .put(`/api/reviews/${this.state.articleParam}`, {
        reviewsImage: this.state.reviewsImage,
        newsImage: this.state.newsImage,
        newsArticle: this.state.newsArticle,
        newsImage: this.state.newsImage        
      })
      .then(res => {
        this.setState({
          article: res.data
        });
      });
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
              <br/>
              <br/>
              <br/>

             <br/>
         <h1>Admin Page</h1>
         {/* add article  */}
             <form onSubmit1={this.onSubmit1.bind(this)}>
                 <div className='input-field-newsImage'>
                     <input type='file' name='newImage' ref='newsImage'/>
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
                     <input type='file' name='image' ref='news'/>
                     <label htmlFor='image'/>
                 </div>
                 <div className='input-field-reviewsCaption'>
                     <input type='text' name='news' ref='news'/>
                     <label htmlFor='text'/>
                     <button onClick={this.addArticle}>Add review article</button>
                 </div>
             </form>
            <br/>
            {/* edit articles */}
            <button className="edit-news-button" onClick={() => {this.setState({ showEdit: !this.state.showEdit }); }}>Edit News/Reviews</button>
            <div>{this.state.showEdit === true?(
                <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Change News Post</h2>
                    <input placeholder='News Image'type='file' name='newsImage' value={this.state.newsImage} onChange={this.handleSubmit}/>
                    <br/>
                    <input placeholder='News Article' type='text' name='newsArticle' value={this.state.newsParam} onChange={this.handleSubmit}/>
                    <button>Save Changes</button>
                    <br/>
                    <h2>Change Review Post</h2>
                    <input placeholder='Reviews Image'type='file' name='reviewsImage' value={this.state.reviewsImage} onChange={this.handleSubmit}/>
                    <br/>
                    <input placeholder='Reviews Article' type='text' name='reviewsArticle' value={this.state.reviewsArticle} onChange={this.handleSubmit}/>
                    <button>Save Changes</button>
                </form>
                </div>
            ): (
                <div>

                </div>
            )}
            </div>
              <br/>    
            <button className='delete-article-button' onClick={this.onDelete}>Delete </button>
         </div>
    )
}
}