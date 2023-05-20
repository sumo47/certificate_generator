import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles = [
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "Aaron Katersky, Kiara Alfonseca, Stephanie Ramos, Brian Hartman",
            "title": "Daniel Penny, man who choked subway rider Jordan Neely, faces manslaughter charge - ABC News",
            "description": "Jordan Neely was homeless when he was killed by a fellow subway passenger.",
            "url": "https://abcnews.go.com/US/daniel-penny-man-choked-subway-rider-jordan-neely/story?id=99169271",
            "urlToImage": "https://s.abcnews.com/images/US/penny2-rt-ml-230512_1683893852784_hpMain_16x9_992.jpg",
            "publishedAt": "2023-05-12T12:32:18Z",
            "content": "Daniel Penny turned himself in to New York City police on Friday to face criminal charges in connection with the chokehold death of Jordan Neely aboard a subway train.\r\nPenny was seen walking in to t… [+4174 chars]"
        },
        {
            "source": {
                "id": "financial-post",
                "name": "Financial Post"
            },
            "author": "Joe O'Connor",
            "title": "Canada's empty downtowns defy post-pandemic return-to-normal — and business owners are feeling the pain - Financial Post",
            "description": "Businesses' recipe for success disrupted as downtowns transform from places to work, spend money to places where people do neither. Read on.",
            "url": "https://financialpost.com/feature/canada-empty-downtowns-defy-return-normal-business-owners-hurting",
            "urlToImage": "https://smartcdn.gprod.postmedia.digital/financialpost/wp-content/uploads/2023/05/king-street-toronto-vw0511.jpg",
            "publishedAt": "2023-05-12T12:08:23Z",
            "content": "Business recipe for success disrupted as downtown cores transform from places where people work and spend money to places where they don't do much of either \r\nA pedestrian walks through a constructio… [+13630 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Daniel Wu",
            "title": "Meteorite fragment punches hole through New Jersey family’s roof - The Washington Post",
            "description": "The College of New Jersey confirmed that a rock that crashed through a home in Hopewell Township, N.J., on Monday was a meteorite.",
            "url": "https://www.washingtonpost.com/nation/2023/05/12/new-jersey-meteorite-crash-home/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/JFQSQ42CRNCQHNVZYWES3SWBD4_size-normalized.jpg&w=1440",
            "publishedAt": "2023-05-12T11:53:14Z",
            "content": "Comment on this story\r\nComment\r\nAt first glance, the avocado-size rock that Suzy Kop found in her fathers New Jersey home Monday could have been from any garden. But a closer look revealed jagged edg… [+5469 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Mike Calia",
            "title": "5 things to know before the stock market opens Friday - CNBC",
            "description": "Here are the most important news items that investors need to start their trading day.",
            "url": "https://www.cnbc.com/2023/05/12/5-things-to-know-before-the-stock-market-opens-friday-may-12.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107239800-1683820077637-Traders-OB-Photo-MW-20230511-0075-PRESS-7.jpg?v=1683891955&w=1920&h=1080",
            "publishedAt": "2023-05-12T11:45:55Z",
            "content": "Traders on the floor of the NYSE, May 11, 2023.\r\nHere are the most important news items that investors need to start their trading day:\r\n1. Looking for a rebound\r\nThe Nasdaq is humming along, and it'… [+4617 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Pakistan court orders Imran Khan's release on bail, lawyer says - Reuters",
            "description": "A Pakistani court ordered former Prime Minister Imran Khan's release on bail for two weeks, his lawyer said on Friday, after his <a href=\"/world/asia-pacific/former-pakistan-pm-imran-khan-arrested-geo-tv-2023-05-09/\">arrest</a> ignited deadly protests and a t…",
            "url": "https://www.reuters.com/world/asia-pacific/pakistan-authorities-gear-imran-khans-supporters-his-court-hearing-2023-05-12/",
            "urlToImage": "https://www.reuters.com/resizer/_T-LbO6rU8JOdv-_DwdoPLpXhnE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/74UN2SC3ERNR7KIA5Q3XPT252I.jpg",
            "publishedAt": "2023-05-12T11:44:00Z",
            "content": "ISLAMABAD, May 12 (Reuters) - A Pakistani court ordered former Prime Minister Imran Khan's release on bail for two weeks, his lawyer said on Friday, after his arrest ignited deadly protests and a tus… [+2808 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Ashley Strickland",
            "title": "Astronomers spot largest cosmic explosion ever witnessed - CNN",
            "description": "Astronomers have spotted the largest cosmic explosion ever witnessed. The cosmic event, which occurred about 8 billion light-years from Earth, is 10 times brighter than any known exploding star.",
            "url": "https://www.cnn.com/2023/05/12/world/largest-cosmic-explosion-scn/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230511134356-largest-cosmic-explosion.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-05-12T11:23:00Z",
            "content": "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nAstronomers have spotted the largest cosmic explosion … [+4356 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Barron's"
            },
            "author": "Al Root",
            "title": "Tesla Stock Jumps. Why Investors Are Celebrating a New Twitter CEO. - Barron's",
            "description": "Tesla investors have perceived Elon Musk's role at Twitter as a distraction that prevented him from focusing on the car company.",
            "url": "https://www.barrons.com/articles/tesla-stock-price-elon-musk-twitter-ceo-81418315",
            "urlToImage": "https://images.barrons.com/im-780582/social",
            "publishedAt": "2023-05-12T11:07:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Annika Kim Constantino",
            "title": "Here's why Covid vaccines will still be free for uninsured Americans as public health emergency ends - CNBC",
            "description": "The Biden administration and drugmakers Pfizer and Moderna have announced programs that aim to help uninsured Americans access Covid shots for free.",
            "url": "https://www.cnbc.com/2023/05/12/covid-shots-free-for-uninsured-after-public-health-emergency.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107007489-1643303810715-gettyimages-1238021606-MASSACHUSETTS_VACCINES.jpeg?v=1683889201&w=1920&h=1080",
            "publishedAt": "2023-05-12T11:00:01Z",
            "content": "A healthcare worker prepares a dose of the Pfizer-BioNTech Covid-19 vaccine at a vaccination clinic in the Peabody Institute Library in Peabody, Massachusetts, on Wednesday, Jan. 26, 2022.\r\nUninsured… [+6665 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Thomas Schlachter",
            "title": "Nikola Jokić puts on a show as Denver Nuggets advance to the Western Conference finals - CNN",
            "description": "For the second year running, the Phoenix Suns have been blown out of the Western Conference semifinals as they fell to a 125-100 defeat against Nikola Jokić and the Denver Nuggets.",
            "url": "https://www.cnn.com/2023/05/12/sport/denver-nuggets-phoenix-suns-nikola-jokic-spt-intl/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230512035056-01-nikola-jokic-nuggets-051123-restricted.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-05-12T10:54:00Z",
            "content": "For the second year running, the Phoenix Suns have been blown out of the Western Conference semifinals as they fell to a 125-100 defeat against Nikola Joki and the Denver Nuggets.\r\nIn a series which … [+2671 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "John Fritze",
            "title": "Title 42: Judge blocks Biden from 'paroling' migrants on border - USA TODAY",
            "description": "Biden acknowledged this week that it would be \"chaotic\" at the border as the U.S. lifts a pandemic-era policy that made it harder to seek asylum.",
            "url": "https://www.usatoday.com/story/news/politics/2023/05/11/title-42-judge-blocks-biden-from-paroling-migrants-on-border/70210277007/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2023/05/11/USAT/1b110ef0-f201-4e34-acfe-fc623e5a48e1-XXX_Title_42_last_day347.jpg?crop=2984,1679,x0,y0&width=2984&height=1679&format=pjpg&auto=webp",
            "publishedAt": "2023-05-12T10:52:26Z",
            "content": "WASHINGTON A federal judge in Florida on Thursday blocked a Biden administration plan to release migrants in the U.S. on \"parole\" because of an surge expected once an emergency immigration restrictio… [+2234 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Ruxandra Iordache",
            "title": "Ukraine war live updates: Russia denies reports of Ukrainian breakthrough in front line - CNBC",
            "description": "Russia has denied reports that Ukraine has made a breakthrough in the front line, amid expectations of a Kyiv counteroffensive.",
            "url": "https://www.cnbc.com/2023/05/12/ukraine-war-live-updates-latest-news-on-russia-and-the-war-in-ukraine.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107240200-1683877228106-gettyimages-1253936611-AA_12052023_1190961.jpeg?v=1683878189&w=1920&h=1080",
            "publishedAt": "2023-05-12T10:43:00Z",
            "content": "U.S. and Chinese officials met for two days in Vienna to discuss a range of topics, including Russia's war in Ukraine, amid tensions between the world's two largest economies.\r\n\"The two sides had can… [+964 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Mia Jankowicz",
            "title": "Russia woman convicted over 'death to Putin' note on his parents grave - Business Insider",
            "description": "Irina Tsybaneva was given a two-year suspended sentence after leaving the note on the Putin family grave, on the grounds that she had 'desecrated' it.",
            "url": "https://www.businessinsider.com/russia-woman-convicted-death-putin-freak-killer-note-parents-grave-2023-5",
            "urlToImage": "https://i.insider.com/645dfef9d391de0019bda68b?width=1200&format=jpeg",
            "publishedAt": "2023-05-12T10:38:00Z",
            "content": "A Russian woman who called President Vladimir Putin a \"freak\" in a note she left on his parents' grave was convicted on Thursday of desecrating the site, according to multiple reports. \r\nThe note, le… [+1479 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "98.5 The Sports Hub"
            },
            "author": "98.5 The Sports Hub",
            "title": "Jayson Tatum had the line of the night following Game 6 of the Celtics' playoff win over Philadelphia - 98.5 The Sports Hub",
            "description": null,
            "url": "https://985thesportshub.com/listicle/jayson-tatum-had-the-line-of-the-night-following-game-6-of-the-celtics-playoff-win-over-philadelphia/",
            "urlToImage": null,
            "publishedAt": "2023-05-12T10:15:42Z",
            "content": null
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Communities torn as Ukraine turns its back on Moscow-linked church - Reuters",
            "description": "As a crowd gathered outside the white-brick Orthodox church in the village of Karyshkiv in western Ukraine, raised voices quickly turned to shouting. Soon old women were crying.",
            "url": "https://www.reuters.com/world/europe/communities-torn-ukraine-turns-its-back-moscow-linked-church-2023-05-12/",
            "urlToImage": "https://www.reuters.com/resizer/wy6UXmO3RTRkBDnI1ME4tweglJo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/4ZHOLSCHJVJLVOJJGVXWMQCR3U.jpg",
            "publishedAt": "2023-05-12T09:19:00Z",
            "content": "KARYSHKIV, Ukraine, May 12 (Reuters) - As a crowd gathered outside the white-brick Orthodox church in the village of Karyshkiv in western Ukraine, raised voices quickly turned to shouting. Soon old w… [+10226 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "The Legend of Zelda: Tears of the Kingdom - Official Launch Trailer - IGN",
            "description": "Check out the exciting The Legend of Zelda: Tears of the Kingdom launch trailer. Join Link on a new adventure across the skies and land of Hyrule.The Legend ...",
            "url": "https://www.youtube.com/watch?v=SSVYVgm4tH4",
            "urlToImage": "https://i.ytimg.com/vi/SSVYVgm4tH4/maxresdefault.jpg",
            "publishedAt": "2023-05-12T09:15:13Z",
            "content": null
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Morgan Rimmer,Nicky Robertson",
            "title": "'I don't intend to support him': GOP senators push back on Trump's controversial town hall claims - CNN",
            "description": "A number of GOP senators pushed back on controversial claims made by Donald Trump at Wednesday night's CNN town hall, telling CNN they disagreed with him on a range of issues in a sign of the divisions within the Republican party over the former president.",
            "url": "https://www.cnn.com/2023/05/11/politics/senate-republicans-trump-town-hall-claims/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230510172046-07-cnn-trump-town-hall-230510.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-05-12T09:14:00Z",
            "content": "A number of GOP senators pushed back on controversial claims made by Donald Trump at Wednesday nights CNN town hall, telling CNN they disagreed with him on a range of issues in a sign of the division… [+2954 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Ashley Hume",
            "title": "Robert De Niro joins Mick Jagger, Clint Eastwood and Richard Gere becoming dads again after 65 - Fox News",
            "description": "Robert De Niro revealed earlier this week that he had become a father again at 79. The actor joined a number of stars who welcomed children in their later years.",
            "url": "https://www.foxnews.com/entertainment/robert-de-niro-joins-mick-jagger-clint-eastwood-richard-gere-becoming-dads-again-after-65",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/05/clint_richard_robert_mick.jpg",
            "publishedAt": "2023-05-12T09:00:00Z",
            "content": "Robert De Niro surprised fans when he revealed that he had become a father again at the age of 79.\r\nThe actor shared the news Monday during an interview with ET Canada while discussing his new movie … [+9793 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Ukraine plays down talk of Bakhmut gains being start of counteroffensive - Reuters",
            "description": "Ukrainian forces have advanced by about 2 km around the eastern city of Bakhmut this week and have not given up any positions there in that time, Deputy Defence Minister Hanna Maliar said on Friday.",
            "url": "https://www.reuters.com/world/europe/kyiv-reports-small-gains-around-bakhmut-decries-russian-false-information-2023-05-12/",
            "urlToImage": "https://www.reuters.com/resizer/y06uK022sgltFZ-3HmrdSDWbU74=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XJ4I77KXRZNNPBESXKGPHZZMJY.jpg",
            "publishedAt": "2023-05-12T08:54:00Z",
            "content": "KYIV, May 12 (Reuters) - Ukrainian forces have advanced by about 2 km around the eastern city of Bakhmut this week and have not given up any positions there in that time, Deputy Defence Minister Hann… [+1972 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "US News LIVE: Heavy influx of migrants at US-Mexico border hours before Title 42 expires | WION LIVE - WION",
            "description": "The US government is all set to lift a COVID era immigration policy known as Title 42 which has blocked migrants from certain countries caught at the US-Mexi...",
            "url": "https://www.youtube.com/watch?v=PZDUBMxpxaE",
            "urlToImage": "https://i.ytimg.com/vi/PZDUBMxpxaE/maxresdefault_live.jpg",
            "publishedAt": "2023-05-12T08:11:49Z",
            "content": null
        },
        {
            "source": { "id": "espn", "name": "ESPN" },
            "author": "Tim MacMahon",
            "title": "Suns eliminated from playoffs with 'embarrassing' 25-point loss - ESPN - ESPN",
            "description": "The Suns were eliminated from the playoffs Thursday with a 125-100 loss to the Nuggets in Game 6 of their conference semifinals series.",
            "url": "https://www.espn.com/nba/story/_/id/37610345/suns-eliminated-playoffs-embarrassing-25-point-loss",
            "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0512%2Fr1171931_1296x729_16%2D9.jpg",
            "publishedAt": "2023-05-12T07:54:00Z",
            "content": "PHOENIX -- For the second straight season, the Phoenix Suns were eliminated at home in humiliating fashion.\r\nPhoenix's 125-100 loss to the Denver Nuggets in Thursday night's Game 6 of the Western Con… [+2600 chars]"
        }
    ]

    constructor() {
        super();
        console.log("Hello i am a constructor!")
        this.state = { articles: this.articles, loading: false }
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