![Logo of the project](./client/public/handshake.png)

# Handshake Project &middot; [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)
> Helping all students find meaningful careers

By: [Patrick Rivera](mailto:patrick.x.rivera@gmail.com)

[patrickrivera.io](https://patrickrivera.io)


## Getting Started

Clone down the repo and move into the directory.
```shell
git clone https://github.com/pxr13/handshake-project && cd handshake-project
```

Connect to a development Mongo instance if you need a DB. [Instructions here](https://studio3t.com/whats-new/how-to-connect-to-mlab/):

Install and run the server:
```shell
npm i && npm run dev
```

In a new tab, install and run the client:
```shell
cd client/ && npm i && npm start
```
You should now be taken to http://localhost:3000 and see the home screen. Enjoy!

##

## Database Schema
### `users`
| column name | data type | details               |
| ------------|:---------:| ---------------------:|
| id          | integer   | not null, primary key |
| username    | string    | not null, indexed     |
| created_at  | datetime  | not null              |

##

## API Reference
### `users`
- `GET /api/users` - return user information
- `POST /api/users` - create user

##

## Deploying to Heroku

[Install](https://devcenter.heroku.com/articles/heroku-cli) the heroku cli if you haven't already.

Once installed, create a new heroku app:
```shell
heroku create
```

Connect to a production Mongo instance if you need a DB. [Instructions here](https://devcenter.heroku.com/articles/mongolab#getting-your-connection-uri):

Then push your repo to heroku:
```shell
git push heroku master
```

Once your repo has been pushed, visit the heroku link generated from the last command. Enjoy!

##

## Contributing

 1. **Fork** the repo on GitHub
 2. **Clone** the project to your own machine
 3. **Commit** changes to your own branch
 4. **Push** your work back up to your fork
 5. Submit a **Pull request** so we can review your changes

NOTE: Be sure to merge the latest from "upstream" before making a pull request!
