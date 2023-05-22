import React, { Component } from 'react'
import NewsItem from './NewsItem'
import axios from 'axios';
import Spinner from './Spinner';

export class News extends Component {

    constructor() {
        super();
        console.log("Hello i am a constructor!")
        this.state = { articles: [], loading: false, page: 1 }
    }

    async componentDidMount() { //runs after render()
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0dc0dd09ab144690bd156c1fb8eec4ed&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        // let data = await fetch(url);
        // let parseData = await data.json();
        // this.setState({ articles: parseData.articles })
        await axios.get(url)
            .then((response) => {
                this.setState({
                    articles: response.data.articles,
                    totalResults: response.data.totalResults,
                    loading: false
                })
            })
            .catch((error) => { console.log(error.message) })
    }

    HandleOnClickNext = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0dc0dd09ab144690bd156c1fb8eec4ed&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        await axios.get(url)
            .then((response) => { this.setState({ articles: response.data.articles, loading:false }) })
            .catch((error) => { console.log(error.message) })
        this.setState({ page: this.state.page + 1 })
        console.log("Next")
    }

    HandleOnClickPrevious = async () => {
        console.log("Previous")
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0dc0dd09ab144690bd156c1fb8eec4ed&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        await axios.get(url)
            .then((response) => { this.setState({ articles: response.data.articles , loading:false}) })
            .catch((error) => { console.log(error.message) })
        this.setState({ page: this.state.page - 1 })
    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center'>NewsElephant - Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-3 d-flex justify-content-center" key={element.url}>
                            <NewsItem
                                title={element.title}
                                description={element.description}
                                imageUrl={element.urlToImage}
                                ReadMore={element.url} />
                        </div>
                    })}
                </div>

                <div className="container d-flex justify-content-between">
                    <button type='button' className='btn btn-dark'
                        disabled={this.state.page <= 1}
                        onClick={this.HandleOnClickPrevious} >
                        &larr; Previous
                    </button>
                    <button type='button' className='btn btn-dark'
                        disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
                        onClick={this.HandleOnClickNext}>
                        Next &rarr;
                    </button>
                </div>
            </div>
        )
    }
}

export default News