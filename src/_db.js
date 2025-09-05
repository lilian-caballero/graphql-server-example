module.exports = {
  "books": [
    {
      "id": 1,
      "title": "The Awakening",
      "numberOfPages": 100,
      "authorId": 1
    },
    {
      "id": 2,
      "title": "City of Glass",
      "numberOfPages": 500,
      "authorId": 1
    },
    {
      "id": 3,
      "title": "The Hunger Games",
      "numberOfPages": 352,
      "authorId": 2
    },
    {
      "id": 4,
      "title": "The Hunger Games - Catching Fire",
      "numberOfPages": 499,
      "authorId": 2
    },
    {
      "id": 5,
      "title": "The Hunger Games - Mockingjay",
      "numberOfPages": 409,
      "authorId": 2
    }
  ],
  "characters": [
    {
      "id": 1,
      "name": "Katniss Everdeen",
      "age": 16,
      "bookIds": [
        3,
        4,
        5
      ]
    },
    {
      "id": 2,
      "name": "Finnick Odair",
      "age": 17,
      "bookIds": [
        4,
        5
      ]
    }
  ],
  "authors": [
    {
      "id": 2,
      "name": "Suzanne Collins"
    }
  ]
};