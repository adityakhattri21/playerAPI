# Players API

This is a simple RESTful API for managing players using Node.js, TypeScript, Mongoose, and MongoDB.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/players-api.git
   
2. Navigate to the project directory
```bash
cd players-api
```
3. Install dependencies:
```bash 
npm install
```
4. Configure MongoDB connection:
   1. Create a .env file in the root directory.
   2. Add your MongoDB connection string: MONGODB_URI=your_mongodb_connection_string

## Usage

1. **Build the TypeScript code:**

   ```bash
   npm run build
   ```
2. **Run The Command:**
    ```bash
    npm start
    ```

## API Routes

### Add Player

- **Endpoint:** `POST /players`
- **Description:** Add player data.
- **Example Request:**

  ```json
  {
    "name": "Sachin Tendulkar",
    "country": "IN",
    "score": 120
  }

### Get All Players

- **Endpoint:** `GET /players`
- **Description:** Get all players in descending order of score. Use the `sort=asce` query parameter to get data in ascending order.
- **Example Response:**

  ```json
  [
    {
      "_id": "5f1fdbe341b78abefc587f3e",
      "name": "Virat Kohli",
      "country": "IN",
      "score": 100,
      "__v": 0
    },
    // ... other players
  ]
### Get Player by Rank

- **Endpoint:** `GET /players/rank/:rank`
- **Description:** Get details of a player by their rank.Players are ranked based on there score.
- **Example Response:**

  ```json
  {
    "_id": "5f1fdbe341b78abefc587f3e",
    "name": "Virat Kohli",
    "country": "IN",
    "score": 100,
    "__v": 0
  }
### Update Player

- **Endpoint:** `PUT /players/:id`
- **Description:** Update player data by ID. Only name and score
- **Example Request:**

  ```json
  {
    "score": 150
  }
### Delete Player

- **Endpoint:** `DELETE /players/:id`
- **Description:** Delete a player by their ID.
- **Example Response:**

  ```json
  {
    "message": "Player deleted successfully"
  }
### Get Random Player

- **Endpoint:** `GET /players/random`
- **Description:** Get data of a random player.
- **Example Response:**

  ```json
  {
    "_id": "5f1fddab41b78abefc587f3f",
    "name": "Sachin Tendulkar",
    "country": "IN",
    "score": 150,
    "__v": 0
  }

