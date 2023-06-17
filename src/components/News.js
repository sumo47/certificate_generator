import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import axios from 'axios';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

   const capitalized = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }


    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)


    const updateNews = async()=> {
        props.setProgress(10);
        console.log(articles, totalResults)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading({ loading: true })
        props.setProgress(30);
        await axios.get(url)
            .then((res) => {
                setArticles(res.data.articles)
                setLoading(false)
                setTotalResults(res.data.totalResults)
            })
        console.log(totalResults)
        props.setProgress(100);

    }

    useEffect(() => {
    document.title = `NewsElephant - ${capitalized(props.category)}`
        updateNews();
        // eslint-disable-next-line
    }, [])


    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        // setLoading(true)
        setPage(page+1)
        let data = await fetch(url)
        let parseData = await data.json()
        setArticles(articles.concat(parseData.articles))
        setTotalResults(parseData.totalResults)
    };

        return (
            <>
                {console.log(articles.length,totalResults)}
                <h1 className='text-center' style={{marginTop:"70px"}}>NewsElephant - {capitalized(props.category)} - Top Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length <totalResults}
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
                            {articles.map((element) => {
                                return <div className="col-md-3 d-flex justify-content-center" key={element.url}>
                                    <NewsItem
                                        title={element.title ? element.title : "No Title"}
                                        description={element.description ? element.description : "No description"}
                                        imageUrl={element.urlToImage ? element.urlToImage : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png"}
                                        ReadMore={element.url ? element.url : "https:www.google.com"}
                                        Author={element.author ? element.author : "Unknown"}
                                        date={element.publishedAt ? element.publishedAt : "From Futute"}
                                        source={element.source.name ? element.source.name : "Robot"}
                                    />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

            </>
        )
}


News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general"
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default News;