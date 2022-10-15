const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/kids_chuunibyou_boy.png') {
    myImage.setAttribute('src','images/kids_chuunibyou_girl.png');
  } else {
    myImage.setAttribute('src','images/kids_chuunibyou_boy.png');
  }
}