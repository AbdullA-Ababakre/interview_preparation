function yayOrNay() {
  return new Promise((resolve, reject) => {
    let val = Math.round(Math.random() * 1);
    val ? resolve("Lucky") : reject("unLucky😠");
  });
}

async function msg() {
  try {
    const msg = await yayOrNay();
    console.log(msg);
  } catch (err) {
    console.log(err);
  }
}
// msg();

async function fetchUsers(endPoint) {
  let res = await fetch(endPoint);
  let data = await res.json();
  data = data.map((user) => {
    return user.name;
  });
  console.log(data);
}

fetchUsers("https://jsonplaceholder.typicode.com/users");
