<h1 align="center">
  Face Recognition App (SERVER) <br> - 
  
  <a href="https://ibb.co/4VdGW63"><img src="https://i.ibb.co/DRpy4xT/fr-screenshot.jpg" alt="fr-screenshot" border="0"></a>
  
  
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/edu2andrade/face-recognition-api">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/edu2andrade/face-recognition-api?color=%2304D361">
</h1>

 ## 💻 About
 
 ### Sign in and give the alien a link of a picture and he's try to detect faces on image
 
 #### Technologies used in this project

- Create React App
- Javascript & JSX
- Tachyons
- Clarifai API
- NodeJS
- Express
- PostgreSQL
- BcryptJS
- Knex

#### See the live site here --> [Face Recognition App](https://edu-recognition-app.herokuapp.com/)

### Instructions to play in your local enviroment:

Fork and clone this repo and the Front --> [Face Recognition App](https://github.com/edu2andrade/face-recognition-app)

In the front:
On SubmitSignIn in Signin.js, Register.js and App.js, configure the fetch calls to your localhost
On package.json, change "start" script to: "react-scripts start"

On server:
On server.js change the knex to connect your database, in my case I use PGAdmin.
...and in image.js you must add your own Clarifai API Key, you can grab your key [here](https://www.clarifai.com/), it's free.

Then:

- Run --> npm install
- Start your Database
- Start the Server, run --> npm start
- Start the Front, run --> npm start

---

## 📝 License

This project is under --> [MIT License](./LICENSE).


## 🦸 Author

Made with ❤️ by Eduardo Andrade


Contact me --> [![Gmail Badge](https://img.shields.io/badge/-edu2andrade@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:edu2andrade@gmail.com)](mailto:edu2andrade@gmail.com)

