<div align="center">

  <h3 align="center">Emil - Applicant task </h3>
    <div><a href="https://applicant-task.web.app/">Demo</a></div>
</div>

## Set up in local environment:

Open terminal, copy & paste the following command:

```
    mkdir emil_applicant_task
    cd emil_applicant_task
    git clone https://github.com/emil0519/applicant-task.git
    npm i
    npm run dev
```

Then open : [http://localhost:5173/](http://localhost:5173/)

## 💡 Key Features

1. Performance optimization

- Use useMemo hook to store processed data to prevent unnecessary rerender by storing it in useState.
- Import only necessary content from Material UI to minimize bundle size.
- Use debounce for search input to prevent frequent calculation.

2. Scalability

- Separation of concerns, splits logic between api fetching, data processing and UI. This may be a bit over-engineering for project in this scale but it could be expanded easily when there have lots of developers working on the same project.
- Using theme to ensure consistent use of colors among components.
- Typescript and use of enum, ensure consistent behavior for user to pick different options by controlling it through `SortEnum`
- Error handling, API error handle & provide default value when specific data is not found, e.g. in `sortData`
- Consistent naming conventions, boolean always start with `is`, array always end with `list`

3. Accessibility

- Semantic HTML, use `header`,`p`,`select` etc to help screen reader user to locate html content.
- Additional label and id for implicit buttons.
- Ensure keyboard accessibility for error button

4. RWD

## Improvement to be make

If this project will be expanded, I suggest to make the following improvements:

**Functional**

1. Auto-collapse header to align with XTERRA current design
2. Internationalization for users from different background
3. A different choice of hosting service base on commercial need

**Engineering**

1. Frontend unit testing for select, table and sorting function
2. Consider using data fetching library like React Query to manage cache and error handling
3. State management library if more complex actions are needed
4. Generalize fetching function to perform specific action when a certain error like 500 is received, but aligning with backend developer on convention of status code is necessary.
5. Use react-window to only render a portion of data and avoid excessive rendering time when dealing with large amount of data
6. Configurate path alias for better import statement

## 🛠 Tech Stack

- **React** : Mature solution for Single page application.
- **Typescript** : Superset of React, best for scalable project to perform type check before runtime.
- **Material UI** : Highly customizable & powerful UI library, enable atomic CSS property.
- **Firebase** : Easy to use hosting service.
