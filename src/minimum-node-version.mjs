import {satisfies, clean, compare} from 'semver'

import versionData from './version-data'
import expectedNodeVersion from 'expected-node-version'

export default () => {
  const expected = expectedNodeVersion()

  return versionData()
      .then(
          records => records
          .filter(record => record.name === 'Node.js')
              .filter(record => satisfies(record.version, expected))
              .map(record => record.version)
              .map(version => clean(version))
              .sort(compare)[0]
      )
}
