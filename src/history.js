// history.js

import { createBrowserHistory } from "history";

const history = createBrowserHistory();
// Cet current location
const location = history.listen((location, action) => {
  console.log(action, location.pathname, location.state);
});

export default history;
