import React from 'react'

const About =()=> {

       
  
        return (
            <div>
                
                
                <center>
               
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{ width: '1200px',height:'600px', backgroundColor: "grey" }}>
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li><br />
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner ">
                            <div className="carousel-item active">
                                <img className="d-block w-80" style={{ height: '600px', width: '1200px' , objectFit:'cover'}} src="https://media.istockphoto.com/id/1311991091/photo/tree-hugging-love-nature-child-hug-the-trunk-with-red-heart-shape.jpg?s=1024x1024&w=is&k=20&c=y3iwB80cvZRKrkrRIU8q_vnJaml3HqM1HRCcYAjPqvQ=" />
                                <div className="carousel-caption d-none d-md-block my-2">
                                    <h5 style={{color:'green'}}>Save Environment</h5>
                                    <p style={{color:'black'}}>Save the Environment: Read News Online, Not on Paper!"</p>
                                </div>
                            </div>
                          
                            <div className="carousel-item">
                                <img className="d-block w-80" style={{ height: '600px', width: '1200px' }} src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sad-news-template-design-57c0f84051f5e227ba08f1bfb6668374_screen.jpg?ts=1687780848https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&h=900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-80" style={{ height: '600px', width: '1200px' }} src="https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Third slide" />
                                <div className="carousel-caption d-none d-md-block my-2">
                                    <h5 style={{color:'red'}}>Why buy newspaper? </h5>
                                    <p style={{color:'black'}}>Ditch the paper and stay informed for free on our website.</p>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </center>


                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                    Launch demo modal
                </button>

              
                <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
           
        )

}

export default About
