function loadContent(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        callback(xhr.responseText);
      }
    };
    xhr.send();
  }

  document.addEventListener("DOMContentLoaded", function () {
    loadContent("/includes/header.html", function (content) {
      document.getElementById("header").innerHTML = content;
    });

    loadContent("/includes/footer.html", function (content) {
      document.getElementById("footer").innerHTML = content;
    });
  });