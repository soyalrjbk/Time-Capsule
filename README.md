# Time Capsule

Write a message to your future self and lock it away until the date you choose.

<img width="1408" height="704" alt="Screenshot 2026-10-25 at 9 57 58 PM" src="https://github.com/user-attachments/assets/57af3e1b-0ebf-4b4a-8d56-1325be9349e2" />

## How It's Made:

**Tech used:**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Passport](https://img.shields.io/badge/Passport.js-34E27A?style=for-the-badge&logo=passport&logoColor=black)

Time Capsule is a full-stack app built on an Express/MongoDB authentication boilerplate. Users sign up and log in through Passport.js, and sessions keep each user's capsules private to their account. A capsule has a message and an unlock date, and it is stored in MongoDB and linked to the user who created it.

The core feature is the lock. When a user opens their dashboard, the server checks every capsule's unlock date against the current date. Capsules that are still sealed show only their unlock date, and their message never reaches the browser until the date has passed. Because this check runs on the server, someone can't find the content early by inspecting the page.

Users can create new capsules, view the ones that have unlocked, and delete capsules they no longer want.

## Optimizations

- Add email notifications so users are alerted the day a capsule unlocks
- Add a countdown on each sealed capsule showing the time left until it opens
- Let users attach images to a capsule
- Allow sending a capsule to a friend's account to unlock on a special date

## Lessons Learned:

Building Time Capsule taught me why access rules belong on the server and not in front-end code. Hiding a message with CSS or client-side JavaScript isn't real security, so I made the server decide what data each user is allowed to see. I also got more comfortable working with dates in JavaScript and MongoDB, and with modeling data so that each record belongs to a specific user.

## Installation

1. Clone the repo
2. Run `npm install`
3. Create a `config/database.js` file (or `.env`) with your MongoDB connection string
4. Run `node server.js`
5. Open `http://localhost:8080` in your browser

