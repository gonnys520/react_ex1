import React, {Component} from 'react'

class TodoList extends Component{

    removeHandler = (e) => {
        console.log('removeHandler')
        const target = e.target
        console.log(target.getAttribute("data-idx"))
        this.props.remove(target.getAttribute("data-idx"))

    }


    render() {

        const todoLi = this.props.arr.map( (item, index) =>
            <li key={index}>{item} <button data-idx={index} onClick={this.removeHandler}>X</button> </li>)

        return(
            <div>
                {todoLi}
            </div>
        )
    }
}
export default TodoList