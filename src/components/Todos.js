import React, {Component} from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {

    // markComplete = () => {
    //     console.log('Hello')
    // }



    render() { 
        return(
            this.props.todos.map( 
                (todo) => ( <TodoItem key={todo.id}  todo={todo} delTodo={this.props.delTodo} markComplete={this.props.markComplete} /> )
            )
        );
    }
}

export default Todos;