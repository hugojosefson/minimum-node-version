import { basename } from 'path'
import { generateGreeting, identity } from './api'

if (process.argv.length !== 3) {
  console.error(`Usage: ${basename(process.argv[1])} <Your name>`)
  process.exit(1)
}

const whom = process.argv[2]

generateGreeting(whom)
  .then(identity)
  .then(greeting => console.log(greeting))
  .then(() => console.log('Done.'))
  .catch(err => {
    console.error('Caught error:', err.stack)
    process.exit(1)
  })
