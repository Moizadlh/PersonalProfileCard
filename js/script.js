document.addEventListener('DOMContentLoaded', function() {
  const counter = document.getElementById('Subscribers');
  const button = document.getElementById('Subscribe');
  const likeCounter = document.getElementById('Likes');
  const likeButton = document.getElementById('Like');
  const UnlikeButton = document.getElementById('Unlike');
  let storedCounterValue = localStorage.getItem('counterValue');
  let userHasClicked = localStorage.getItem('userHasClicked');
  let userClickedlike = localStorage.getItem('likeclick');
  let userHasClickedunlike = localStorage.getItem('unlikeclick');
  let storedLikeValue = localStorage.getItem('LikesValue');
  if (storedCounterValue !== null) {
      counter.textContent = storedCounterValue;
  }
  else {
      counter.textContent = '21';
  }

  if (storedLikeValue !== null ) {
    likeCounter.textContent = storedLikeValue;
  } 
  else {
    likeCounter.textContent = '23';
  }

  if (userHasClicked === 'true') {
      button.disabled = true;
      button.style.backgroundColor = "#e6e5e5";
      button.textContent = "Subscribed"
  }
  if (userClickedlike === 'true') {
    UnlikeButton.style.opacity = "1";
    UnlikeButton.style.position = "static"
    UnlikeButton.style.transform = "none"
    UnlikeButton.style.transition = "none"
    UnlikeButton.style.display = "inline-block";
    likeButton.style.display = "none";
  }
  if (userHasClickedunlike === 'true') {
    UnlikeButton.style.opacity = "0";
    UnlikeButton.style.position = "absolute"
    UnlikeButton.style.transform = "translateY(-50%)"
    UnlikeButton.style.transition = " all 0.3s ease"
    UnlikeButton.style.display = "none";
    likeButton.style.display = "inline-block";
  }

  likeButton.addEventListener('click', function() {
    let currentValue = parseInt(likeCounter.textContent);
    likeCounter.textContent = currentValue + 1;
    UnlikeButton.style.opacity = "1";
    UnlikeButton.style.position = "static"
    UnlikeButton.style.transform = "none"
    UnlikeButton.style.transition = "none"
    UnlikeButton.style.display = "inline-block";
    likeButton.style.display = "none";
    localStorage.setItem('LikesValue', likeCounter.textContent);
    localStorage.setItem('likeclick', 'true');
    localStorage.setItem('unlikeclick', 'false');
  });

  UnlikeButton.addEventListener('click', function() {
    let currentValue = parseInt(likeCounter.textContent);
    likeCounter.textContent = currentValue - 1;
    UnlikeButton.style.opacity = "0";
    UnlikeButton.style.position = "absolute"
    UnlikeButton.style.transform = "translateY(-50%)"
    UnlikeButton.style.transition = " all 0.3s ease"
    UnlikeButton.style.display = "none";
    likeButton.style.display = "inline-block";
    localStorage.setItem('LikesValue', likeCounter.textContent);
    localStorage.setItem('likeclick', 'false');
    localStorage.setItem('unlikeclick', 'true');
  });
  button.addEventListener('click', function() {
      let currentValue = parseInt(counter.textContent);
      counter.textContent = currentValue + 1;
      localStorage.setItem('counterValue', counter.textContent);
      localStorage.setItem('userHasClicked', 'true');
      button.disabled = true;
      button.style.backgroundColor = "#e6e5e5";
      button.textContent = "Subscribed"
  });
});

var ContactButton = document.getElementById("EmailSend");
ContactButton.addEventListener("click", sendEmail);
function sendEmail() {
    console.log("Send Email");
    var templateParams = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
      };
      
      emailjs.send('service_bdfm3be', 'template_rrokwjs', templateParams).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
    setTimeout(function() {
        location.reload();
    }, 3000);
  }
