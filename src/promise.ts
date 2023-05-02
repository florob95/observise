import { blue } from 'color'
import { run } from './run.ts'

const lazyExample = () => {
	const promise = new Promise((resolve) => {
		console.log(blue('In Promise executor fn'))
		resolve(blue('Hello'))
	})
	console.log(blue('Before calling the then method'))
	promise.then(console.log)
}

const multipleExample = () => {
	const promise = new Promise((resolve) => {
		resolve(blue('first'))
		resolve(blue('second'))
	})
	promise.then(console.log)
}

const cancelExample = async () => {
	let timeoutRef
	const promise = new Promise((resolve) => {
		setTimeout(() => {
			resolve(blue('resolved'))
		}, 5000)
	})
	const timeoutPromise = new Promise((resolve, reject) => {
		timeoutRef = setTimeout(() => {
			//resolve(blue('resolved timeout'))
			reject(new Error('rejected'))
		}, 1000)
	})
	await Promise.race([promise, timeoutPromise]).then(console.log).catch((err) =>
		console.log(blue(err.message))
	)
}

run('promise', cancelExample)
