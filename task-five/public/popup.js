// Select elements you want to add functionality to
const startRecordingButton = document.querySelector('.button');
const monitorIcon = document.querySelector('.screen img');
const tabIcon = document.querySelector('.tab img');

const closeIcon = document.querySelector('.icons img[alt="Close hamburger Icon"]');

closeIcon.addEventListener('click', () => {
  window.close(); 
});

startRecordingButton.addEventListener('click', () => {
  console.log('Recording started');
});

monitorIcon.addEventListener('click', () => {
  console.log('Monitor icon clicked');
});

tabIcon.addEventListener('click', () => {
  console.log('Tab icon clicked');
});
