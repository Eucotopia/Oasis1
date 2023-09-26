import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

import './MenuItem.scss'
export default ({
    icon, title, action, isActive = null,
}) => (
    <button
        className={`menu-item${isActive && isActive() ? ' is-active' : ''}`}
        onClick={action}
        title={title}
    >
        <FontAwesomeIcon icon={icon} />
    </button>
)
