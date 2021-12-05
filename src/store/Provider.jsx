import { useReducer } from 'react'
import PropTypes from 'prop-types'
import Context from './Context'
import reducer, { initState } from './reducer'
import logger from './logger'

Provider.propTypes = {
    children: PropTypes.element,
}

function Provider({ children }) {
    const [state, dispatch] = useReducer(logger(reducer), initState)

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider
