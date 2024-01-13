const btnQr = document.getElementById('button-qr');
const inputUrl = document.getElementById('input-url');
const showQr = document.getElementById('showQr'); // Obtener la imagen QR
const container1 = document.querySelector('.container1')
const container2 = document.querySelector('.container2')
const header = document.getElementById('logo-header')

const downl = document.getElementById('download')
const share = document.getElementById('share')

container2.style.display = 'none';
header.style.display = 'none';

function getQr() {
  const url = inputUrl.value;
  
  if (url) {
    new QRious({
      element: showQr,
      value: url,
      size: 250,
      backgroundAlpha: 0,
      level: "H"
    });
    
    container2.style.display = 'block';
    container1.style.display = 'none';
    header.style.display = 'block';
    showQr.style.display = 'block';

    downl.addEventListener('click', function(){
      // Simular la descarga de la imagen utilizando la URL de datos del QR
      const enlace = document.createElement('a');
      enlace.href = showQr.src;  // Utilizar la URL de datos de la imagen
      enlace.download = 'codigoQR.png';
      enlace.click();
    });

    share.addEventListener('click', function(){
      // Aquí puedes ampliar para compartir la imagen de otra manera si lo deseas.
      console.log(showQr.src);  // Muestra la URL de datos en la consola.
    });
  } else {
    alert('escriba el url')
    showQr.style.display = 'none';
  }
}

btnQr.addEventListener('click', getQr);