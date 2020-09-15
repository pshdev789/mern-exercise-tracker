import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Router } from 'react-router-dom';

import NavBar from "./components/navbar.component";
import ExerciseList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component"


function App() {
  return (
    <Router>
      <NavBar/>
      <br/>
      <Route path="/" exact component={ExerciseList} />
      <Route path="/edit/:id" exact component={EditExercise} />
      <Route path="/create" exact component={CreateExercise} />
      <Route path="/user" exact component={CreateUser} />
      {/* <Route path="/" exact component={DeleteExercise} /> */}
      
    </Router>
  );
}

export default App;
