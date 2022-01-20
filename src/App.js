import laptop from './Assets/laptop.jpeg';
import {Signup} from './Components/SignUp/Signup';
import { TextField} from './Components/SignUp/TextField'
function App() {
  return (
    <div className="container mt-3">
      <div className="row ">
        <div className="col-md-6">
            <img className="img-fluid w-100" src={laptop}/>
        </div>
        <div className="col-md-6">
            <Signup />

        </div>
        

      </div>
    </div>
  );
}

export default App;
