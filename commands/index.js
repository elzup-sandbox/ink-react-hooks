import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Box } from 'ink'

class Counter extends Component {
	constructor(props) {
		super()

		this.state = {
			i: props.i,
		}
	}

	render() {
		return <Box>Iteration #{this.state.i}</Box>
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState(prevState => ({
				i: prevState.i + 1,
			}))
		}, 100)
	}

	componentWillUnmount() {
		clearInterval(this.timer)
	}
}

Counter.propTypes = {
	/// Start from
	i: PropTypes.number.isRequired,
}

export default Counter
