import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    const myStyle={
        minHeight:"70vh",
        margin:"10px auto"
    }
    return (
        <div className="container my-3" style={myStyle}>
            <h3 className="">Todos List</h3>
            {props.todos.length === 0 ? "No todos to diplay" :
                    props.todos.map((todo) => {
                        return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                    })
                }

        </div>
    )
}
