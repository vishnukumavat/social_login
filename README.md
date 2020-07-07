# Socionity Assignment

## Live Demo
 visit : https://vishnu-kumavat.000webhostapp.com/

## Configuration Setup
`STEP 1`
 Create an Project in an Firebase Console<br>
 https://console.firebase.google.com<br>
 ![alt text](https://i.ibb.co/W5XC6ZQ/image.png)<br>
 
 <div>&emsp;</div>
 
 `STEP 2`
 Visit the devloper sites given below and create a new project and generate 'AppId' and  'AppSecret'<br>
 https://developers.facebook.com/ <br>
 https://developer.twitter.com/<br>
 This AppId and AppSecret will be used to configure the firebase authentication page<br>
 <div>&emsp;</div>
 
 `STEP 3`
 Navigate to the Authentication-->Sign-in-method from the firebase console.<br>
 enable the facebook, twitter and enter the App Secret and AppId generated from step 2.
![alt text](https://i.ibb.co/HrPV2cQ/image.png)<br><div>&emsp;</div>
![alt text](https://i.ibb.co/Z10k6gV/image.png)<br>

<div>&emsp;</div>

`STEP 4`
Copy Paste the callback URL generated(as shown below) from firebase console to the particular developer sites at which you have created your project in `step 2`. <br>
![alt text](https://i.ibb.co/0hMsVS4/image.png)<br>
 <div>&emsp;</div>

`STEP 5`
Once the above steps are completed navigate to the settings in the firebase console and click on  'Users and permissions'<br>
![alt text](https://i.ibb.co/k3W7JX6/image.png)<br><div>&emsp;<div>
From 'Users and permissions' navigate to 'General' Tab and you will find your 'Web API Key' ,<br>
copy this key and note it somewhere so that it can be referenced whenever needed.<br>
![alt text](https://i.ibb.co/TrWvCxy/image.png)<div>&emsp;</div>
 Find the Authorised Domain from <br>
 FirebaseConsole --> Authentication --> Sign-in method -->Authorised domains
 copy this url(as shown below) and note it somewhere from which we will reference in next steps.
![alt text](https://i.ibb.co/fSz0Dyq/image.png)<br><div>&emsp;</div>

`STEP6`
Clone this repository 'social_login' on your local system.<br>
open the terminal in the directory in which this repository is cloned.<br>
Run command `npm install` this will install all the required dependencies listed in *package.json*
![alt text](https://i.ibb.co/yWw8VMN/image.png)

<div>&emsp;</div>
<br>

`STEP 7`
Open the file **App.js** from social_login/src/App.js<br>
Replace the *apiKey and authDomain* with the 'Web API Key' and 'Authorised Domain' on line `8` and `9`<br>
![alt text](https://i.ibb.co/q5rTq99/image.png)<div>&emsp;</div>
You are now all set with your configuration

## Running the project
Open the terminal in the directory where the project is stored.
Type the command `npm start`.
![alt text](https://i.ibb.co/gtdm72Z/image.png) <br>
<div>&emsp;</div>

If every thing goes well ,new tab will start in the browser with the project running on local server.

 ![alt text](https://i.ibb.co/CmjLTD3/image.png)
 
<div>&emsp;</div>

### Dependencies(packages) and references used
1) bootstrap 4 (https://getbootstrap.com/docs/4.0/getting-started/introduction/)
2) react-firebaseui (https://www.npmjs.com/package/react-firebaseui)
3) firebase (https://www.npmjs.com/package/firebase)



