import React, {Component} from 'react';


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

    componentDidMount
render(){
    return (
        <div>
                <img className="articleImage" src= '' alt="nike" />
                <h2></h2>
        </div>
    )
}
}