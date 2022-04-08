//packages need for this application
// const Employee = require('./lib/employee');
// const Engineer = require('./lib/engineer');
// const Intern = require('./lib/intern');
// const Manager = require('./lib/manager');


function generateHTML(data) {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Fizzy Fresh Productions</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    </head>
    <body>
    <section class="section">
        <div class="container has-text-centered">
        <h1 class="title">
            My Team
        </h1>
        <p class="subtitle">
            My team website!
        </p>
        </div>
        <div class="column is-one-third">
            <div class="card">
                <div class="card-content">
                    <div class="media-content has-text-centered">
                        <p class="title is-4">${data.name}</p>
                        <p class="subtitle is-6">${data.role}</p>
                    </div>
                </div>

                <div class="content has-text-centered">
                    <p>
                        ID: ${data.id}
                    </p>
                    <p>
                        Email: ${data.email}
                    </p>
                    <p>
                        Office Number: ${data.officeNum}
                    </p>
                </div>
            </div>
        </div>
    </section>

    <script src="/index.js"></script>
    </body>
    </html>
    `
}

module.exports = generateHTML;