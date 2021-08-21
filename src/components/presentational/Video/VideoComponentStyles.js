import styled from 'styled-components';

export const StyledVideoComponentWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({theme}) => theme.secondaryDark};
`

export const StyledReactPlayerContainer = styled.div`
.video-wrapper > video { width: 55vw; height: min-content; }
    @media (min-width: 843px) {
        width: 712px;
    }
`
