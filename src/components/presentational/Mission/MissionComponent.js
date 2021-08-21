import React from 'react';
import { StyledHighlightHeaderText, StyledHighlightSpan } from '../../../shared/sharedComponents/TextComponents/TextHighlightStyles';
import { StyledBodyText1 } from '../../../shared/sharedComponents/TextComponents/TextStyles';
import { StyledCardImage, StyledCardHeader, StyledCardContainer, StyledCardWrapper, StyledMissionCardsContainer, StyledMissionComponentWrapper, StyledMissionHeader } from './MissionComponentStyles';
import heroImage from '../../../shared/images/hero-image.jpg';
import faunaImage from '../../../shared/images/fauna.jpg';
import rainforestImage from '../../../shared/images/rainforest.jpg';
import { StyledFlexAlignLeftWrapper } from '../../../shared/sharedComponents/Flex/FlexComponentStyles';

const MissionComponent = () => {
    const config = [
        {
            title: "Restore our Earth",
            text: "As the world waits for global business and political leaders to take  decisive measures to reduce carbon emissions, natural processes, including reforestation and soil conservation, can store quantities massive amounts of carbon while restoring biodiversity, clean water and air and rebalance ecological systems. Restoration is pragmatic and necessary to reduce climate change.",
            image: rainforestImage,
            alt: 'Aerial view of Amazon Rainforest'
        },
        {
            title: "Preserve nature to avoid pandemics",
            text: "This health crisis should be a wake-up call ”, says the World Wide Fund for Nature, WWF, in a recent statement. And so it should be, since it should serve to generate greater social awareness regarding the care of the planet and the rational use of resources.  In this sense, and according to WWF-Italy in a recent study, “there is a very close link between the spread of pandemics and the size of the loss of nature, a problem that is accentuated year by year",
            image: heroImage,
            alt: 'Hero world'
        },
        {
            title: "Wild fauna benefited",
            text: "Likewise, the temporary ban on wildlife trade imposed by China to combat the coronavirus has also given some endangered species of animals a break, since this country, by tradition, uses species considered exotic both for its cuisine and for its use. in traditional medicine, many of them cataloged with a degree of special vulnerability or on the 'red list' of the International Union for Conservation of Nature (IUCN). ccording to United Nations data, the illegal wildlife trade moves around 20,000 million dollars a year and is the fourth largest illegal trade in the world after drugs, human smuggling and counterfeiting.",
            image: faunaImage,
            alt: 'fauna save the wordl'
        }
    ]
    
    return (
            <StyledMissionComponentWrapper>
                <StyledFlexAlignLeftWrapper>
                    <StyledMissionHeader>
                        Mission
                    </StyledMissionHeader>
                    <StyledHighlightHeaderText paddingTop={'0'} marginBottom={'7%'}>
                    Earth    Day  <StyledHighlightSpan color={({theme}) => theme.primaryAccent}> Network</StyledHighlightSpan> May 14, 2020 <StyledHighlightSpan color={({theme}) => theme.secondaryDark}>positive impact</StyledHighlightSpan> on <StyledHighlightSpan color={({theme}) => theme.primaryDark} fontSize="32px" fontWeight="800">climate change.</StyledHighlightSpan>
                    </StyledHighlightHeaderText>
                    <StyledMissionCardsContainer>
                        {
                            config.map((card) => {
                                return (
                                    MissionCard(card.title, card.text, card.image, card.alt)
                                    )
                                })
                            }
                    </StyledMissionCardsContainer>
                </StyledFlexAlignLeftWrapper>
            </StyledMissionComponentWrapper>
    )
}

const MissionCard = (title, text, image, alt) => {
    return (
        <StyledCardWrapper key={title}>
            <StyledCardContainer>
                <StyledCardImage src={image} alt={alt}/>
                <StyledCardHeader>
                    {title}
                </StyledCardHeader>
                <StyledBodyText1 padding='0 25px' background={'none'}>
                    {text}
                </StyledBodyText1>
            </StyledCardContainer>
        </StyledCardWrapper>
    )
}

export default MissionComponent;