import React from 'react'

const NewsItem =(props)=> {
  
    let { title, description, imgurl, newsurl, dateofpublish, author ,source,category} = props;
     let color;
    switch (category) {
      case 'general':
        color='danger';
        break;
      case 'entertainment':
        color='primary';
        break;
      case 'sports':
        color='dark';
        break;
      case 'technology':
        color='info';
        break;
      case 'health':
        color='success';
        break;
      case 'science':
        color='warning';
        break;
      case 'business':
        color='info';
        break;
      default:
        console.log("Unknown category. Please select a valid category.");
    }
    return (
      <div>
        <div style={{display:'flex',
            justifyContent:'flex-end',
            position:'absolute',
            zIndex:'1',
            right:'5%',
            margin:'2px'
        }}>
        <span className={`badge rounded-pill bg-${color}`} > 
                {source} 
                </span> 
        </div>
        <div className="card my-3  " style={{ width: 'auto', height: 'auto' }}>
          
            
          
        

          <img src={imgurl} className="card-img-top" style={{ height: '15rem', width: 'auto' ,objectFit:'cover'}} alt="Page not Found" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <h6>By {!author ? "Unknown" : author} on {new Date(dateofpublish).toGMTString()}</h6>
            <a rel='noreferrer' href={props.newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )

}

export default NewsItem
