import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ExercisesList extends Component {

    constructor(props) {
        super();

        this.deleteExercise = this.deleteExercise.bind(this);


        this.state = {

            exercises: []
        }

    }

    componentDidMount(){
        axios.get('http://localhost:5000/exercises/')
            .then(response => {
                this.setState({ exercises: response.data })
            })
            .catch((err) =>{
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <p>You are in the ExerciseList Component</p>
            </div>
        );
    }
}
