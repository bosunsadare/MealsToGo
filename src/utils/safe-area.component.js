import { SafeAreaView, StatusBar } from 'react-native';
import styled from "styled-components/native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
  ${StatusBar.currenHeight && `margin-top: ${StatusBar.currenHeight}px;`}
`;