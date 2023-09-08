import classes from './App.module.scss'

function App() {
  return (
    <div className={[classes.App, classes.wrapper].join(' ')}>
      <header className="App-header">Hello world</header>
    </div>
  )
}

export default App
