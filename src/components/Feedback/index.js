// Write your React code here.
import {Component} from 'react'
import './index.css'
import EmojisContainer from '../EmojisContainer'

class Feedback extends Component {
  state = {
    isFeedbackGiven: false,
  }

  onFeedback = () => {
    this.setState({
      isFeedbackGiven: true,
    })
  }

  render() {
    const {isFeedbackGiven} = this.state
    console.log(isFeedbackGiven)
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        {!isFeedbackGiven && (
          <div className="feedback-questions-card">
            <h1 className="feedback-question">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="feedback-emoji-list">
              {emojis.map(eachEmoji => (
                <EmojisContainer
                  emoji={eachEmoji}
                  key={eachEmoji.id}
                  onFeedback={this.onFeedback}
                />
              ))}
            </ul>
          </div>
        )}
        {isFeedbackGiven && (
          <div className="thank-you-card">
            <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
            <h1 className="thank-you-text">Thank You!</h1>
            <p className="assurance-text">
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
