const getUserName = (state) => state.auth.user.name;

const getUserEmail = (state) => state.auth.user.email;

const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getLoadingUser = (state) => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getUserName,
  getUserEmail,
  getIsLoggedIn,
  getLoadingUser,
};
export default authSelectors;
