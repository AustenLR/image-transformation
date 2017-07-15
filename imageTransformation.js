/* 
  * MyImageTransformation constructor - IIFE that makes the library code accessable inside of the local scope
*/
(function(window) {
  function MyImageTransformation() {}

  /* 
    * Removes color from an image
    * @param {Object} imgObj - HTMLImageElement (cannot contain a crossorigin attribute) 
    * @returns {Object} grasyscaled HTMLImageElement
  */
  MyImageTransformation.prototype.gray = function(imgObj) {
    var canvas = document.createElement('canvas');
    var canvasContext = canvas.getContext('2d');
    var imageWidth = imgObj.width;
    var imageHeight = imgObj.height;
    canvas.width = imageWidth;
    canvas.height = imageHeight;

    canvasContext.drawImage(imgObj, 0, 0);
    var imgData = canvasContext.getImageData(0, 0, imageWidth, imageHeight);

    for (var y = 0; y < imgData.height; y++) {
      for (var x = 0; x < imgData.width; x++) {
        var i = y * 4 * imgData.width + x * 4;
        var average =
          (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3;
        imgData.data[i] = average;
        imgData.data[i + 1] = average;
        imgData.data[i + 2] = average;
      }
    }
    canvasContext.putImageData(
      imgData,
      0,
      0,
      0,
      0,
      imgData.width,
      imgData.height
    );
    var grayImage = new Image();
    grayImage.src = canvas.toDataURL();
    return grayImage;
  };

  /* 
    * Rotates an image
    * @param {Object} imgObj - HTMLImageElement
    * @param {Number} degree - amount to rotate the photo(90,180 or 270)
    * @returns {Object} HTMLImageElement containing the rotated image
  */
  MyImageTransformation.prototype.rotate = function(imgObj, degree) {
    var canvas = document.createElement('canvas');
    var canvasContext = canvas.getContext('2d');
    var xCoordinate = 0;
    var yCoordinate = 0;
    var imgWidth = imgObj.width;
    var imgHeight = imgObj.height;

    if (degree === 90) {
      imgWidth = imgObj.height;
      imgHeight = imgObj.width;
      yCoordinate = imgObj.height * -1;
    } else if (degree === 180) {
      xCoordinate = imgObj.width * -1;
      yCoordinate = imgObj.height * -1;
    } else if (degree === 270) {
      imgWidth = imgObj.height;
      imgHeight = imgObj.width;
      xCoordinate = imgObj.width * -1;
    }
    canvas.setAttribute('width', imgWidth);
    canvas.setAttribute('height', imgHeight);

    canvasContext.rotate(degree * Math.PI / 180);
    canvasContext.drawImage(imgObj, xCoordinate, yCoordinate);

    var rotatedImage = new Image();
    rotatedImage.src = canvas.toDataURL();
    return rotatedImage;
  };
  window.MyImageTransformation = new MyImageTransformation();
})(window);
