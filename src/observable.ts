import { blue } from 'color'
import { run } from './run.ts'
import { Observable, interval } from 'rxjs'
const lazyExample = () => {
	const observable = new Observable((observer) => {
		console.log(blue('In Observable producer fn'))
		observer.next(blue('Hello'))
		observer.complete()
	})
	console.log(blue('Before calling the subscribe method'))
	observable.subscribe(console.log)
}
const multipleExample = () => {
	const observable = new Observable((observer) => {
		observer.next(blue('first'))
		observer.next(blue('second'))
	})
	observable.subscribe(console.log)
}

const cancelExample = () => {
	const subscription = interval(1000)
		.subscribe(val => console.log(blue(val.toString())))
	setTimeout(() => { subscription.unsubscribe() }, 5000)
}

run('observable', cancelExample)
