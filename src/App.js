import React,{useState} from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import { BrowserRouter as Router, Route, Routes
 } from 'react-router-dom';
import About from './Components/About';
import LoadingBar from 'react-top-loading-bar';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

// import Spinner from './Components/Spinner'

const App =()=> { 
  //apikKey="c2121bf0afa44bbeaa5b9aa4ff99cd4d";
  const apikKey="4b7e3ca417dc4363907c58a5ea84e703";
  //apikKey="917709e4e02340ab8ab664629c3f49d6";
  const tot_page=12;
  

  const [progress, setProgress] = useState(10);

  
    return (
      <Router>
        <div>
        <LoadingBar
        color='#f11946'
       
        progress={progress}/>
          
          <NavBar/>
        
           
            <Routes>
               <Route exact path="/home" element={ <News setProgress={setProgress}  pagesize={tot_page} key="general" country="in" apikey={apikKey} category='general'/>}/>
                
               
               <Route exact path="/business" element={  <News setProgress={setProgress}  pagesize={tot_page} key="business" country="in" apikey={apikKey} category='business'/>}/>
                
              
            
               <Route exact path="/entertainment" element={ <News setProgress={setProgress}  pagesize={tot_page} key="entertainment" country="in" apikey={apikKey} category='entertainment'/>}/>
                 
              
               <Route exact path="/general" element={<News setProgress={setProgress}  pagesize={tot_page} key="general" country="in" apikey={apikKey} category='general'/>}/>
                  
              
               <Route exact path="/health" element={<News setProgress={setProgress}  pagesize={tot_page} key="health" country="in" apikey={apikKey} category='health'/>}/>
                  
            
               <Route exact path="/science" element={<News setProgress={setProgress}  pagesize={tot_page} key="science" country="in" apikey= {apikKey} category='science'/>}/>
                  
             
               <Route exact path="/sports" element={ <News setProgress={setProgress}  pagesize={tot_page} key="sports" country="in" apikey= {apikKey} category='sports'/>}/>
                
               
               <Route exact path="/technology" element={ <News setProgress={setProgress}  pagesize={tot_page} key="technology" country="in" apikey={apikKey} category='technology'/>}/>

            
               <Route exact path="/about" element={ <About key='about' />}/>
               <Route exact path="/contact" element={ <Contact key='about' setProgress={setProgress} />}/>
              setProgress(0);
            </Routes>
       
        {/* <Spinner/> */}
        <Footer/>
      </div>
      </Router>
      
      
    );
 
}

export default App
