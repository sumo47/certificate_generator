import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {

        let { title, description, imageUrl, ReadMore, Author, date, source } = this.props //what's happening

        return (
            <div className='my-3' >

                <div className="card border border-bottom-0 border-success" >
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:"1", left:"90%"}}>
                        {source}
                    </span>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                        <p className="card-text">{description}...</p>
                        <p className='card-text'><small className='text-muted'>
                            By {!Author ? "Unknown" : Author} on {new Date(date).toGMTString()}
                        </small></p>
                        <a href={ReadMore} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>

                </div>
            </div>
        )
    }
}

export default NewsItem