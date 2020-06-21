const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {

    // 13 is the "enter" key.
    if(evt.keyCode == 13) {
      console.log(searchbox.value);
    }
}