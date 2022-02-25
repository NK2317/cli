const { exec } = require('child_process');
/**
 * Executes a shell command and return it as a Promise.
 * @param cmd {string}
 * @return {Promise<string>}
 */
 function execCommand(cmd) {
    return new Promise((resolve, reject) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                return reject(error)
            }
            if(stderr) {
                return reject(stderr);
            }
            return resolve(stdout);
        });
    });
}
module.exports = { execCommand }
