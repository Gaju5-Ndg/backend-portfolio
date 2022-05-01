import dotenv from 'dotenv-flow';
dotenv.config();

const config = {
  swagger: '2.0',
  info: {
    version: '1.0.0.',
    title: 'Portifolio APIS documentation',
    description: '',
  },
  
  schemes: ['http', 'httpS'],
  securityDefinitions: {
    JWT  : {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
    },
  },
  tags: [
    {
      name: 'Portifolio APIS documentation',
    },
  ],
  consumes: ['application/json'],
  produces: ['application/json'],
  paths:{
  "/": {
        "get": {
            "tags": ["home"],
            "summary": "Default message on server",
            "operationId": "",
            "requestBody": {
            "description": "default router should return message",
            "content": {
                "application/json": {
                "schema": {}
                },
                "application/xml": {
                "schema": {}
                }
            },
            "required": false
            },
            "responses": {
            "200": {
                "description": "Message of successful request",
                "content": {}
            }
            },
            "x-codegen-request-body-name": "body"
        }
  },
  "/api/users/getAll": {
      "get": {
          "tags": ["users"],
          "summary": "retrieves all user from the database",
          "operationId": "",
          "security": [{
            "JWT": [],
          }],
          "requestBody": {
          "description": "default router should return message",
          "content": {
              "application/json": {
              "schema": {}
              },
              "application/xml": {
              "schema": {}
              }
          },
          "required": false
          },
          "responses": {
          "200": {
              "description": "Message of successful request",
              "content": {}
          }
          },
          "x-codegen-request-body-name": "body"
      }
  },
  "/api/users/signup": {
    "post": {
      "tags": ["users"],
      "summary": "creating a new user",
      "description": "",
      "produces": ["application/json"],
      "parameters": [
        {
          "name": "user information",
          "in": "body",
          "description": "The user's info",
          "required": true,
          "schema": {
            "type": "object",
             "properties":{
              "names": {
                "type": "string",
                "example": "yubahwe"
              },
              "email": {
                "type": "string",
                "example": "clem@gmail.com"
              },
              
              "password": {
                "type": "string",
                "example": "admin12345"
              },
             }
          }
        }
      ],
      "responses": {
        "201": {
          "description": "account has been created "
        },
        "400": {
          "description": "Incorrect information"
        },
        "403": {
          "description": "Email is already in use"
        }
      }
    },
    "x-codegen-request-body-name": "body"
  },
  "/api/users/signin": {
    "post": {
      "tags": ["users"],
      "summary": "log in user",
      "description": "",
      "security": [{
        "JWT": [],
      }],
      "produces": ["application/json"],
      "parameters": [
        {
          "name": "user information",
          "in": "body",
          "description": "The user's name",
          "required": true,
          "schema": {
            "type": "object",
             "properties":{
              "email": {
                "type": "string",
                "example": "shema@gmail.com"
              },
              "password": {
                "type": "string",
                "example": "admin12345"
              },
             }
          }
        }
      ],
      "responses": {
        "201": {
          "description": "you are logged in succesfully"
        },
        "400": {
          "description": "Incorrect password or email"
        },
        "403": {
          "description": "Incorrect password or email"
        }
      }
    },
    "x-codegen-request-body-name": "body"
  },
  "/api/users/{id}":{
    "get": {
        "tags": ["users"],
        "summary": "get user by id",
        "parameters":[
         {
            "in": "path",
            "name": "id",
            "type": "string",
            "required": true,
            "description": "id of user"
          }
        ],
        "operationId": "",
        "security": [{
          "JWT": [],
        }],
        "requestBody": {
        "description": "default router should all articles that were created",
        "content": {
            "application/json": {
            "schema": {}
            },
            "application/xml": {
            "schema": {}
            }
        },
        
        "required": false
        },
        "responses": {
        "403": {
            "description": "message of request when user is not found ",
            "content": {}
        },
        "200": {
            "description": "Message of successful request",
            "content": {}
        }
        },
        "x-codegen-request-body-name": "body"
    }
  },
  "/users/delete/{id}":{
    "delete": {
        "tags": ["users"],
        "summary": "deleting a user",
        "parameters":[
         {
            "in": "path",
            "name": "id",
            "type": "string",
            "required": true,
            "description": "id of user"
          }
        ],
        "operationId": "",
        "security": [{
          "JWT": [],
        }],
        "requestBody": {
        "description": "deleting a user from the database",
        "content": {
            "application/json": {
            "schema": {}
            },
            "application/xml": {
            "schema": {}
            }
        },
        
        "required": false
        },
        "responses": {
        "403": {
            "description": "message of request when user not deleted ",
            "content": {}
        },
        "200": {
            "description": "Message of successful request",
            "content": {}
        }
        },
        "x-codegen-request-body-name": "body"
    }
  },
  
  "/api/post/post": {
    "post": {
      "tags": ["post"],
      "summary": "creating a new post",
      "description": "",
      "security": [{
        "JWT": [],
      }],
      "produces": ["application/json"],
      "parameters": [
        {
          "in": "path",
          "name": "id",
          "type": "string",
          "required": true,
          "description": "neww article"
        },
        {
          "name": "post information",
          "in": "body",
          "description": "The post's description",
          "required": true,
          "schema": {
            "type": "object",
             "properties":{
              "title": {
                "type": "string",
                "example": "brain tumor"
              },
              "content": {
                "type": "string",
                "example": "hfhfbnvnnnvnv"
              },
             
             }
          }
        }
      ],
      "responses": {
        "201": {
          "description": "post created successfully"
        },
        "400": {
          "description": "Incorrect information"
        },
      }
    },
    "x-codegen-request-body-name": "body"
  },

  "/api/post/getAll": {
    "get": {
        "tags": ["post"],
        "summary": "retrieves all posts from the database",
        "operationId": "",
        "security": [{
          "JWT": [],
        }],
        "requestBody": {
        "description": "default router should return message",
        "content": {
            "application/json": {
            "schema": {}
            },
            "application/xml": {
            "schema": {}
            }
        },
        "required": false
        },
        "responses": {
        "200": {
            "description": "Message of successful request",
            "content": {}
        }
        },
        "x-codegen-request-body-name": "body"
    }
},

"/post/{id}":{
  "post": {
      "tags": ["post"],
      "summary": "get post by id",
      "parameters":[
       {
          "in": "path",
          "name": "id",
          "type": "string",
          "required": true,
          "description": "id of post"
        }
      ],
      "operationId": "",
      "security": [{
        "JWT": [],
      }],
      "requestBody": {
      "description": "default router should all articles that were created",
      "content": {
          "application/json": {
          "schema": {}
          },
          "application/xml": {
          "schema": {}
          }
      },
      
      "required": false
      },
      "responses": {
      "403": {
          "description": "message of request when post is not found ",
          "content": {}
      },
      "200": {
          "description": "Message of successful request",
          "content": {}
      }
      },
      "x-codegen-request-body-name": "body"
  }
},

"/post/deletePost/{id}":{
  "delete": {
      "tags": ["post"],
      "summary": "deleting a post",
      "parameters":[
       {
          "in": "path",
          "name": "id",
          "type": "string",
          "required": true,
          "description": "id of post"
        }
      ],
      "operationId": "",
      "security": [{
        "JWT": [],
      }],
      "requestBody": {
      "description": "deleting a post from the database",
      "content": {
          "application/json": {
          "schema": {}
          },
          "application/xml": {
          "schema": {}
          }
      },
      
      "required": false
      },
      "responses": {
      "403": {
          "description": "message of request when user not deleted ",
          "content": {}
      },
      "200": {
          "description": "Message of successful request",
          "content": {}
      }
      },
      "x-codegen-request-body-name": "body"
  }
},

"/comment/addComment":{
  "post": {
      "tags": ["comment"],
      "summary": "Add a new Comment",
      "parameters":[
       {
          "in": "path",
          "name": "id",
          "type": "string",
          "required": true,
          "description": "new comment"
        }
      ],
      "operationId": "",
      "security": [{
        "JWT": [],
      }],
      "requestBody": {
      "description": "Add new comment",
      "content": {
          "application/json": {
          "schema": {}
          },
          "application/xml": {
          "schema": {}
          }
      },
      
      "required": false
      },
      "responses": {
      "403": {
          "description": "message of request when user not deleted ",
          "content": {}
      },
      "200": {
          "description": "Message of successful request",
          "content": {}
      }
      },
      "x-codegen-request-body-name": "body"
  }
},

"/comment/delete/{id}":{
  "delete": {
      "tags": ["comment"],
      "summary": "deleting a comment",
      "parameters":[
       {
          "in": "path",
          "name": "id",
          "type": "string",
          "required": true,
          "description": ""
        }
      ],
      "operationId": "",
      "security": [{
        "JWT": [],
      }],
      "requestBody": {
      "description": "deleting a comment from the database",
      "content": {
          "application/json": {
          "schema": {}
          },
          "application/xml": {
          "schema": {}
          }
      },
      
      "required": false
      },
      "responses": {
      "403": {
          "description": "message of request when user not deleted ",
          "content": {}
      },
      "200": {
          "description": "Message of successful request",
          "content": {}
      }
      },
      "x-codegen-request-body-name": "body"
  }
},

"/comment/getAll/{id}":{
  "get": {
      "tags": ["comment"],
      "summary": "get all comments",
      "parameters":[
       {
          "in": "path",
          "name": "id",
          "type": "string",
          "required": true,
          "description": ""
        }
      ],
      "operationId": "",
      "security": [{
        "JWT": [],
      }],
      "requestBody": {
      "description": "getting all comments from the database",
      "content": {
          "application/json": {
          "schema": {}
          },
          "application/xml": {
          "schema": {}
          }
      },
      
      "required": false
      },
      "responses": {
      "403": {
          "description": "message of request when user not deleted ",
          "content": {}
      },
      "200": {
          "description": "Message of successful request",
          "content": {}
      }
      },
      "x-codegen-request-body-name": "body"
  }
},

  },

  
};


export default config;