$(document).ready(function() {

  // clear form after submission
  window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }

});