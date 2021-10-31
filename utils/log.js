const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[ ❕CHe-Ry ] » ') + data);
			break;
		case "error":
			console.log(chalk.green('[ ❕CHe-Ry ] » ') + data);
			break;
		default:
			console.log(chalk.magenta(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[ >><< TẢI THÀNH CÔNG ] » ') + data);
			break;
		case "error":
			console.log(chalk.green('[ >><< TẢI THÀNH CÔNG ] » ') + data);
			break;
		default:
			console.log(chalk.green(`[ >><< TẢI THÀNH CÔNG ] » `) + data);
			break;
	}
}