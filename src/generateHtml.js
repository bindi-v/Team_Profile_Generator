const generateTeam = (team) => {
    const generateManager = (manager) => {
        return `
        <div class="card employee card">
        <div class="card-header">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
        <ul class="list-"group">
        <li class="list-grp-itm">ID : ${manager.getId()}</li>
        <li class="list-grp-itm">Email : <a href="#" target="_blank"> ${manager.getEmail()}</a></li>
        <li class="list-grp-itm">Office Number : ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
</div> `;
    };

    const generateEngineer = (engineer) => {
        return `
        <div class="card employee-card">
        <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
        <ul class="list-group">
        <li class="list-grp-itm">ID : ${engineer.getId()}</li>
        <li class="list-grp-itm">Email : <a href="#" target="_blank"> ${engineer.getEmail()}</a></li>
        <li class="list-grp-itm">GitHub :  <a href="#" target="_blank"> ${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div> `;
    };

    const generateIntern = (intern) => {
        return `
        <div class="card employee-card">
        <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
        </div>
        <div class="card-body">
        <ul class="list-group">
        <li class="list-grp-itm">ID : ${intern.getId()}</li>
        <li class="list-grp-itm">Email : <a href="#" target="_blank"> ${intern.getEmail()}</a></li>
        <li class="list-grp-itm">School : ${intern.getSchool()}</li>
        </ul>
    </div>
</div> `;
    };

    const html = [];

    html.push(
        team
        .filter((employee) => employee.getRole() === "Manager")
        .map((manager) => generateManager(manager))
    );

    html.push(
        team
        .filter((employee) => employee.getRole() === "Engineer")
        .map((engineer) => generateEngineer(engineer))
        .join("")
    );

    html.push(
        team
        .filter((employee) => employee.getRole() === "Intern")
        .map((intern) => generateIntern(intern))
        .join("")
    );
    return html.join("");
}

module.exports = (team) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" >
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" >
<link href="https://fonts.googleapis.com/css2?family=Mukta:wght@200;300&family=Ubuntu:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet">
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team Profile</h1>
                </div>
            </div>
        </div>
    <div class="container" >
        <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
            ${generateTeam(team)}
        </div>
        </div>
    </div>
    </body>
    </html>
    `;
};





const fs = require('fs');

const writeFile = (data) => {
    return new Promise((resolve, reject) => {
fs.writeFile('./dist/index.html', data, err => {

    if(err){
        console.log(err);
        return;
    }
    resolve({
        ok: true,
        message: "Your file has been generated!"
    })
})
    })
}
module.exports = writeFile;