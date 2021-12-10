const ChangeText = (mode, text) => {
	if (mode === 'lowercase') {
		return text.toLowerCase()
	} else if (mode === 'uppercase') {
		return text.toUpperCase()
	}
}

export default ChangeText
