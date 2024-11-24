function toggleAudio(item) {
  item.classList.toggle('playing');
  const audios = document.querySelectorAll('.review');
  for (i = 0; i < audios.length; i++) {
    audios[i].querySelector('audio').currentTime = 0;
    if (audios[i] != item) {
      audios[i].classList.remove('playing');
    }
    if (!audios[i].classList.contains("playing")) {
      audios[i].querySelector('audio').pause();
    }
    if (audios[i].classList.contains("playing")) {
      audios[i].querySelector('audio').play();
    }
  }
}

function resetAudio(item) {
  item.currentTime = 0
  item.parentElement.classList.remove('playing');
}

function showDescription(item) {
  const popupContainer = document.getElementById('popup-container');
  const descriptions = item.querySelectorAll('.description-single');
  const popup = popupContainer.querySelector('.popup');
  item.classList.add('active');

  const randomIndex = Math.floor(Math.random() * descriptions.length);
  const description = descriptions[randomIndex].innerHTML;
  popup.innerHTML = description;
  popupContainer.classList.add('active');
}

function hideDescription() {
  const popupContainer = document.getElementById('popup-container');
  popupContainer.classList.remove('active');
  document.querySelector('.item-single.active').classList.remove('active');
}

function filterElements(filter) {
  filter.classList.toggle('active');

  const filterCollection = document.querySelectorAll('.filter-single.active');
  const itemCollection = document.querySelector('.item-collection');

  if (filterCollection.length > 0) {
    itemCollection.classList.add('filtered');
  } else {
    itemCollection.classList.remove('filtered');
  }

  var mirrorsCheckbox = document.getElementById('mirrorsCheckbox');
  var skewCheckbox = document.getElementById('skewCheckbox');

  var elements = document.querySelectorAll('.item-single');

  elements.forEach(function (element) {
    var hasMirrors = element.querySelector('[data-mirrors = "true"]');
    var hasSkew = element.querySelector('[data-skew = "true"]');

    if (
      (mirrorsCheckbox.checked && hasMirrors) &&
      (skewCheckbox.checked && hasSkew)
    ) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
}

function loading() {
  document.querySelector('body').classList.toggle('loading');
}

window.addEventListener('scroll', hideDescription);

window.addEventListener('beforeunload', loading);
window.addEventListener('load', loading);

function useElevator() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

var timer = 0;
const interval = setInterval(function () {
  if (timer < 3) {
    timer++;
  } else {
    document.querySelector('html').classList.remove('lights');
    timer = 0;
  }
}, 1000);

function turnOnLight() {
  document.querySelector('html').classList.add('lights');
  timer = 0;
}

function resetValues(input) {
  const inputs = document.querySelectorAll('.dashboard-single.group input');
  const selects = document.querySelectorAll('.dashboard-single.group select');
  for (i = 0; i < inputs.length; i++) {
    if (inputs[i] == input) {

    } else {
      inputs[i].value = false;
    }
  };
  for (i = 0; i < selects.length; i++) {
    if (selects[i] == input) {

    } else {
      selects[i].value = '';
    }

  }
}

function zoomItems(slider) {
  const itemCollection = document.querySelector('.item-collection');
  itemCollection.style.fontSize = slider.value + 'rem';
}