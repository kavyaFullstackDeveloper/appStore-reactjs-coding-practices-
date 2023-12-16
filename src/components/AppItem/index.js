// Write your code here
import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {appName, imageUrl} = appsList

  return (
    <li className="app-item">
      <img src={imageUrl} alt={appName} className="app-logo" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
