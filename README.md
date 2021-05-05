# sotoaso


## Description
> This is a project folder for a blog created for the outdor enthusiast.

___
## Getting Started

To get started you will need to install dependencies:
```console
user@machine:~/sotoaso$ npm i 
```

To continue with the following steps, it is imperative that you have environment variables setup:
```console
user@machine:~/sotoaso$ touch .env
```
In the `.env` file you will need to list the following variables:
```bash
DATABASE_LOCAL_URL=postgres://<username>:<password>@127.0.0.1:5432/<database_name>
REACT_APP_ACCESS_TOKEN_SECRET=<hexideciml_string>
```
*Note: You will need to create a psql database on your local machine before running this project. Feel free to call it whatever you like and initialize it in the `.env` file.*

To start the initial migrations run the following command:
```console
user@machine:~/sotoaso$ npm run migrate
```

In case you have to rollback you can run the following command: 
```console
user@machine:~/sotoaso$ npm run rollback
```

To seed the database, run the following command:
```console
user@machine:~/sotoaso$ npm run seed
```

Finally, to run the server and interact with the interface, run the following commands, in separate terminals:
```console
user@machine:~/sotoaso$ npm run serve
```
```console
user@machine:~/sotoaso$ npm run dev
```
*Note: This project will run on `localhost:9000` and `localhost:3000`*

___
## API Endpoints & Routes
Currently, this project only contains Hike data which we can represent as Hike objects, with various properties. Please check back for further expansions to the database, API endpoints/routes and available objects.

### Routes
```/api/users/```
- GET ```/```
- GET ```/:id```
- POST ```/signup```
- POST ```/login```
- POST ```/logout```

```/api/posts/```
- GET ```/```
- GET ```/:id```
- POST ```/```

```/api/activity-types/```
- GET ```/```

___
## Front-End Interface
The user interface allows for users to view blog posts, sign-up, login, create a post and, logout.
___
## Contributors
* Yoshio Hasegawa


## Support / Feedback / Bugs
For support, feedback or, if you've found a bug you may contact the primary contributor here: [Yoshio Hasegawa](mailto:yoshio.seisuke.hasegawa@gmail.com).
