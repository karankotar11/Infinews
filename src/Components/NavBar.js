import React,{useState} from 'react';
// import {useState} from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'; 



const NavBar =()=> {
  
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Search Query:', searchQuery);
    // You can perform additional actions like fetching data here
  };

  

    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark px-3">
          <h1 style={{fontSize:'23px'}} className="navbar-brand " >InfiNews
          {/* <span className={`badge position-absolute top-3 translate-middle rounded-pill bg-primary`} style={{height:'15px',width:'20px',fontSize:'10px'}}> 
                 k</span> */}
                  </h1>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"><NavLink className="nav-link" to="/home">Home </NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/business">Business</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/entertainment">Entertainment</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/general">General</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/health">Health</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/science">Science</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/sports">Sports</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/technology">Technology</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>


            </ul>
            <form className="form-inline" onSubmit={handleSearchSubmit}>
                 <input className="form-control text-dark mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={searchQuery}
              onChange={handleSearchInputChange} />
                <button className="btn btn-outline-success bg-dark text-light my-2 my-sm-0" type='submit'>Search</button>
            </form>
          </div>
        </nav>
      </div>
    )
 
}

export default NavBar
