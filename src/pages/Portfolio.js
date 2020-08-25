import React, { useState, useEffect } from "react";
import Section from "../components/Section";
import CardContainer from "../components/CardContainer";


const Portfolio = () => {
    const [cardState, setCardState] = useState({
        cardIndex: '-1',
    });

    const handleIntroMouseEnter = (e) => {
        let index = e.target.getAttribute("data-index");
        setCardState({
            cardIndex: index
        });
    };

    const handleProjectMouseLeave = (e) => {
        setCardState({
            cardIndex: '-1'
        });
    };

    return (
        <Section title={"Portfolio"}>
            <CardContainer
                cardIndex={cardState.cardIndex}
                handleIntroMouseEnter={handleIntroMouseEnter}
                handleProjectMouseLeave={handleProjectMouseLeave}
            />
        </Section>
    );
};

export default Portfolio;
