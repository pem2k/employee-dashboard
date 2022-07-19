const inquirer = require("inquirer")
const fs = require("fs")
const util = require("util")

//user object constructor
//inquirer, initial prompt for team manager's name, employee ID, email address, and office number - always add this to array of objects first
//present a list with inquirer that allows the user to choose between engineer, intern, and finish building the team.
//polymorphism, if the user chooses engineer, give the engineer prompts and generate engineer card, if the user chooses intern, do the same for them.
