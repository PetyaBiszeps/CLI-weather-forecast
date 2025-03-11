#!/usr/bin/env node
import { getArgs } from "./src/helpers/args.js"
import { printHelp } from './src/services/log.service.js'


const initCLI = () => {
    const args = getArgs(process.argv)

    if (args.h) {
        printHelp()
    }
    if (args.s) {
        // show city
    }
    if (args.t) {
        // save token
    }

    // show weather
}

initCLI()