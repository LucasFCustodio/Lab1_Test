import './App.css';
import Calendar from './components/Calendar';

const App = () => {

  return (
    <div className="App">
      <h1>7 days in Brazil</h1>
      <h2>
        There's a lot of people to see, and a lot of things to do. Make sure to plan them all
      </h2>
      <Calendar />
    </div>
  )
}

export default App