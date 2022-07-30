import * as S from './MarkdownContent.styles';

const MarkdownContent = ({ children, ...props }) => {
  return <S.Markdown {...props}>{children}</S.Markdown>;
};

export default MarkdownContent;
