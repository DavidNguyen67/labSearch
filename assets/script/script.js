let timeComment = document.querySelector('.time-comment');
let userName = document.querySelector('.user-name');

const time = new Date();
timeComment.innerText = `Today, ${time.getHours()}:${time.getMinutes()}`;
userName.innerText = 'Nguyễn Thị Thu';
