import React, { Component } from 'react'

import { observer } from 'mobx-react'
import { createAutoSubscriber } from 'firebase-nest'

import Change from 'change'
import slugify from 'slugify'
import TimeAgo from 'react-timeago'
import twitter_text from 'twitter-text'

const tweet_limit = 140
var chance = new Change()

class TweetList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tweet: '',
      username: slugify(chance.name()),
      loading: false,
      remaining: tweet_limit
    }
  }
  
  renderTweet = (key, tweet) => (
    <article className="card" key={key}>
      <header>
        <h5>@{tweet.username} - <TimeAgo date={tweet.timestamp} /></h5>
      </header>
      <div className="tweet" dangerouslySetInnerHTML={{__html: twitter_text.autoLink(twitter_text.htmlEscape(tweet.text))}}></div>
    </article>
  )

  updateText = (evt) => {
    let tweet = evt.target.value
    let remaining = tweet_limit - twitter_text.getTweetLength(tweet)
    this.setState({ tweet, remaining })
  }
  
  submitTweet = () => {
    this.props.store.CreateTweet({
      username: this.state.username,
      timestamp: new Date().getTime(),
      text: this.state.tweet
    })

    this.setState({
      tweet: '',
      remaining: tweet_limit
    })
  }

  getSubs = (props, state) => props.store.allTweetsSubs()
  
  subscribeSubs = (subs, props, state) => props.stare.subscribeSubs(subs)
  
  render() {
    const tweets = this.props.store.getTweets()
    if (!tweets) {
      return <div>Loading tweets...</div>
    }

    return (
      <div>
        <div>
          <div>{this.state.username}</div>
          <div>
            <textarea
              placeholder="What`s happening?"
              onChange={this.updateText}
              value={this.state.tweet}>
              {this.state.tweet}
            </textarea>
            {this.state.remaining}
          </div>
        </div>
      </div>
    )
  }
}
