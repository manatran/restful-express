## RESTful API using Express.js

This project contains complete CRUD functionality using Express.js and mongoDB with Mongoose.

## Purpose

This repository is an exercise to learn development with Node.js and some of its modules. Among these modules are Express.js and Mongoose. It is also an excellent opportunity to get to know MongoDB in the back-end and Angular.js in the front-end. The contents of this repository are loosely based on a tutorial by [Traversy Media](https://youtu.be/eB9Fq9I5ocs) on YouTube.

## Installation and setup

Clone the repository

```
git clone https://github.com/manatran/restful-express.git
```

Navigate into the directory

```
cd restful-express
```

Install the node modules

```
npm install
```

Start the Node.js server using the globally installed nodemon module

```
npm install -g nodemon
nodemon
```

Next, navigate to your installation of MongoDB and initialize the service

```
cd mongodb/bin
net start MongoDB
mongo
```

When you're done with the database, stop the service
```
^C
net stop MongoDB
```

## Contributors

* **Manaus Transez**

## License

Licensed under the MIT license.