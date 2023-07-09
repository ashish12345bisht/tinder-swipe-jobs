import './App.css';
import { useSelector } from 'react-redux'
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Applied from './pages/Applied';
import Rejected from './pages/Rejected';



function App() {
  const { jobs, appliedJobs, rejectedJobs } = useSelector(state => state.jobsSlice);
  return (
    <div>
      <HashRouter>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h1><Link to="/" className='cursor-pointer'>Home</Link> &nbsp;  | &nbsp;  </h1>
          <h1><Link to="/applied" className='cursor-pointer'>Applied Jobs: {appliedJobs?.length} &nbsp;  | &nbsp;  </Link></h1>
          <h1><Link to="/rejected" className='cursor-pointer'>Rejected Jobs: {rejectedJobs?.length}</Link></h1>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/applied' element={<Applied />} />
          <Route path='/rejected' element={<Rejected />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
