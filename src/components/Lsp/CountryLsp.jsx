import React from "react";
import { useState } from "react";

const CountryLsp = () => {
  const [active, setIsActive] = useState(0);

  return (
    <div className="Islam">
      <h2>Islam</h2>
      <Panel
        title="About Islam"
        isActive={active === 0}
        onShow={() => setIsActive(0)}
      >
        In Islam, Allah is the unique, omnipotent and only deity and creator of
        the universe and is equivalent to God in other Abrahamic
        religions.[11][12] Allah is usually seen as the personal name of God, a
        notion which became disputed in contemporary scholarship, including the
        question, whether or not the word Allah should be translated as God.[33]
        According to Islamic belief, Allah is the most common word to represent
        God,[34] and humble submission to his will, divine ordinances and
        commandments is the pivot of the Muslim faith.[11] "He is the only God,
        creator of the universe, and the judge of humankind."[11][12] "He is
        unique (wāḥid) and inherently one (aḥad), all-merciful and
        omnipotent."[11] No human eyes can see Allah till the Day Of
        Judgement.[35] The Qur'an declares "the reality of Allah, His
        inaccessible mystery, His various names, and His actions on behalf of
        His creatures."[11] Allah doesn't depend on anything.[36] God is not a
        part of the Christian Trinity.[37] God has no parents and no
        children.[38]
      </Panel>
      <Panel
        title="Prophet Muhammed"
        isActive={active === 1}
        onShow={() => setIsActive(1)}
      >
        Muhammad[a] (Arabic: مُحَمَّد; c. 570 – 8 June 632 CE)[b] was an Arab
        religious, social, and political leader and the founder of Islam.[c]
        According to Islamic doctrine, he was a prophet divinely inspired to
        preach and confirm the monotheistic teachings of Adam, Abraham, Moses,
        Jesus, and other prophets.[2][3][4] He is believed to be the Seal of the
        Prophets within Islam. Muhammad united Arabia into a single Muslim
        polity, with the Quran as well as his teachings and practices forming
        the basis of Islamic religious belief. Muhammad was born approximately
        570 CE in Mecca.[1] He was the son of Abdullah ibn Abd al-Muttalib and
        Amina bint Wahb. His father Abdullah was the son of Quraysh tribal
        leader Abd al-Muttalib ibn Hashim, and he died a few months before
        Muhammad's birth. His mother Amina died when he was six, leaving
        Muhammad an orphan.[5] He was raised under the care of his grandfather,
        Abd al-Muttalib, and paternal uncle, Abu Talib.[6] In later years, he
        would periodically seclude himself in a mountain cave named Hira for
        several nights of prayer. When he was 40, circa 610 CE, Muhammad
        reported being visited by Gabriel in the cave[1] and receiving his first
        revelation from God. In 613,[7] Muhammad started preaching these
        revelations publicly,[8] proclaiming that "God is One", that complete
        "submission" (islām) to God is the right way of life (dīn),[9] and that
        he was a prophet and messenger of God, similar to the other prophets in
        Islam.[10][3][11]
      </Panel>
    </div>
  );
};

const Panel = ({ children, title, isActive, onShow }) => {
  return (
    <div>
      <h3>{title}</h3>
      {isActive ? (
        <div>
          <p> {children} </p>
        </div>
      ) : (
        <button onClick={onShow}>Show</button>
      )}
    </div>
  );
};

export default CountryLsp;
