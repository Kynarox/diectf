function rollDice() {
  const dice1 = document.getElementById("dice1");
  const dice2 = document.getElementById("dice2");
  
  const rotations = [
      {x: 0, y: 0},      // 1
      {x: -90, y: 0},    // 2
      {x: 0, y: -90},    // 3
      {x: 0, y: 90},     // 4
      {x: 90, y: 0},     // 5
      {x: 180, y: 0}     // 6
  ];
  
  // Ensure we never get 6,6 by normal rolls
  let num1 = Math.floor(Math.random() * 5); // 0-4
  let num2 = Math.floor(Math.random() * 5); // 0-4
  
  // Make sure at least one die is not 5 (which would be 6 after adding 1)
  if (num1 === 4 && num2 === 4) {
      num2 = Math.floor(Math.random() * 4); // 0-3
  }
  
  const spinX = Math.floor(Math.random() * 2) * 360;
  const spinY = Math.floor(Math.random() * 2) * 360;
  
  dice1.style.transform = `rotateX(${rotations[num1].x + spinX}deg) rotateY(${rotations[num1].y + spinY}deg)`;
  dice2.style.transform = `rotateX(${rotations[num2].x + spinX}deg) rotateY(${rotations[num2].y + spinY}deg)`;
  
  setTimeout(() => {
      winGame(num1 + 1, num2 + 1);
  }, 600);
}

function winGame(d1, d2) {
  if (d1 === 6 && d2 === 6) {

      fetch('https://faux-api.com/api/v1/dicectf_04272001267518333')
          .then(response => response.json()) 
          .then(data => {
              const flag = data.result[0].flag 
              alert(`🎉 Congratulations! Here is your flag: ${flag} 🎉`);
          })
          .catch(error => {});

  }
}
