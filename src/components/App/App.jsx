import { PageTitle } from "../Pagetitle/Pagetitle";
import { CardsBoard } from "../CardsBoard/CardsBoard";
import { StatisticsList } from "../Statistics/Statistics";
import { FriendList } from "../FriendList/FriendList";

import { Container } from "./App.styled";
import cardsArr from '../../user.json';
import data from '../../data.json';
import friensArr from '../../friends.json'

export const App = () => {
  return (
    <Container>
      <PageTitle text="task № 1"/>
      <CardsBoard cards={cardsArr} />
      <PageTitle text="task № 2"/>
      <StatisticsList stats={data} />
      <PageTitle text="task № 3"/>
      <FriendList friends={friensArr} />
      
    </Container>
  );
};
