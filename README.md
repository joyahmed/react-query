What ?
React Query is a library for fetching data in a React application

Why?
1. Since React is a UI library, there is no specific pattern for data fetching
2. useEffect hook for data fetching and useState hook to maintain component state like loading, error or resulting data
3. If the data is needed throughout the app, we tend to use state management libraries
4. Most of the state management libraries are good for working with client state.
   Ex: 'theme' for the application / whether a modal is open
5. State management libraries are not great for working with asyncrhonous or server state


Client vs Server State

Client State
Persisted in your app memory and accessing or updating it is syncrhonous

Server State
Persisted remotely and requires asynchronous APIs for fetching or updating

Has shared ownership

Data can be updated by someone else without your knowledge

UI data may not be in sync with the remote data

Challenging when you have to deal with caching, deduping multiple requests for the same data, updating stale data in the background, perfromance optimizations, etc
