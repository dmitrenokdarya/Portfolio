import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { Icon } from "../icon/Icon";

type PaginationPropsType = {
    type: string
}

export const Pagination = (props: PaginationPropsType) => {
    return (
        <StyledPagination>
                <Icon iconId={props.type} width={'27'} heigth={'45'} viewBox={'0 0 27 45'}/>
        </StyledPagination>
    );
};

const StyledPagination = styled.div`
    padding: 25px 0px 0px 0px;
`