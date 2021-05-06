
import React from "react";
import styled from "styled-components";

/* Topbar
 *
 * TODO: add component description
 */
const Topbar = (props) => {
  return <StyledTopbar><div>Item 1</div><div>Item 2</div></StyledTopbar>;
};

export const StyledTopbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center`;

export default Topbar;
