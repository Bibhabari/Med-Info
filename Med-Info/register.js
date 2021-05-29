document.querySelector(".registerbtn").addEventListener("click", (e) => {
  let name;

  name = document.querySelector("#name").value.split(" ")[0].substring(0,1) + document.querySelector("#name").value.split(" ")[1].substring(0,1);
  document.querySelector(".reg").innerHTML = name;
});
