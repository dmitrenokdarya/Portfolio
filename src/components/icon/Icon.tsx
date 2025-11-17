import iconsSprite from "../../assets/images/image-sprite.svg"

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    style?: React.CSSProperties
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "17"} height={props.height || "14"} viewBox={props.viewBox || "0 0 17 14"} fill="none" style={props.style}>
            <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
        </svg>
    );
};