import { yellow } from 'color'

export const run = async (name: string, fn: () => void): void => {
	console.log(yellow(`---------- START ${name.toUpperCase()} ----------`))
	await fn()
	console.log(yellow(`---------- END ${name.toUpperCase()} ------------`))
}
