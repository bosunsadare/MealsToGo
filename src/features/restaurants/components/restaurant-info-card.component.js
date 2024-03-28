import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacers/spacer.component";
import { Icon,
    RestaurantCard,
    RestaurantCardCover,
    Rating,
    SectionTop,
    SectionEnd,
} from "./restaurant-info-card.styles";

// const Title = styled(Text)`
//     padding: 16px;
//     color: ${(props) => props.theme.colors.ui.success};
//     font-family: ${(props) => props.theme.fonts.body};
//     font-size: ${(props) => props.theme.sizes[1]};
// `;

const Closed = styled(Text)`
    font-weight: bold;
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
                        <Closed variant="error">
                        CLOSED TEMPORARILY
                        </Closed>
                        )
                    }
                    <Spacer position="left" size="large">
                    {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                    </Spacer>
                    <Spacer position="left" size="large">
                    <Icon source={{ uri: icon }} />
                    </Spacer>
                </SectionEnd>
            </SectionTop>
            
            <Text variant="label">Check this out</Text>
        </RestaurantCard>
    )
};