import{ BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Header from './components/Header';

export default function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<><Header/><Home/></>}/>
          {/* <Route path='/' element={<Home/>}/> */}
        </Routes>
      </Router>
    </div>
  )
}
