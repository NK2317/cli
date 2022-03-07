#! /usr/bin/env node

const { prompt } = require('inquirer');
const { execCommand } = require('./util/exec-command');

async function main () {
    console.log('Type the github url that you want to clone');

    const { url } = await prompt({
        name: 'url',
        default: 'https://github.com/mdn/todo-react.git'
    });

    try {
        await execCommand(`git clone ${url}`);
        console.log('Clonned!');
    } catch (e) {
        console.error(e);
    }
}

main().catch(console.error);
