import React from 'react';
import { Deck, Slide, Heading, Text, FlexBox, DefaultTemplate, Image, ListItem, UnorderedList } from 'spectacle';
import Arbeidsplass from './assets/1000005842.jpg';
import Lillebrygga from './assets/lillebrygga_986.jpg';
import Prompts1 from './assets/prompts1.png';
import Prompts2 from './assets/prompts2.png'; 
import Prompts3 from './assets/prompts3.png';
import Prompts4 from './assets/prompts4.png';
import Prompts5 from './assets/prompts5.png';
import Prompts6 from './assets/prompts6.png';
import Applaus from './assets/Applaus.gif';
import Applaus2 from './assets/freesound_community-applause-2-31567.mp3';
const audio = new Audio(Applaus2);

function App() {
  return (
    <Deck template={<DefaultTemplate />}>
      
      {/* Slide 1: Tittel */}
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Praksis uke 6-7</Heading>
          <Text>Laget av Henry</Text>
        </FlexBox>
      </Slide>

      {/* Slide 2: Innhold */}
      <Slide>
        <Heading>Om Aquastructures</Heading>
        <FlexBox>
          <div>
            <Text>
              Aquastructures AS er en bedrift som spesialiserer seg på å utvikle og implementere løsninger for vannrelaterte strukturer og infrastruktur.
            </Text>
            <Text>
              De har 31 folk ansatt og har hovedkontor i Trondheim.
            </Text>
          </div>
          <Image src={Lillebrygga} alt='Lillebrygga' width="30%" />
        </FlexBox>
      </Slide>

      {/* Slide 3: Innhold */}
      <Slide>
        <Heading>Hva jeg gjorde</Heading>
        <FlexBox>
          <div>
            <Text>
              Lage prompts for ChatGPT slik at den kan lese rapporter og hente ut viktig data.
            </Text>
            <Text>
              Var med i to møter og gjorde et par små oppgaver rundt i lokalet.
            </Text>
          </div>
          <Image src={Arbeidsplass} alt='Arbeidsplass' width="40%" />
        </FlexBox>
      </Slide>

      
      {/* Slide 4: Bilde */}
      <Slide>
        <FlexBox flexDirection="column" alignItems="center">
          <FlexBox flexDirection="row" justifyContent="space-around">
            <Image src={Prompts1} alt='Prompts1' width="15%" />
            <Image src={Prompts2} alt='Prompts2' width="15%" />
            <Image src={Prompts3} alt='Prompts3' width="15%" />
            <Image src={Prompts4} alt='Prompts4' width="15%" />
            <Image src={Prompts5} alt='Prompts5' width="15%" />
            <Image src={Prompts6} alt='Prompts6' width="15%" />
          </FlexBox>
          <Text> + Sånn 20 andre som jeg slettet </Text>
        </FlexBox>
      </Slide>
      
      {/* Slide 5: Innhold */}
      <Slide>
        <Heading>Refleksjon</Heading>
        <UnorderedList>
          <ListItem>
            Veldig repetitivt
          </ListItem>
          <ListItem>
            Ferdig veldig raskt
          </ListItem>
          <ListItem>
            Hadde det greit
          </ListItem>
          <ListItem>
            De tar ikke inn lærlinger.
          </ListItem>
        </UnorderedList>
      </Slide>
      
      {/* Slide 6: Innhold */}
      <Slide>
        <Heading>Takk for meg!</Heading>
        <Image src={Applaus} alt='Applaus' width="100%" />
      </Slide>
      
    </Deck>
  );
}

export default App;