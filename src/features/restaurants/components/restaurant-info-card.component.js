import React from "react";
import { Text, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacers/spacer.component";

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
const Rating = styled.View`
    flex-direction: row;
`;
const SectionTop = styled.View`
    flex-direction: row;
    align-items: center;
    padding: ${(props) => props.theme.space[3]};
`;
const SectionEnd = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;
const Closed = styled(Text)`
    font-weight: bold;
    color: red;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'Some Restaurant',
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = ["https://ainttooproudtomeg.com/wp-content/uploads/2022/05/fruit-trays-for-parties-e1653586059972-500x375.jpg"],
        address = "100, Some Random Street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Card.Title title={name} subtitle={address} />
            <SectionTop>
                <Rating>
                    {ratingArray.map(() => (
                        <SvgXml xml={star} width={20} height={20} />
                    ))}
                </Rating>
                <SectionEnd>
                    {isClosedTemporarily && (
                        <Closed variant="label">
                        CLOSED TEMPORARILY
                        </Closed>
                        )
                    }
                    <Spacer position="left" size="large">
                    {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                    </Spacer>
                    <Spacer position="left" size="large">
                    <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
                    </Spacer>
                </SectionEnd>
            </SectionTop>
            
            <Title>Check this out</Title>
        </RestaurantCard>
    )
};