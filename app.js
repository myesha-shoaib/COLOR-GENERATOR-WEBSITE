function generateColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * 16);
    color += letters[randomIndex];
  }

  document.getElementById("colorBox").style.backgroundColor = color;
  document.getElementById("colorCode").innerText = color;

  document.body.style.background = `linear-gradient(135deg, ${color}, #222222)`;
}

function copyColor() {
  let colorCode = document.getElementById("colorCode").innerText;

  navigator.clipboard.writeText(colorCode);

  alert("Color copied: " + colorCode);
}