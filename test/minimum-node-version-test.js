/* eslint-env mocha */

import assert from 'assert'
import minimumNodeVersion from '../src/api'

const VERSION_STRING = /^[0-9]+\.[0-9]+\.[0-9]+$/

describe('minimumNodeVersion', () => {
  it('is a function', () =>
    assert.ok(typeof minimumNodeVersion === 'function')
  )

  it('should return a Promise', () =>
    assert.ok(typeof minimumNodeVersion().then === 'function')
  )

  it('should resolve to a version string', () =>
    minimumNodeVersion()
      .then(version => assert.ok(VERSION_STRING.test(version)))
  )

  it('should resolve to 8.12.0 for this project', () =>
    minimumNodeVersion()
      .then(version => assert.strictEqual(version, '8.12.0'))
  )
})
