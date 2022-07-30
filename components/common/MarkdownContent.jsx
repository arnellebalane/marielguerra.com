import * as S from './MarkdownContent.styles';

const MarkdownContent = ({ children, ...props }) => {
  return (
    <S.Markdown options={{ forceWrapper: true }} {...props}>
      {children}
    </S.Markdown>
  );
};

export default MarkdownContent;
