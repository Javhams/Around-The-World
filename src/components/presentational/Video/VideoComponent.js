import React from 'react';
import { StyledVideoComponentWrapper} from './VideoComponentStyles';
import Reactplayer from 'react-player';
import MediaQuery from 'react-responsive';


const VideoComponent = () => {
    return (
        <StyledVideoComponentWrapper>
            <MediaQuery minWidth={640} minHeight={360}>
                <Reactplayer
                className="react-player"
                playing
                controls={true}
                url='https://www.youtube.com/watch?v=pS0rZlV7_EQ'
                />
            </MediaQuery>
        </StyledVideoComponentWrapper>
    )
}

export default VideoComponent;