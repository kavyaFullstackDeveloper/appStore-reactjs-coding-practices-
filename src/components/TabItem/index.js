// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsList, onClickDisplay, isTabActive} = props
  const {displayText, tabId} = tabsList
  console.log(isTabActive)
  const displayApps = () => onClickDisplay(tabId)

  const activeTab = isTabActive ? 'textHighlight' : null

  return (
    <li className="tab-item">
      <button
        onClick={displayApps}
        type="button"
        className={`tab-item-text ${activeTab}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
