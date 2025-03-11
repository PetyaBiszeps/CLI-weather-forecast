import chalk from 'chalk';
import dedent from 'dedent-js'

const printError = (err) => {
    console.log(chalk.bgRed(" ERROR " + " " + err));
}

const printSuccess = (msg) => {
    console.log(chalk.bgGreen(" SUCCESS " + " " + msg));
}

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan(" HELP ")}
        No parameters - weather forecast
        -s [CITY] to make city selection
        -h to show help
        -t [API_KEY] to save the API token`
    )
}

export { printError, printSuccess, printHelp };