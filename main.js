function getRandomUser() {
  // Generate a random number between 1 and 10
  const randomId = Math.floor(Math.random() * 10) + 1;

  // Fetch user data from JSONPlaceholder API
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      // Find the user with the matching ID
      const user = users.find((user) => user.id === randomId);

      // Replace {user} with the user's name
      const text = document.getElementById("user-text");
      text.innerText = text.innerText.replace("{USER}", user.name);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
