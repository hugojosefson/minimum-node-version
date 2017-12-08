export default whom => {
  if (typeof whom === 'undefined') {
    throw new Error('You must specify who the greeting is for.')
  }

  return Promise.resolve(`Hello, ${whom}!`)
}
