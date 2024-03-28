import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Icon = styled.Image`
width: 15px;
height: 15px;
`;

export const RestaurantCard = styled(Card)`
    background-color: white;
    margin-bottom: ${(props) => props.theme.space[3]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
    background-color: white;
    padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled.View`
    flex-direction: row;
`;

export const SectionTop = styled.View`
    flex-direction: row;
    align-items: center;
    padding: ${(props) => props.theme.space[3]};
`;

export const SectionEnd = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;