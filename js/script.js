import QRCode from 'qrcode';

var qrBtn = document.getElementById("qr-btn");

if (qrBtn) {
    qrBtn.addEventListener("click", function() {
        var inputValue = document.getElementById("text").value;

        if (inputValue.trim() !== "") {
            window.location.href = "qrcode-page.html?url=" + encodeURIComponent(inputValue);
        } else {
            alert("Por favor, ingrese una URL antes.");
        }
    });
}

 function makeQR() {    
    var qrcode = new QRCode("qrcode");   
    const urlParams = new URLSearchParams(window.location.search);
    const url = urlParams.get('url');
    
    qrcode.makeCode(url);
  }
  
  makeQR();
  
  $("#text").
    on("blur", function () {
      makeQR();
    }).
    on("keydown", function (e) {
      if (e.keyCode == 13) {
        makeQR();
      }
    });

  
    document.addEventListener('DOMContentLoaded', function() {
      const qrCodeContainer = document.getElementById('qrcode');
      const botonDescargar = document.querySelector('.download-btn');
      const botonCopy = document.querySelector('.share-btn');
  
      const urlParams = new URLSearchParams(window.location.search);
      const url = urlParams.get('url');

      botonDescargar.addEventListener('click', function() {
          descargarQR();
      });

      botonCopy.addEventListener('click', function() {
          console.log(url)
          copyURL();
      });

      function descargarQR() {
          const qrImagen = qrCodeContainer.querySelector('img');
          const enlace = document.createElement('a');

          enlace.href = qrImagen.src;
          enlace.download = url + '.png'; 

          document.body.appendChild(enlace);
          enlace.click();
          document.body.removeChild(enlace);
      }

      function copyURL() {
        return navigator.clipboard.writeText(url)
      }
  });

  
