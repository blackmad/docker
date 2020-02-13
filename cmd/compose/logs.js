const child = require('child_process')
const options = { stdio: 'inherit' }

module.exports = {
  command: 'logs',
  describe: 'display container logs',
  handler: (argv) => {
    child.spawnSync('docker-compose', argv._.slice(1), options)
  }
}
