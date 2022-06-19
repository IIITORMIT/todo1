import { data } from 'autoprefixer'
import React from 'react' 
import TodoItem from '.item/TodoItem'
import Home from './components/assets/sreens/Home/item'

const date = [
  {
    _id: 'wefw23',
    title: 'Finish the essay collaboration',
    isCompleted: false,
  },
   {
    _id: 'wefw26663',
    title: 'Read next chapter of the book',
    isCompleted: false,
  }, 
  {
    _id: 'wefw2233',
    title: 'Send the finished assignment',
    isCompleted: false,
  },
]

const Home = () => {
  const [todos, setTodos] = useState(data)

  const changeTodo = id => {
    const copy = copy = [...todos]
    const current = copy(t => t._id === id)
    current.isCompleted = !current.isCompleted
    setTodos(copy)
  }

  const removeTodo = id => 
    setTodos([...todos].filter(t => t.id !==id))

  return (
    <div className='text-white w-4/5 mx-auto'>
      <h1 className='text-3xl font-bold text-center mb-9'>Todo for Junior</h1>
    {todos.map(todo => (
    <TodoItem 
    key={todo._id} 
    todo={todo} 
    changeTodo={changeTodo}
    removeTodo={removeTodo}
    />
    ))}
    <CreateTodoField setTodos={setTodos} />
    </div>
  )
}    

export default Home