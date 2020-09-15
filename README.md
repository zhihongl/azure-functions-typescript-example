# azure-functions-typescript

A typescript Azure functions example

# start the project, by typing

```
npm install
```

```
npm run start
```

# Project Explaination

1. home page which is http://localhost:7071, two links can be find here.
2. image page which is on http://localhost:7071/home, and it display a random page whose url is get from backend API
3. getting backend api which is on http://localhost:7071/api/image, and a image url will be printed out.

as

Functions:

    HomePage: [GET,POST] http://localhost:7071//

    GalleryHome: [GET] http://localhost:7071//home

    BackendAPI: [GET] http://localhost:7071//api/image
