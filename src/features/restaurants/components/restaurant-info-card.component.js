import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled(Text)`
    padding: 16px;
    color: ${(props) => props.theme.colors.ui.success};
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.sizes[1]};
`;

const RestaurantCard = styled(Card)`
    background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
    background-color: white;
    padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'Some Restaurant',
        icon,
        photos = ["https://ainttooproudtomeg.com/wp-content/uploads/2022/05/fruit-trays-for-parties-e1653586059972-500x375.jpg"],
        address = "100, Some Random Street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
    } = restaurant;

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Card.Title title={name} subtitle={address} />
            <Title>Check this out</Title>
        </RestaurantCard>
    )
};