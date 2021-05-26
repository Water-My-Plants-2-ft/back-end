# backend

Water My Plants

# Documentation:

# Base URL for Deployed API

https://water-my-plants-web41.herokuapp.com/api

# Endpoints
| Request | URL               | Description |
| ------- | ----------------- | ----------- |
| POST    | /auth/register    | register as a new user |
| POST    | /auth/login       | login as an existing user |
| GET     | /plants           | gets an array of all plants |
| GET     | /users/:id        | get a user by user id | (REQUIRES TOKEN) |
| POST    | /plants           | create a new plant | (REQUIRES TOKEN) |
| GET     | /plants/:id       | gets info for plant with given id (REQUIRES TOKEN) |
| PUT     | /users/:id        | edits info for user with given id (REQUIRES TOKEN) |
| PUT     | /plants/:id       | update a plants info with given id (REQUIRES TOKEN) |
| DELETE  | /users/:id        | deletes user with given id (REQUIRES TOKEN) |
| DELETE  | /plants/:id       | deletes plant with given id (REQUIRES TOKEN) |


# Table Requirements

## Users
| Name         | Type    | Required | Unique | Notes |
| ------------ | ------- | -------- | ------ | ----- |
| id           | integer | yes      | yes    | user id (auto generated by API) |
| username     | string  | yes      | yes    | user's username |
| password     | string  | yes      | no     | user's password |
| phone        | string  | yes      | no     | user's phone number |

## Plants
| Name          | Type    | Required | Unique | Notes |
| ------------- | ------- | -------- | ------ | ----- |
| id            | integer | yes      | yes    | plant id (auto generated by API) |
| nickname      | string  | yes      | no     | plant nickname |
| species       | string  | yes      | no     | plant species |
| h20_frequency | string  | yes      | no     | watering frequency

user's id associated with plant - foreign key (will auto populate when new plant is created) 

### SEED DATA/USERS
``` 
{
      user_id: 1,
      username: 'Bruce Wayne',
      password: 'password',
      phone: '123-456-7890',
    },
    {
      user_id: 2,
      username: 'Edith Smith',
      password: 'password',
      phone: '234-567-8901',
    },
    {
      user_id: 3,
      username: 'Lily Mays',
      password: 'password',
      phone: '345-678-9012',
    },
```
### SEED DATA/PLANTS
```
{
      plant_id: 1,
      nickname: 'boston fern',
      species: 'Nephrolepsis exaltata',
      h2ofrequency: '7',
      user_id: 1,
    },
    {
      plant_id: 2,
      nickname: 'rubber plant',
      species: 'ficus elastica',
      h2ofrequency: '4',
      user_id: 2,
    },
    {
      plant_id: 3,
      nickname: 'peace lily',
      species: 'Spathiphyllum wallisii',
      h2ofrequency: '4',
      user_id: 3,
    },
    {
      plant_id: 4,
      nickname: 'snake plant',
      species: 'Sansevieria trifasciata',
      h2ofrequency: '4',
      user_id: 1,
    },
    {
      plant_id: 5,
      nickname: 'spider plant',
      species: 'Chlorophytum comosum',
      h2ofrequency: '3',
      user_id: 1,
    },
    
