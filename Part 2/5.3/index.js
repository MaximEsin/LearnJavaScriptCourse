function preLoadImages(sources, callback) {
  let counter = 0;
  let images = [];
  let imagesToLoad = sources.length;

  sources.forEach((source) => {
    let image = new Image();
    image.src = source;
    image.onload = () => {
      counter++;
      if (counter === imagesToLoad) {
        callback(images);
      }
    };
    images.push(image);
  });
}
