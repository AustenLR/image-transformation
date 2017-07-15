describe('MyImageTransformation', function() {
  it('Should be able to transform an image to grayscale', function() {
    expect(
      MyImageTransformation.gray(document.getElementById('regular')).src
    ).toEqual(document.getElementById('gray').src);
  });

  it('Should be able to rotate an image 90 degrees', function() {
    expect(
      MyImageTransformation.rotate(document.getElementById('regular'), 90).src
    ).toEqual(document.getElementById('rotate90').src);
  });

  it('Should be able to rotate an image 180 degrees', function() {
    expect(
      MyImageTransformation.rotate(document.getElementById('regular'), 180).src
    ).toEqual(document.getElementById('rotate180').src);
  });

  it('Should be able to rotate an image 270 degrees', function() {
    expect(
      MyImageTransformation.rotate(document.getElementById('regular'), 270).src
    ).toEqual(document.getElementById('rotate270').src);
  });

  it('Should be able to grayscale and rotate an image', function() {
    expect(
      MyImageTransformation.gray(
        MyImageTransformation.rotate(document.getElementById('regular'), 90)
      ).src
    ).toEqual(document.getElementById('grayAndRotated90').src);
  });
});
