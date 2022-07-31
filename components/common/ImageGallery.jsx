import Image from 'next/image';
import * as S from './ImageGallery.styles';

const ImageGallery = ({ images, imageLayout, annotationPrefix = '' }) => {
  const layouts = {
    layoutOne: LayoutOne,
    layoutTwo: LayoutTwo,
    layoutThree: LayoutThree,
  };
  const ImageGalleryLayout = layouts[imageLayout];

  if (!ImageGalleryLayout) {
    return null;
  }
  return (
    <div data-sb-field-path={annotationPrefix}>
      <ImageGalleryLayout images={images} />
    </div>
  );
};

const renderImage = (images, index) => {
  const image = images[index];
  if (!image?.url) {
    return null;
  }
  return (
    <S.ImageWrapper data-sc-index={index}>
      <Image
        src={image.url}
        alt={image.altText}
        layout="fill"
        objectFit="cover"
        objectPosition="center center"
        data-sb-field-path={`.[${index}].url#@src .[${index}].altText#@alt`}
      />
    </S.ImageWrapper>
  );
};

const LayoutOne = ({ images }) => {
  return (
    <S.ImagesGrid data-sc-layout="layoutOne">
      {renderImage(images, 0)}
      <S.ImagesGridColumn>
        {renderImage(images, 1)}
        {renderImage(images, 2)}
      </S.ImagesGridColumn>
      <S.ImagesGridColumn>{renderImage(images, 3)}</S.ImagesGridColumn>
    </S.ImagesGrid>
  );
};

const LayoutTwo = ({ images }) => {
  return (
    <S.ImagesGrid data-sc-layout="layoutTwo">
      <S.ImagesGridColumn>
        {renderImage(images, 0)}
        {renderImage(images, 1)}
      </S.ImagesGridColumn>
      <S.ImagesGridColumn>
        {renderImage(images, 2)}
        {renderImage(images, 3)}
      </S.ImagesGridColumn>
    </S.ImagesGrid>
  );
};

const LayoutThree = ({ images }) => {
  return (
    <S.ImagesGrid data-sc-layout="layoutThree">
      {renderImage(images, 0)}
      <S.ImagesGridColumn>{renderImage(images, 1)}</S.ImagesGridColumn>
      <S.ImagesGridColumn>{renderImage(images, 2)}</S.ImagesGridColumn>
    </S.ImagesGrid>
  );
};

export default ImageGallery;
