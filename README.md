# image-transformation
Image transformation microlibrary that runs in browser using HTML5 canvas - written in JavaScript with no dependencies and can be safely used with jQuery, etc.

## Getting Started
Download the minified JavaScript file and include it in your project

## Usage
The MyImageTransformation.gray method takes an HTMLImageElement (cannot contain a crossorgin attribute that will violate CORS and taint the canvas) and returns a grayscaled version of that HTMLImageElement

```javascript
//returns a grayscaled version of the image in the HTML with the id='imageElementToTransform'
MyImageTransformation.gray(document.getElementById('imageElementToTransform'))
```

The MyImageTransformation.rotate method takes an HTMLImageElement (cannot contain a crossorgin attribute that will violate CORS) and the clockwise degree to rotate the image (90, 180 or 270), and returns a rotated version of that HTMLImageElement

```javascript
//returns a rotated version of the image in the HTML with the id='imageElementToTransform'
MyImageTransformation.rotate(document.getElementById('imageElementToTransform'), 90)

```

| Methods      | Description    | 
| ------------- |:-------------:|
| gray          | Desaturates the colors into grayscale|
| rotate        | Rotates the image clockwise by 90, 180 or 270 degrees     |


## Testing
Testing was completed using standalone Jasmine.  Simply open SpecRunner.html to run the specs

