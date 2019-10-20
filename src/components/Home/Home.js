import React, {Component} from 'react';
import axios from 'axios';


export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            image: '',
            caption: '',
            category: ''


        }
    }

    componentDidMount(){
        axios.get('/api/news').then(response => {
            this.setState ({news: response.data})
        })
        axios.get('/api/')
    }
render(){
    const {image, caption, category} = this.state
    return (
        <div>
                <img className="articleImage" src= '' alt="nike" />
                <h2></h2>
        </div>
    )
}
}