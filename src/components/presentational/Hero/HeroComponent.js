import React from 'react';
import NewsletterFormComponent from '../../functional/NewsletterForm/NewsletterFormComponent';
import { StyledHeroComponentContainer, StyledHeroComponentWrapper, StyledHeroHeader, StyledHeroSubHeaderBackground, StyledHeroSubHeaderContainer, StyledHeroImage, StyledHeroImageCropper, StyledHeroSubHeader, StyledHeroText, StyledSquigglySvg } from './HeroComponentStyles';
import { StyledHighlightSpan } from '../../../shared/sharedComponents/TextComponents/TextHighlightStyles';
import heroImage from '../../../shared/images/forest.jpg';
import squiggly from '../../../shared/svgs/squiggly-shape.svg';
import background from '../../../shared/images/coin-background.png';
import { StyledFlexAlignLeftWrapper } from '../../../shared/sharedComponents/Flex/FlexComponentStyles';

const HeroComponent = () => {

    return (
        <StyledHeroComponentWrapper>
            <StyledHeroImageCropper>
                <StyledHeroImage src={heroImage} alt='forest viewed from Space'/>
                <StyledSquigglySvg src={squiggly} />
            </StyledHeroImageCropper>
            <StyledHeroComponentContainer>
                <StyledFlexAlignLeftWrapper>
                    <StyledHeroSubHeaderContainer>
                        <StyledHeroSubHeader>
                        SAVING THE PLANET IS A PROJECT AROUND THE WORLD
                            <StyledHeroSubHeaderBackground src={background} />
                        </StyledHeroSubHeader>
                    </StyledHeroSubHeaderContainer>
                    <StyledHeroHeader>
                        Be part of our <br className='hideTablet'/><StyledHighlightSpan color={({theme}) => theme.primaryAccent} fontSize="48px">team </StyledHighlightSpan> and let's save <br className='hideTablet'/><br className='hideTablet'/>our <br className='hideTablet'/> <StyledHighlightSpan color={({theme}) => theme.primaryDark} fontSize="48px">planet</StyledHighlightSpan>
                    </StyledHeroHeader>
                    <StyledHeroText>
                        Get early access and receive the latest info.
                    </StyledHeroText>
                    <NewsletterFormComponent />
                </StyledFlexAlignLeftWrapper>
            </StyledHeroComponentContainer>
        </StyledHeroComponentWrapper>
    )
}

export default HeroComponent;