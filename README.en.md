**Read in other languages: [Українська](README.md), [English](README.en.md).**

| Test task GoIT

## Used resources

- The project was compiled with [create-react-app](https://create-react-app.dev/).
- Components are created using [MUI](https://mui.com/material-ui/getting-started/overview/)
- Used as `backend` [mockapi.io](https://mockapi.io/)
- Data stored in `localStorage`

### Implemented:

1. `Home` page with a short description
2. The `Tweets` page with user's cards
3. Pagination
4. `Back` button to return to the previous page
5. `Dropdown` with filter by `follow` status
6. Redirection in case of non-existent `route`
7. `Load more` button
8. State of `filter` stored when updating the page or switching
9. Data stored in LocalStorage

## Tech Stack

![JavaScrip](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![MUI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)

# [View a demo](https://https://andriikalinchuk.github.io/followers-task/)

---

# Test task:

**Purpose:** to create tweet cards and add interactivity at the click of a button.

![The general appearance of the grater in two states - Follow та Following](./assets/prev-0.png)

<sub>The general appearance of the grater in two states - `Follow` та `Following`</sub>

## Performance criteria

- The layout is fixed in `px`, semantic and valid.
- There are no errors in the browser console.
- The work is done on native `JS` using assemblers or on `React`.
- Interactivity works according to the terms of reference.
- The code is formatted and uncommented.
- A `README.md` should be described in the repository.

## Technical task

1. According to the
   [layout](https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?node-id=0-1&t=uUlaHyxCuOAc20AW-0)
   you need to implement user cards.
2. When you click on the `Follow` button, the text changes to `Following`. The color of the button
   also changes. And yours is added to the number of followers. That is, the initial number is
   100,500 followers. When you click on the button, it will be 100,501.
3. When the page is updated, the final result of the user's actions should be recorded. That is, if
   you click on button and refresh the page - the button still remains in `Following` state with the
   corresponding color, and the number of followers does NOT decrease to the initial value.
4. When you click the button again, its text and color change to their original state. Also the
   number of followers also changes. It decreases by 1 (100,500).
5. In the code, the number 100,500 must be written with one value (100500). In the UI - displayed
   with a comma (100,500).
6. Create your personal backend for development using the UI service `mockapi.io`. Create a resource
   `users`.
7. Use the resource constructor and describe the user object as described below.

### User

1. Create a local database with the following fields:

   - `id`,
   - `user`,
   - `tweets`,
   - `followers`,
   - `avatar`

<sub><i>(see the code is below).</i></sub>

2. Avatar images must be specified with separate urls in the `avatar` property. You can pick them up
   independently
3. There should be at least 12 users with different data (at your discretion) in the database. Make
   pagination. On one the pagination page should display at least 3 tweets, the rest should be
   loaded when clicked `Load More` The rest of the requirements are similar to the technical task
   described above.

```json
[
  {
    "user": "Elon Musk",
    "tweets": 777,
    "followers": 100500,
    "avatar": "url.jpg",
    "id": 1
  }
]
```

Template: https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?node-id=0%3A1&t=VoiYTfiXggVItgVd-1

## Additional task

> You will be awarded additional points for performance! Without completing an additional task, you
> will not be able to get the maximum score.

- Create routing using `React Router`.
- The application must have the following routes. If the user entered by a non-existent route, his
  must be redirected to the home page.
- `'/'` – component `Home`, home page. (Styling and design at your discretion);
- `'/tweets’` - component `tweets`, page displaying tweets The `tweets` page must have `Back`
  button, which leads to the main page.

## Tasks with an asterisk

Add filtering. It should be a `Dropdown` with 3 options (the layout is up to you): `show all`,
`follow`, `followings`

- `show all` - show all tweets.
- `follow` - show tweets that have status `follow`.
- `followings` - show tweets that have status `following`
