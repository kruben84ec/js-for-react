const ul = document.createElement("ul");
const paisApi = "https://jsonplaceholder.typicode.com/photos"
async function loadData() {
  let responsePosts = await fetch(paisApi);
  let posts = await responsePosts.json();

  posts.forEach((post) => {
    // console.log(post);
    const li = document.createElement("li");
    li.innerText = post.title;
    ul.append(li);
  }
  );
  document.body.append(ul);
}

loadData();

const persons = ["silvy", "naty", "cris", "rub"]
const lastnames =["guerra", "zamb", "mira", "vent"]

const info_persons = [...persons, ...lastnames]

console.log(info_persons);