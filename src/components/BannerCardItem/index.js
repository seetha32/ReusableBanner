// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerList} = props
  const {headerText, description, className} = bannerList

  return (
    <li className={`list-class ${className} `}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button-class" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
