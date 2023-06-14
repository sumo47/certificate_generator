import React, { Component } from 'react'
import NewsItem from './NewsItem'
import axios from 'axios';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

    static defaultProps = {
        country: "in",
        pageSize: 8,
        category: "general"
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    capitalized = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    constructor(props) {
        super(props);
        console.log("Hello i am a constructor!")
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `NewsElephant - ${this.capitalized(this.props.category)}`
    }




    async updateNews() {
        console.log(this.articles, this.totalResults)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d093053d72bc40248998159804e0e67d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        await axios.get(url)
        .then((res)=>{
            this.setState({
                articles:res.data.articles,
                loading:false,
                totalResults:res.data.totalResults
            })  
        })
        console.log(this.state.totalResults)
    }

    async componentDidMount() { //runs after render()
        this.updateNews()
    }

    HandleOnClickNext = async () => {
        this.setState({ page: this.state.page + 1 })
        this.updateNews()
    }

    HandleOnClickPrevious = async () => {
        console.log("Previous")
        this.setState({ page: this.state.page - 1 })
        this.updateNews()
    }

    fetchMoreData = async () => {
        // this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0dc0dd09ab144690bd156c1fb8eec4ed&page=${this.state.page +1 }&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })
        let data = await fetch(url)
        let parseData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            totalResults: parseData.totalResults
        })
    };

    render() {
        return (
            <>
            {console.log(this.state.articles.length, this.state.totalResults)}
                <h1 className='text-center'>NewsElephant - {this.capitalized(this.props.category)} - Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length < this.state.totalResults}
                    // hasMore={true}
                    
                    loader={<Spinner />}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                          <b>Yay! You have seen it all</b>
                        </p>
                      }
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-3 d-flex justify-content-center" key={element.url}>
                                    <NewsItem
                                        title={element.title ? element.title : "No Title"}
                                        description={element.description ? element.description : "No description"}
                                        imageUrl={element.urlToImage ? element.urlToImage : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png"}
                                        ReadMore={element.url? element.url:"https:www.google.com"}
                                        Author={element.author? element.author:"Unknown"}
                                        date={element.publishedAt?element.publishedAt:"From Futute"}
                                        source={element.source.name?element.source.name:"Robot"}
                                    />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

            </>
        )
    }
}

export default News