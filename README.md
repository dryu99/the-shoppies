# The Shoppies 🏆

**2021 Shopify challenge for Front-end Development**: Build a webpage that can search for movies and allow users to nominate their favourite films.

Check it out [here](https://dryu99.github.io/the-shoppies-2021/)!

<br>

### Tech Stack
- JavaScript
- React.js

I considered using TypeScript but decided against it because:
- The scope of the challenge was relatively small and I didn't want to overengineer.
- I don't have much experience using TypeScript with React and wanted to focus on shipping a functioning product on time.
- I figured I could come back to refactor the codebase to use TypeScript later on if it felt appropriate.

<br>

### Additional Features
- **Pagination**:   

  Supporting pagination was my highest priority because I felt it was important that users could see all available results for a given search. The OMDb API only returns 10 results max for each search request, so if pagination wasn't implemented, users may not be able to find their desired movies. For example, users might try searching for movies with a partially complete title, or might choose to browse all movies that contain a given word.
- **Debounced Search**:  

  I felt there was unnecessary overhead from making an OMDb API request every time the search input changed, since the request realistically only needed to be made once, when the user stops typing. After doing some research, I found out about debouncing and applied it to my search logic to help reduce unnecessary API requests and improve performance.
- **Save nominations if user leaves page**:

  Since the site is supposed to keep track of user selections, I thought it would be appropriate to persist their selections even after page close.
  
<br>

### Challenges
- Deciding how to handle state
- Implementing pagination and debounced search
- Reducing duplicated code between Nominations and SearchResults components

### Next Steps
Below is a list of things I would work on next if this had been a full-scale project with a longer timeline. I decided not to implement these features because I wanted to focus on delivering a functioning product on time and avoid overengineering.

- Refactor to TypeScript
- Write UI tests
- Manage state more cleanly with a library or hooks
- Show more metadata for each movie
- Add 'Card View' and 'List View' options for movie list components
- Give users the option to see more than 10 movies in the search results
- Add filters to search bar (e.g. year)
- Mobile responsiveness
- Better web responsiveness for certain scenarios (e.g. tiny screens)
- More styling ooo


