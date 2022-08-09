import * as S from './ThemedLayout.styles';

const ThemedLayout = ({ children, themeStyle }) => {
  const theme = {
    '--bg-body': themeStyle['bg-body'],
    '--primary': themeStyle['primary'],
    '--fg-primary': themeStyle['fg-primary'],
    '--inverted': themeStyle['inverted'],
    '--fg-inverted': themeStyle['fg-inverted'],
    '--complementary': themeStyle['complementary'],
    '--fg-complementary': themeStyle['fg-complementary'],
  };
  return <S.Layout style={theme}>{children}</S.Layout>;
};

export default ThemedLayout;
