Arcitechure:

Mongo.Express.React.Node (M.E.R.N.)

It is a functional component architecture that imports the main business logic components into the "Screen" components for layout purposes. For instance the CreatePostComponent will do most of the work, but will be imported to the CreatePostScreen in the Screens directory so that the page layout is set in the CreatePostScreen.

Most components are made in a reusable way utilizing inheritance.

The most complex component will be the PredictionInfo and UpcomingInfo components which digest the response objects from the sports API in to a way that can be properly displayed. These business logic components are fed in to the Prediction and UpcomingGames components respectively for layout reasons and finally placed either in the sidebar or their respective screens.

There are two schemas for the database that can be found in the backend > models. They are the user models and post models. Very simple stuff on that side. The routes are set up similarly. 

This app using Redux for state managment, all the reducers are fed to the store.js which is place in the provider for the App.


Setup:

1. Get MongoDB set up locally or on MongoDB's live databases, then configure server.js and .env.
2. Install node on localhost, use v16.0 or earlier, v17.0 is too new and breaks everything. Server runs either on env or PORT 5000.
3. From there you should run npm install in the main folder for downloading dependencies, then in the frontend folder for the React depenedencies.
4. Make sure you set up your Git remote to github and if you go to Heroku, from the dashboard you click on the app name > deploy > deploy from branch > choose branch > click deploy this branch. Very simple.


Useful notes:

- The API calls are done in the frontend to keep from CORs issues. They are located in the sportsAPIActions.js. They will be configured with Trevor's account apiKey.

- The cloudinary widget is an npm package and can be configured in the CreatePost.js in the Post Components directory. It is copy paste with all the comments from their site preserved for easy understanding.

- I did not have time for the following, JWT Token, PUT (on posts and users), and DELETE (also on posts and users). The way this is set up, it shouldn't be hard to implement, it is just time consuming. I would do this in the userRoutes. If you'd like to see how I've implemented this in a past project you can view this public repo: https://github.com/chrisrappa/onlinestore/tree/main/backend. 
