import './App.css'
import TitleBar from './components/TitleBar'

let gFilter = 'All'

const App = () => {

  return (
    <div className='header'>
      <TitleBar gButton={gFilter} />
    </div>

  )
}

export default App
