// เริ่มเขียนโค้ดตรงนี้
async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    let newUser = data
      .filter((user) => user.name.length > 17)
      .map((user) => user.name);
    console.log(newUser);
  } catch (error) {
    console.log(error);
  }
}

getUsers();
