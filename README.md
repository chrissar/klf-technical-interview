# klf-technical-interview

To run the application, we have two ways to do it:

##### Using Docker:

1. Open a terminal window and navigate to the project root.
2. Run the following command: `docker-compose up -d`

##### Using regular npm:
Prerequisites:

You'll need to install nodemon globally. To do it, run `npm install -g nodemon`

1. Run the following command: `npm install`
2. a) To run a dev build that will reload when a change is made, run the following command: `npm run watch:dev`


   b) If you do not install nodemon, run the following command: `npm run dev` or `make dev` (you will need to manually relaunch the application at every change).
3. A simple build can be done using `npm run build` or `make build`
4. Cleaning your build can be done using `npm run clean` or `make clean`

##### Making calls

To make calls to the application, you can use Postman. Using the Postman application, import the collection and environment files found in the `postman` folder.

You'll find three requests: "Create User", "Get User(s)" and "Get User by ID".

"Get User(s)" is self-explanatory: you can get all users stored in the in-memory database. The endpoint is `/users`.

An example of a succesful request looks like this:

```
{
    "success": true,
    "users": [
        {
            "firstName": "Jonny",
            "lastName": "Smith",
            "email": "jonny@example.com",
            "password": "Password123",
            "_id": "R3uwhIQ6H9pZcSXE"
        }
    ],
    "count": 1,
    "message": ""
}
```
If you want to filter, you may add query filters to the request, either through the `Header(s)` option in Postman or by adding a query string to the request, such as `?firstName=Jonny`. The value of the property you're searching is not case sensitive, unless you're looking for a password or a specific ID.

If you want to get a user by ID, you can use the "Get User by ID" request. The endpoint is `/users/:userId`, where `:userId` is the ID you're looking for.

Inserting a new user can be done using the "Create User" request. The following is the structure of what we expect for the request body:

```
{
	"firstName": "Jonny",
	"lastName": "Smith",
	"email": "jonny@example.com",
	"password": "Password123"
}
```

The email needs to be unique. If you attempt to insert a user who has the same email address as another user, you will get the following error:

```
{
    "success": false,
    "message": {
        "errors": {
            "email": "This email already exists. Please use another one."
        }
    }
}
```

Otherwise, a successful insertion looks like this:

```
{
    "success": true,
    "entry": {
        "id": "R3uwhIQ6H9pZcSXE",
        "uri": "http://localhost:3000/users/R3uwhIQ6H9pZcSXE"
    }
}
```

##### Regarding security
The application is secured with JWT. For convenience, each Postman request is already secured with a JWT bearer token in the headers. If you need to make changes to the secret key, change the value of the "KLF" Postman environment `jwt_secret` property to the value of your choice. Then, you'll need open the `config/security.js` file and change the value of the `secret` property. Relaunch the application to apply the changes.