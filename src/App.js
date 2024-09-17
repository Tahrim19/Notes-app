import{ BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Header from './components/Header';
import Editor from './components/Editor';


export default function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<><Header/><Home/></>}/>
          <Route path='/editor' element={<><Header/><Editor/></>}/>
        </Routes>
      </Router>
    </div>
  )
}
