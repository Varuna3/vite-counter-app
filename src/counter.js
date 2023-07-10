console.log('hello from counter.js')

const setupCounter = element => {
  let counter = 0
  const setCounter = count => {
    counter = count
    element.innerHTML = `Count: ${counter}`
  }

  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

export default setupCounter
