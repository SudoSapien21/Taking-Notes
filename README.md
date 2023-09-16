# Taking-Notes


AS A small business owner 
I WANT to be able to write and save notes 
SO THAT I can organize my thoughts and k
eep track of tasks I need to complete. 

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Getting Started
he following HTML routes should be created:
GET /notes should return the notes.html file.
GET * should return the index.html file.
The following API routes should be created:
GET /api/notes should read the db.json file and return all saved notes as JSON.
POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

### Prerequisites
- Node.js and the following npm dependencies: express,  

### Installation
1. Clone the repository
2. Navigate to the project directory on your machine
3. Install Node.js
4. Create a package.json file: `npm init`
5. Install the required dependencies: `npm install`

## Usage
1. Open up a terminal window
2. Connect to server: 'npm start'
3. Open your web browser and navigate to `http://localhost:3000` (or the specified port)
4.

## Features
1. Create Notes
2. Save Notes
3. Delete Notes

## Technologies Used
- Node.js
- Express.js
- Heroku

## Contributing
Contributions are welcome! If you find any issues or want to enhance the project, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

## Questions
For any questions, please contact us:

GitHub: 
[https://github.com/SudoSapien21] 
