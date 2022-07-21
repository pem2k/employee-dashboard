const inquirer = require("inquirer")
const fs = require("fs")
const util = require("util")
const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")



const writePromise = util.promisify(fs.writeFile)
const appendPromise = util.promisify(fs.appendFile)

//user object constructor
//inquirer, initial prompt for team manager's name, employee ID, email address, and office number - always add this to array of objects first
//present a list with inquirer that allows the user to choose between engineer, intern, and finish building the team.
//polymorphism, if the user chooses engineer, give the engineer prompts and generate engineer card, if the user chooses intern, do the same for them.

const empArr = []
const init = async () => {
    try {
        const res = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Please provide the manager's name",
            },
            {
                type: "input",
                name: "id",
                message: "Please provide the manager's ID number",
            },
            {
                type: "input",
                name: "email",
                message: "Please provide the manager's email address",
            },
            {
                type: "input",
                name: "offNum",
                message: "Please provide the manager's office number",
            }
        ])
        empArr.push(new Manager(res.name, res.id, res.email, role, res.offNum))
        console.log(empArr)
        empFunc()

    } catch (err) {
        console.log(err)
    }
}


const empFunc = async () => {
    try {
        const res = await inquirer.prompt([
            {
                type: "list",
                name: "cont",
                choices: ["Engineer", "Intern", "Exit"],
                message: "Please create a new employee, or choose exit to close the application"
            }
        ])
        if (res.cont == "Engineer") {
            newEngineer()
        } else if (res.cont == "Intern") {
            newIntern()
        } else {
            generate()
        }
    } catch (err) {
        console.log(err)
    }
}

init();

const newEngineer = async () => {
    try {
        const res = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Please provide the engineer's name",
            },
            {
                type: "input",
                name: "id",
                message: "Please provide the engineer's ID number",
            },
            {
                type: "input",
                name: "email",
                message: "Please provide the engineer's email address",
            },
            {
                type: "input",
                name: "github",
                message: "Please provide the engineer's github user",
            }
        ])
        empArr.push(new Engineer(res.name, res.id, res.email, role, res.github))
        console.log(empArr)
        empFunc()

    } catch (err) {
        console.log(err)
    }
}


const newIntern = async () => {
    try {
        const res = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Please provide the intern's name",
            },
            {
                type: "input",
                name: "id",
                message: "Please provide the intern's ID number",
            },
            {
                type: "input",
                name: "email",
                message: "Please provide the intern's email address",
            },
            {
                type: "input",
                name: "school",
                message: "Please provide the name of the intern's school",
            }
        ])
        empArr.push(new Intern(res.name, res.id, res.email, role, res.school))
        console.log(empArr)
        empFunc()

    } catch (err) {
        console.log(err)
    }
}

const generate = async () => {
    try {
        await writePromise("./dist/index.html", `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            <title>Employee Dashboard</title>
        </head>
        
        <body class="bg-secondary">
            <nav class="text-center bg-dark text-light">
                <span class="navbar-brand mb-2 h1">Team Manager</span>
            </nav>
        
            <main class="container">
                <div class="row">`
        )

        for (i = 0; i < empArr.length; i++) {
            if (empArr[i].role == "Manager") {

                await appendPromise("./dist/index.html", `
                    <div class = "col-4">
                    <div class="card manager m-2 border-0" style=""></div>
                    <div class="card-body bg-success">
                        <h5 class="card-title">${empArr[i].name}</h5>
                        <p class="card-text">Role: ${empArr[i].role}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${empArr[i].id}</li>
                        <li class="list-group-item">Office: ${empArr[i].offNum}</li>
                        <li class="list-group-item">Email <a href ="mailTo:${empArr[i].email}">${empArr[i].email}</a></li>
                    </ul>
                    </div>`
                )

            } else if (empArr[i].role == "Engineer") {
                await appendPromise("./dist/index.html", `
                    <div class="card intern col-4" style=""></div>
                    <div class="card-body">
                        <h5 class="card-title">${empArr[i].name}</h5>
                        <p class="card-text">${empArr[i].role}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${empArr[i].id}</li>
                        <li class="list-group-item">${empArr[i].github}</li>
                        <li class="list-group-item">${empArr[i].email}</li>
                    </ul>
                    </div>`
                )

            } else {
                await appendPromise("./dist/index.html", `
                    <div class= "col-4">
                    <div class="card intern m-2 border-0" style=""></div>
                    <div class="card-body bg-success">
                        <h5 class="card-title">${empArr[i].name}</h5>
                        <p class="card-text">Role: ${empArr[i].role}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${empArr[i].id}</li>
                        <li class="list-group-item">School: ${empArr[i].school}</li>
                        <li class="list-group-item">Email <a href ="mailTo:${empArr[i].email}">${empArr[i].email}</a></li>
                    </ul>
                    </div>`
                )
            }
        }

        await appendPromise("./dist/index.html", `
            </main>

            <footer>


            </footer>

            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
                integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
                crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
                integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
                crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
                integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
                crossorigin="anonymous"></script>
            </body>

            </html>`
        )
    } catch (err) { console.log(error) }
}