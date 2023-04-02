import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onClickLeftArrow = () => {
    const {index} = this.state
    if (index !== 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    } else {
      this.setState(prevState => ({index: prevState.index}))
    }
  }

  onClickRightArrow = () => {
    const {index} = this.state
    if (index !== 3) {
      this.setState(prevState => ({index: prevState.index + 1}))
    } else {
      this.setState(prevState => ({index: prevState.index}))
    }
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[index]
    return (
      <div className="reviews-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} className="profile" alt={username} />
        <div className="arrow-container">
          <button className="button" data-testid="leftArrow" type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="arrow-image"
              alt="left arrow"
              onClick={this.onClickLeftArrow}
            />
          </button>
          <p className="username">{username}</p>
          <button className="button" data-testid="rightArrow" type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="arrow-image"
              alt="right arrow"
              onClick={this.onClickRightArrow}
            />
          </button>
        </div>
        <p className="companyName">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
