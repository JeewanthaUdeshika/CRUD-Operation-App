To create this project, first install
    1. express - for nodejs frameworks
    2. morgan
    3. nodemon - for prevent refreshing
    4. ejs - template engine (to create dinamic html)
    5. body-parser - for data operations
    6. dotenv - to secure database credential from other people
    7. mongoose - mongoddb support
    8. axios - easy to make a request using express

by typing following command
    npm -i express morrgan nodemon ejs body-parser dotenv mongoose axios

Set nodemon in start element in package.json

Then  make folder structure (project structure)
    1. assets
        img
        js
        css.
    2. views with all html  files.
    3. server witth all the server side files,
        controller (resourses to the user)
        model (all the schems with mongo)
        databse
        routes
        services

To make configs in secure, we have to make config.env file

Here the MongoDB Atlas is used as a cloud server
    * To use it, first create project and then create cluster by adding username and password
    * Then in network access tab, add  IP  address of user (if you allow anyone to access use anywhere button)
    * Then after going to clusters, connect to the application by copy the link and paste it to the config.env with variable