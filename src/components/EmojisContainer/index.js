import './index.css'

const EmojisContainer = props => {
  const {emoji, onFeedback} = props
  console.log(emoji)
  const {name, imageUrl} = emoji

  const onClickingFeedbackEmoji = () => {
    onFeedback()
  }

  return (
    <li className="each-emoji-item">
      <button
        type="button"
        className="emoji-btn"
        onClick={onClickingFeedbackEmoji}
      >
        <img src={imageUrl} className="emoji" alt={name} />
        <h1 className="emoji-text">{name}</h1>
      </button>
    </li>
  )
}

export default EmojisContainer
