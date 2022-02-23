# PHONE CATALOG APP

## Description 

Phone catalog app where you have a Homepage that displays some telephones, by clicking in each phone you get additional information of the phone. 

- Client side of the Phone Catalog App has been done using React.Js. Styling done using styled components. Spinner done using MUI. Responsive mobile app (380px screen).

Frontend is running on the port 3000 

- Server-side of the Phone Catalog App has been done using Node.Js, express, axios and MongoDB as a database where you can find 3 telephones.

Backend Server is running on the port 3005

In order to test the application you need to open one terminal for each repository and install node modules ( command: npm install)  after node modules are installed run the node package modules ( command: npm run).

## Server routes (API)


| **Method** | **Route**                          | **Description**                                              | Request  - Body                                          |
| ---------- | ---------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| `GET`      | `/`                                | Renders HomePage.                |                                                          |
| `GET`      | `/phones/:id`                           | Renders   PhoneDetailsComponent                                |                                                          |



## Phone model 


```javascript
{
  "brand": { type: String, required: true, unique: true },
  "image": {type: String, required: true}
  "title": {type: String, required: true}
  "description": {type: String, required: true}
  "color": {type: Array, required: true}
  "price": {type: Number, required: true}
}
```

## GitHub Repository Link: 



### Backend GitHub Repository: [Backend](https://github.com/jordiroca94/Phone-catalog-app-backend)

### Frontend GitHub Repository: [Frontend](https://github.com/jordiroca94/Phone-catalog-app-Frontend)
