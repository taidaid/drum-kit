// grab and store all drum elements
const drums = document.getElementsByClassName("drum");

// play sound file that corresponds to input background image file
const playSound = drum => {
  // get the value of background image attribute which resembles the file path of sound files
  const backgroundImage = getComputedStyle(drum).backgroundImage;

  // slice the value of the background image attriubte to just file path
  const imageUrl = backgroundImage.slice(5, backgroundImage.length - 2);

  // provide replacement strings
  const mapObj = {
    images: "sounds",
    png: "mp3"
  };

  // create and play new audio for each drum element on click
  new Audio(
    // find 'images' and 'png' in string and replace with values in mapObj
    imageUrl.replace(/images|png/gi, function(matched) {
      return mapObj[matched];
    })
  ).play();
};

const textAnimation = drum => {
  drum.classList.add("pressed");
  setTimeout(() => {
    drum.classList.remove("pressed");
  }, 100);
};

// loop through array of drums and add click event listener to each drum element
[...drums].forEach(drum => {
  drum.addEventListener("click", event => {
    playSound(drum);
    textAnimation(drum);
  });
});

document.addEventListener("keydown", e => {
  // console.log([...drums].forEach(drum => console.log(drum)));
  [...drums].forEach(drum => {
    if (e.key === drum.innerHTML) {
      playSound(drum);
      textAnimation(drum);
    }
  });
});
