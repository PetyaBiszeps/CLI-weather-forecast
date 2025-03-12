import { homedir } from "os"
import { join } from "path"
import { promises } from "fs"

let data = {}
const filePath = join(homedir(), "weather-data.json")

const isExists = async (path) => {
    try {
        await promises.stat(path)
        return true
    } catch (e) {
        return false
    }
}

const getKeyValue = async (key) => {
    if (await isExists(filePath)) {
        const file = await promises.readFile(filePath)
        data = JSON.parse(file)
        return data[key]
    }
    return undefined
}

const saveKeyValue = async (key, value) => {
    if (await isExists(filePath)) {
        const file = await promises.readFile(filePath)
        data = JSON.parse(file)
    }
    data[key] = value
    await promises.writeFile(filePath, JSON.stringify(data))
}

export { saveKeyValue, getKeyValue }