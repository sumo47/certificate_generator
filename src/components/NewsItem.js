import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {

    let {title, description, imageUrl, ReadMore} = this.props //what's happening

        return (
            <div className='my-3' >
                <div className="card border border-bottom-0 border-success" >
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}...</p>
                            <a href={ReadMore} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem