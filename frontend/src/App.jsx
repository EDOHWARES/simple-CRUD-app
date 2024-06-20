import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Student from './component/Student';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateStudent from './component/CreateStudent';
import UpdateStudent from './component/UpdateStudent';

function App() {

  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Student />} />
          <Route path='/create' element={<CreateStudent />} />
          <Route path='/update/:id' element={<UpdateStudent />} />
          <Route path='/delete' />
        </Routes>
      </BrowserRouter>
    </section>
  )
}

export default App
