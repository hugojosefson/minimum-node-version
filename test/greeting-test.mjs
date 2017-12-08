/* eslint-env mocha */

import assert from 'assert'
import {generateGreeting} from '../src/api'

describe('generateGreeting', () => {
  it('should throw an Error when called without argument', () => {
    assert.throws(() => {
      generateGreeting()
    }, Error)
  })

  it('should return a Promise when called with argument', () =>
        assert.ok(typeof generateGreeting('World').then === 'function')
    )

  it('should resolve to a greeting longer than input', () =>
        generateGreeting('World')
            .then(greeting => assert.ok(greeting.length > 'World'.length))
    )

  it('should resolve to a greeting containing input', () =>
        generateGreeting('World')
            .then(greeting => assert.ok(greeting.includes('World')))
    )
})
