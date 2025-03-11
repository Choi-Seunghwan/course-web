export const scrollTop = () => {
  const appContainer = document.getElementById("app-container");

  if (appContainer) {
    appContainer.scrollTop = 0;
  }
};
