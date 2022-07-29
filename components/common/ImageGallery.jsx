import Image from 'next/image';

const ImageGallery = ({ images, imageLayout, annotationPrefix = '' }) => {
  return (
    <div data-sb-field-path={annotationPrefix}>
      <p data-sb-field-path=".imageLayout">{imageLayout}</p>
      {renderImages(images)}
    </div>
  );
};

const renderImages = (images) => {
  if (images?.length === 0) {
    return null;
  }
  return (
    <div data-sb-field-path=".images">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.url}
          alt={image.altText}
          width="100"
          height="100"
          data-sb-field-path={`.[${index}].url#@src .[${index}].altText#@alt`}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
