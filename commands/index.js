import React, { Component, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Box } from 'ink'

function Counter(props) {
	const [i, setI] = useState(props.i)
	useEffect(() => {
		const timer = setInterval(() => {
			setI(v => v + 1)
		}, 100)

		return () => {
			clearInterval(timer)
		}
	}, [])

	return <Box>Iteration #{i}</Box>
}

Counter.propTypes = {
	/// Start from
	i: PropTypes.number.isRequired,
}

export default Counter
