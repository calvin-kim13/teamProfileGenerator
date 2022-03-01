function generateCards(team) {
    const html = [];
    // for(const member of team) {
    //     let role = member.getRole();
    //     switch (role) {
    //         case "Manager":
    //             html.push(generateManagerCard(member));
    //             break;
    //         case "Engineer":
    //             html.push(generateEngineerCard(member));
    //             break;
    //         case "Intern":
    //             html.push(generateInternCard(member));
    //             break
    //     }
    // }
    for (let i = 0; i < team.length; i++) {
        let teamMember = team[i];
        let role = teamMember.getRole();
        switch (role) {
            case "Manager":
                html.push(generateManagerCard(teamMember));
                break;
            case "Engineer":
                html.push(generateEngineerCard(teamMember));
                break;
            case "Intern":
                html.push(generateInternCard(teamMember));
                break;
        }
    }
    return html.join('')
}

function generateManagerCard(manager) {
    return `
    <div class="card" style="width: 20rem;">
            <div class="card-body">
            <h5 class="card-title">Manager <i class="fa-solid fa-mug-hot"></i></h5>
            <h6 class="card-subtitle mb-2 text-muted">${manager.name}</h6>
            <div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>ID:</strong> ${manager.id}</li>
                <li class="list-group-item"><strong>Email:</strong><br> ${manager.email}</li>
                <li class="list-group-item"><strong>Office Number:</strong> ${manager.officeNumber}</li>
                </ul>
            </div>
            </div>
    </div>`
}

function generateEngineerCard(engineer) {
    return `
    <div class="card" style="width: 20rem;">
            <div class="card-body">
            <h5 class="card-title">Engineer <i class="fa-solid fa-glasses"></i></h5>
            <h6 class="card-subtitle mb-2 text-muted">${engineer.name}</h6>
            <div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>ID:</strong> ${engineer.id}</li>
                <li class="list-group-item"><strong>Email:</strong><br> ${engineer.email}</li>
                <li class="list-group-item"><strong>GitHub:</strong> ${engineer.github}</li>
                </ul>
            </div>
            </div>
    </div>`
}

function generateInternCard(intern) {
    return `
    <div class="card" style="width: 20rem;">
            <div class="card-body">
            <h5 class="card-title">Intern <i class="fa-solid fa-graduation-cap"></i></h5>
            <h6 class="card-subtitle mb-2 text-muted">${intern.name}</h6>
            <div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>ID:</strong> ${intern.id}</li>
                <li class="list-group-item"><strong>Email:</strong><br> ${intern.email}</li>
                <li class="list-group-item"><strong>School:</strong> ${intern.school}</li>
                </ul>
            </div>
            </div>
    </div>`
}

module.exports = team => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <script src="https://kit.fontawesome.com/a51943e840.js" crossorigin="anonymous"></script>
    <title>Team Generator</title>
</head>
<body>
    <header>My Team</header>
    <div class="team-cards">
        ${generateCards(team)}
    </div>
</body>
</html>`
};