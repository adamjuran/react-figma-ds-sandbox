import React from "react";
import styled from "styled-components";
import { spacing } from "../../tokens";

console.log(spacing)
/* Topbar
 *
 * A wrapper component for the app Topbar, with slots for two actions and a title.
 */
const Topbar = ({ firstAction = null, title, lastAction = null }) => {
  return (
  <StyledTopbar>
    {firstAction}
    {title && <StyledTitle><h4>{title}</h4></StyledTitle>}
    {lastAction}
    </StyledTopbar>
    );
};

export const StyledTopbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${spacing.spacing3XlBottom};
`;

export const StyledTitle = styled.div`
  flex-grow: 2;
  display: flex;
  align-items: center;
  margin-left: ${spacing.spacing2XlLeft};
  margin-right: ${spacing.spacing2XlRight};
`;

export default Topbar;
