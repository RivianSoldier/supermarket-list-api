## Supermarket List API

API in Node.js using Express and Mongoose to connect a MongoDB Database.
The main objective is to help users who go to the supermarket and forget the items they need to buy.
This API organizes the users shopping list.

### Technologies

- Node.js
- Express
- Mongoose
- MongoDB
- Nodemon

### Requirements to run

- Node.js installed
- MongoDB instance running:
  Example: Running with Docker

```
docker run --name supermarket-list -p 27017:27017 -d mongo
```

### Steps to run

1. Clone the repo:

```
git clone https://github.com/RivianSoldier/supermarket-list-api.git
```

2. Navigate to the repo:

```
cd supermarket-list-api
```

3. Install the dependencies:

```
npm install
```

4. Run the API:

```
npm run start:dev
```

### Available endpoints

- [GET]/list-items
- [POST]/list-items
- [DELETE]/list-items/:id
- [PUT]/list-items/:id
