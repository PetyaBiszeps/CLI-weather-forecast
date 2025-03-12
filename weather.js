#!/usr/bin/env node
import { getArgs } from "./src/helpers/args.js"
import { printHelp, printSuccess, printError } from './src/services/log.service.js'
import { saveKeyValue } from './src/services/storage.service.js'

const saveToken = async (token) => {
    if (!token.length) {
        printError("No token provided.")
        return
    }
    try {
        await saveKeyValue('token', token)
        printSuccess('Token saved successfully.')
    } catch (e) {
        printError(e.message)
    }
}
const initCLI = () => {
    const args = getArgs(process.argv)

    if (args.h) {
        printHelp()
    }
    if (args.s) {
        // show city
    }
    if (args.t) {
        return saveToken(args.t)
    }

    // show weather
}

initCLI()