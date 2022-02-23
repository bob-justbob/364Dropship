const btn = document.getElementById("btn");
const hop = document.getElementById("hopup");

btn.addEventListener("click", () => {
  if (hop.style.display === "none") {
    hop.style.display = "block";
  } else {
    hop.style.display = "none";
  }
});
