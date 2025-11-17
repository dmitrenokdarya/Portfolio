import { Icon } from "../icon/Icon";

export const Logo = () => {
    return (
        <a href="">
            <Icon iconId={'logo'} width={'calc( (100vw - 576px)/(1920 - 576) * (127 - 54.8) + 54.8px)'} height={'45'} viewBox={'0 0 127 45'} />
        </a>
    );
};
