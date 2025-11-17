import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Theme } from "../../../../styles/Theme";

type WorkPropsType = {
    imgsrc: string
    text: string
    discription: string
    width: string
    marginBottom?: string
    link: string
}

type ImageWorkPropsType = {
    widthImg: string
}

type StyledWorkPropsType = {
    marginBottom?: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork marginBottom={props.marginBottom} href={props.link}>
            <FlexWrapper direction="column" align="end">
                <ImageContainer>
                    <ImageWork widthImg={props.width} src={props.imgsrc} alt={props.text} />
                    <Overlay>
                        <OverlayText>{props.discription}</OverlayText>
                    </Overlay>
                </ImageContainer>
                <FlexWrapper direction="column">
                    <Description>{props.text}</Description>
                    <StyledHr />
                </FlexWrapper>
            </FlexWrapper>
        </StyledWork>
    );
};

const StyledWork = styled.a<StyledWorkPropsType>`
    margin-bottom: ${props => props.marginBottom || '0px'};
`
const ImageContainer = styled.div`
    position: relative;
    display: inline-flex;
    margin-bottom: 0.7rem;
`

const Overlay = styled.div`
      position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 10px;
    transition: background 0.3s ease;
    &:hover {
        background: rgba(0, 0, 0, 0.7);
    }
`

const OverlayText = styled.span`
    color: white;
    font-size: 1rem;
    text-align: start;
    line-height: 1.4;
    padding: 20px 50px 10px 10px;
    opacity: 0;
    transition: opacity 0.3s ease;

    ${Overlay}:hover & {
        opacity: 1;
    }
`

const ImageWork = styled.img<ImageWorkPropsType>`
    max-width: ${props => props.widthImg};
`

const Description = styled.a`
    font-weight: 400;
    font-size: calc( (100vw - 576px)/(1920 - 576) * (26 - 15.17) + 15.17px);
    line-height: 104%;
    text-transform: lowercase;
    text-align: right;
    color: ${Theme.colors.font.littleText};
    margin-bottom: 0.88vh;
`

const StyledHr = styled.hr`
    border: 0.115em solid ${Theme.colors.font.littleText};
`