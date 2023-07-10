import setupCounter from './src/counter.js'
import './styles.css'

console.log('Hello from main.js')

const app = document.getElementById('app')

app.innerHTML = `
<h1>Counter App</h1>

<p>Click the button to increase the counter.</p>

<div id="counter"></div>
`
const counter = document.getElementById('counter')

setupCounter(counter)
