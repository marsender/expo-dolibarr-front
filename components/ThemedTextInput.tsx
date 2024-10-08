import React from 'react'
import { View, type TextInputProps, StyleSheet, Text, TextInput } from 'react-native'

export type ThemedTextInputProps = TextInputProps & {
	label?: string
	errorText?: string
	description?: string
	error?: boolean
}

export default function ThemedTextInput({ label, errorText, description, error, ...props }: ThemedTextInputProps) {
	return (
		<View style={styles.container}>
			<TextInput style={styles.input} {...props} />
			{description && !errorText ? <Text style={styles.description}>{description}</Text> : null}
			{errorText ? <Text style={styles.error}>{errorText}</Text> : null}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		marginVertical: 12,
	},
	input: {
		backgroundColor: '#EEEEEE',
	},
	description: {
		fontSize: 13,
		color: '#1F2732',
		paddingTop: 8,
	},
	error: {
		fontSize: 13,
		color: '#ED1C24',
		paddingTop: 8,
	},
})
