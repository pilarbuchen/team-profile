module.exports = teamData => {
  var cards = []

  for (let i = 0; i < teamData.length; i++) {
    if (teamData[i].getRole() === 'Manager') {
      var html = `
          <div class="card">
                <h2>${teamData[i].name}</h2>
                <h3>Manager <i class="fas fa-glasses"></i></h3>
                <p class="title">ID:${teamData[i].id} </p>
                <p><a href=${teamData[i].email} target="_blank">Email</a></p>
                <p>Office Number: ${teamData[i].officeNumber}</p>
          </div>
           `
      cards.push(html)
    } else if (teamData[i].getRole() === 'Intern') {
      var html = `
          <div class="card">
                <h2>${teamData[i].name}</h2>
                <h3>Intern <i class="fas fa-school"></i></h3>
                <p class="title">ID:${teamData[i].id} </p>
                <p><a href=${teamData[i].email} target="_blank">Email</a></p>
                <p>School Name: ${teamData[i].school}</p>
          </div>
           `
      cards.push(html)
    } else if (teamData[i].getRole() === 'Engineer') {
      var html = `
        <div class="card">
              <h2>${teamData[i].name}</h2>
              <h3>Engineer <i class="fab fa-wpbeginner"></i></h3>
              <p class="title">ID:${teamData[i].id} </p>
              <p><a href=${teamData[i].email} target="_blank">Email</a></p>
              <p><a href=${teamData[i].github} target="_blank">Git Hub Page</a></p>
        </div>
         `
      cards.push(html)
    }

  }

  const { example } = teamData || {};
  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="style.css">
    <body> 
  </head>
  <header>
  <div class="header">
  <h1>My Team</h1>
  <p>Meet my awesome team</p>
</div>
  </header>
  </br>
  </br> 
  <section class="cards">      
  ${cards}
  </section>
  </div>
  </body>
  </html>
  `
};