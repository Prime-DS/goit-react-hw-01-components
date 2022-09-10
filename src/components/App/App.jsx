import { PageTitle } from "../Pagetitle/Pagetitle";
import { CardsBoard } from "../CardsBoard/CardsBoard";
import {StatisticsList} from "../Statistics/Statistics"

import{Container} from "./App.styled"
import cardsArr from '../../user.json'
import data from '../../data.json'

export const App = () => {
  return (
    <Container>
      <PageTitle text="task № 1"/>
      <CardsBoard cards={cardsArr} />
      <StatisticsList title="Upload stats" stats={data} />
    </Container>
  );
};
