


const menu = document.getElementsByClassName('burguer')[0];
const menu_icon = document.getElementsByClassName('burguer_icon')[0];

const mobile = document.getElementsByClassName('mobile_hidden');

menu.addEventListener('click', function () {
  if (mobile[0].style.display === 'block') {
    mobile[0].style.display = 'none';
    menu_icon.classList.replace('uil-multiply', 'uil-bars');
  }
  else {
    mobile[0].style.display = 'block';
    menu_icon.classList.replace('uil-bars', 'uil-multiply');
  }
});

try {

  const btn = document.getElementById("sharebutton");

  // function for web share api
  function webShareAPI(header, description, link) {
    navigator
      .share({
        title: header,
        text: description,
        url: link
      })
      .then(() => console.log("Successful share"))
      .catch((error) => console.log("Error sharing", error));
  }

  if (navigator.share) {
      btn.addEventListener("click", () =>
      webShareAPI("XYZ Smartwatch", "Discover the ultimate smartwatch for your active lifestyle with XYZ Smartwatch. Stay connected, track your fitness, and monitor your health with our advanced features and sleek design.", "www.XYZSmartwatch.com")
    );
  } else {
    // Hide button if it supports webShareAPI
    btn.style.display = "";
    console.error("Your Browser doesn't support Web Share API");
    document.write("Your Browser doesn't support Web Share API");
  }


} catch (error) {
  console.error('An API error ocurred:Share');

}

try {
  const black = document.querySelector('#black');
  const blue = document.querySelector('#blue');
  const red = document.querySelector('#red');

  const images = document.querySelectorAll('.imagen_topintro');

  const background = document.querySelectorAll('.top');
  const header = document.querySelectorAll('.header');


  black.addEventListener('click', function () {
    images.forEach(image => {
      image.style.transform = 'translateY(-105%) rotate(10deg)';
      image.style.opacity = '1';

    });

    background[0].style.backgroundColor = '#333';
    background[1].style.backgroundColor = '#333';
    header[0].style.backgroundColor = '#333';
    header[0].style.borderBottom = "1px solid #333";

  });



  blue.addEventListener('click', function () {
    images.forEach(image => {
      image.style.transform = 'translateY(0%) rotate(10deg)';
      image.style.opacity = '1';

    });

    background[0].style.backgroundColor = '#574fc7';
    background[1].style.backgroundColor = '#574fc7';

    header[0].style.backgroundColor = '#574fc7';
    header[0].style.borderBottom = "1px solid #574fc7";

  });

  red.addEventListener('click', function () {
    images.forEach(image => {
      image.style.transform = 'translateY(-210%) rotate(10deg)';
      image.style.opacity = '1';

    });

    background[0].style.backgroundColor = '#ff6961';
    background[1].style.backgroundColor = '#ff6961';

    header[0].style.backgroundColor = '#ff6961';
    header[0].style.borderBottom = "1px solid  #ff6961";

  });



} catch (error) {
  console.error('An error occurred while trying to use the buttons:"red","blue","black"');
}
try {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const icon = header.querySelector('.accordion-icon');

    header.addEventListener('click', () => {
      // toggle active class on clicked item
      item.classList.toggle('active');

      // toggle icon rotation
      icon.classList.toggle('rotate');
    });
  });
} catch (error) {
  console.error('An error on FAQ');
}

