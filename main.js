const clicked = true;
let count = 0;
const stingy = document.querySelector(".stingy")
const noBtn = document.getElementById("no");
noBtn.addEventListener('click', () => {
  const top = Math.floor(Math.random(1) * 80);
  const left = Math.floor(Math.random(1) * 80);
  if (clicked) {
    noBtn.style.position = "absolute"
    noBtn.style.top = `${top}%`;
    noBtn.style.left = `${left}%`;
    count++;
    console.log(count)
  }
  if (count >= 3) {
    console.log('Stingy')
    stingy.style.display = "flex";
    setTimeout(() => {
      stingy.style.display = "none"
      displayMultipleYes()
    }, 2000)
  }
});

function displayMultipleYes() {
  const yesBtn = document.getElementById('yes');
  for (i = 0; i <= 50; i++) {
    const top = Math.floor(Math.random(1) * 80);
    const left = Math.floor(Math.random(1) * 80);
    const clonedBtn = yesBtn.cloneNode(true);
    clonedBtn.addEventListener('click', yesButton)
    clonedBtn.style.position ="absolute";
    clonedBtn.style.top = `${top}%`;
    clonedBtn.style.left = `${left}%`;
    document.body.appendChild(clonedBtn);
  }
}

const yesBtn = document.getElementById("yes");
  yesBtn.addEventListener('click', yesButton)

function yesButton() {
  const payment = document.querySelector(".modal");
  payment.style.display = "flex"
}


document.getElementById('copyButton').addEventListener('click', function() {
  navigator.clipboard.writeText('7085948512')
    .then(() => {
      console.log('Text copied to clipboard');
      alert('Text copied to clipboard!');
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
    });
});
