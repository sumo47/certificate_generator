import React, { Component } from 'react'
import NewsItem from './NewsItem'
import axios from 'axios';

export class News extends Component {


    constructor() {
        super();
        console.log("Hello i am a constructor!")
        this.state = { articles: [] }
    }

   

    async componentDidMount() { //runs after render()
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=0dc0dd09ab144690bd156c1fb8eec4ed";
        // let data = await fetch(url);
        // let parseData = await data.json();
        // this.setState({ articles: parseData.articles })
        await axios.get(url)
        .then((response)=>{this.setState({articles:response.data.articles})})
        .catch((error)=>{console.log(error.message)})
    }

    render() {
        return (
            <div className='container my-3'>
                <h2>NewsElephant - Top Headlines</h2>

                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <NewsItem
                                title={element.title}
                                description={element.description}
                                imageUrl={element.urlToImage}
                                ReadMore={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News