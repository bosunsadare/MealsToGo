import React from "react";
import { FlatList, View } from 'react-native';
import { Searchbar } from 'react-native-paper'
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { SafeArea } from "../../../utils/safe-area.component";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  }
})``;
// const RestaurantListContainer = styled(View)`
//   flex: 1;
//   padding: ${(props) => props.theme.space[3]};
// `;

export const RestaurantsScreen = () => (
    
  <SafeArea>
      <SearchContainer>
          <Searchbar
          placeholder="Search..."
          mode="view"
          />
      </SearchContainer>
      <RestaurantList
        data={[
          {name: 1},
          {name: 2},
          {name: 3},
          {name: 4},
          {name: 5},
          {name: 6},
          {name: 7},
          {name: 8},
          {name: 9},
          {name: 10},
          {name: 11},
          {name: 12},
          {name: 13},
          {name: 14}
        ]}
        renderItem={() => (<RestaurantInfoCard />)}
        keyExtractor={(item) => item.name}
      />
      {/* <RestaurantListContainer>
          <RestaurantInfoCard />
      </RestaurantListContainer> */}
  </SafeArea>
)
