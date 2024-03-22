import React from "react";
import { SafeAreaView, StatusBar, View } from 'react-native';
import { Searchbar } from 'react-native-paper'
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
  ${StatusBar.currenHeight && `margin-top: ${StatusBar.currenHeight}px;`}
`;

const SearchContainer = styled(View)`
  padding: 16px;
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

export const RestaurantsScreen = () => (
    
  <SafeArea>
      <SearchContainer>
          <Searchbar
          placeholder="Search..."
          mode="view"
          />
      </SearchContainer>
      <RestaurantListContainer>
          <RestaurantInfoCard />
      </RestaurantListContainer>
  </SafeArea>
)
