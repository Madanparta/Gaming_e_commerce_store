import React from 'react'
import './MainBody.css';
import Items from './Items';
import gif from './gift.gif';
import gameImg from './header.jpg'
import Shock from './header (1).jpg'
import Propagation from './Propagation.jpg'

const MainBody = () => {
  return (
    <div className="main_body">
      <Items
      id="11"
        game_name="MOBILE SUIT GUNDAM BATTLE OPERATION 2"
        src={gif}
        stare="⭐⭐⭐⭐"
        price="12.50"
        discriptions="This is a free-to-play team battle action game based on the 'Mobile Suit Gundam' series of the Universal Century.
        Whether by land or by space, lay waste to your foes using either your ."
      />
      <Items
      id="12"
        game_name="MOBILE SUIT GUNDAM BATTLE OPERATION 2"
        src={gameImg}
        stare="⭐⭐"
        price="2.35"
        discriptions="This is a free-to-play team battle action game based on the 'Mobile Suit Gundam' series of the Universal Century.
        Whether by land or by space, lay waste to your foes using either your favorite Mobile Suit or roam the battlefield as infantry and capture important objectives."
      />
      <Items
      id="13"
        game_name="System Shock"
        src={Shock}
        stare="⭐⭐⭐⭐"
        price="8.10"
        discriptions="System Shock is the fully fledged remake of the ground breaking original from 1994, combining cult gameplay with all-new HD visuals, updated controls, an overhauled interface and all-new sounds & music; it even has the original voice actor of SHODAN, one of gaming’s most iconic villains. Witness the rebirth of one of the greatest and most influential games ever created."
      />

      <Items
      id="14"
        game_name="Propagation: Paradise Hotel"
        src={Propagation}
        price="00.50"
        stare="⭐"
        discriptions="Trapped inside the Paradise Hotel, where a strange illness has turned people into savage creatures, you are desperate to find your sister. Play as Emily Diaz, explore dark surroundings, gather resources, and survive terrifying encounters. This intense single-player VR survival horror game with great storytelling will get your adrenaline pumping."
      />
    </div>
  );
}

export default MainBody