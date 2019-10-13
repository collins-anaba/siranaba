import React, {Component} from 'react';


export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            image: '',
            caption: '',


        }
    }
render(){
    return (
        <div>
                <img className="articleImage" src= '' alt="nike" />
                
        </div>
    )
}
}