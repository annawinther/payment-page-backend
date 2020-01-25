# Payment Page Backend

```json
"version": "1.0"
"description": "PAYMENT PAGE REST API"
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for contribution and testing purposes.

## Installing

- Clone Repository
  `$ git clone https://github.com/annawinther/payment-page-backend.git`

- Change Directory
  `$ cd payment-page-backend`

- Install Node Modules
  `$ npm i`

- To start API
  `$ npm start`
  or `$ npm run server`

## Request & Response Examples

### Sample Response

Request Success ( **200 - OK** || **201 - CREATED** )

```json
{
  "message": "Success message",
  "key": "data"
}
```

Request Error ( **400 - Bad Request** || **404 - Not Found** || **403 - Unauthorized** || **500 - Internal Server Error** )

```json
{
  "error": "Error message"
}
```

### API Endpoints

| ENDPOINT                                                       | DESCRIPTION             |
| -------------------------------------------------------------- | ----------------------- |
| [GET /](#get)                                                  | Base URL                |
| [POST /api/auth/register](#post-apiauthregister)               | Register new User       |
| [POST /api/auth/login](#post-apiauthlogin)                     | Login for User          |
| -------------------------------------------------------------- | ----------------------  |
| [POST /api/products](#post-apiproducts)                        | Create a pruduct        |
| [GET /api/products](#get-apiproducts)                          | View all proucts        |
| [GET /api/products/:id](#get-apiproductsId)                    | View one single product |
| [PUT /api/products/:id](#put-apiproductsId)                    | Edit a product          |
| [DELETE /api/products/:id](#delete-apiproductsId)              | Delete a product        |
| -------------------------------------------------------------- | ----------------------  |

#### GET /

Response body:

```json
{
  "message": "Welcome to PaymentPgae API"
}
```

## Auth

#### POST /api/auth/register

_**Description**: Creates a new User Account

Request Body:

```json
{
	"name": "testuser",
	"password": "testuser123",
	"email": "testuser@email.com"
}
```

Response Body:

```json
{
    "users": {
        "id": 18,
        "name": "testuser",
        "email": "testuser@email.com",
        "created_at": "2020-01-25 16:07:43",
        "stripe_user_id": null,
        "stripe_public_key": null,
        "refresh_token": null,
        "access_token": null
    }
}
```

#### POST /api/auth/login

_**Description**: Returns an Access token

Requset Body: 

```json
{
	"name": "testuser",
	"password": "testuser123"
}
```
Response Body:

```json 
{
    "message": "Welcome testuser. You're logged in!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE4LCJuYW1lIjoidGVzdHVzZXIiLCJpYXQiOjE1Nzk5Njg1NzIsImV4cCI6MTU4MDA1NDk3Mn0.Jcjl_goSJas7_li0_-rDF9pf39tjq6SflSNSm8uKeKg"
}
```

## Products

## POST /api/products

_**Description**: Creates a new project for user

Request Body: 

```json
 {
        "name": "Test",
        "description": "Test to update Readme",
        "currency": "NOK",
        "price": 2020,
        "user_id": 2
 }
```
Response Body:

```json
{
    "prod": {
        "id": 6,
        "name": "Test",
        "description": "Test to update Readme",
        "currency": "NOK",
        "price": 2020
    }
}
```

## GET /api/products 

_**Description**: Gets all products belonging to that user

Request Body: 

```json
{}
```


Response Body:

```json
[
    {
        "id": 1,
        "name": "Test product",
        "description": "this is a test by test",
        "currency": "GBP",
        "price": 3000
    },
    {
        "id": 2,
        "name": "Currency test anna",
        "description": "testing UPDATE for second time!!!",
        "currency": "NOK",
        "price": 4000
    },
    {
        "id": 3,
        "name": "Currency test Peter",
        "description": "testing UPDATE",
        "currency": "NOK",
        "price": 4000
    },
    {
        "id": 5,
        "name": "Currency test Pdter",
        "description": "testing if currency is unique",
        "currency": "NOK",
        "price": 4000
    },
    {
        "id": 6,
        "name": "Test",
        "description": "Test to update Readme",
        "currency": "NOK",
        "price": 2020
    },
    {
        "id": 7,
        "name": "Test1",
        "description": "Test1 to update Readme",
        "currency": "NOK",
        "price": 2120
    },
    {
        "id": 8,
        "name": "Test12",
        "description": "Test2 to update Readme",
        "currency": "NOK",
        "price": 2020
    }
]
```

## GET /api/products/:id

_**Description**: Gets a specified productby its id

Request Body: 

```json
{}
```

Response Body:

```json
{
    "product": {
        "id": 1,
        "name": "Test product",
        "description": "this is a test by test",
        "currency": "GBP",
        "price": 3000
    }
}
```

## DELETE /api/products/:id

_**Description**: Deletes a product 

Request Body: 

```json
{}
```

Response Body:

```json
{
    "prod": 1
}
```

## PUT /api/products/:id

_**Description**: Updates an existing product 

Request Body:

```json
{
        "name": "Test For Updating",
        "description": "Updating the product",
        "currency": "NOK",
        "price": 2011
}
```
Response Body: 

```json
{
    "prod": 1
}
```


## Technologies

- Node | Express | bcryptjs | knex | SQLite | jsonwebtoken