import{ BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Home from './components/Home';

export default function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}
