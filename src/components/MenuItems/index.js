import React, { PropsWithChildren } from "react";
import styled from "styled-components";


export const MenuItem = ((props, ref) => {
  const { active, disabled, children, ...rest } = props;

  return (
    <Root {...rest} ref={ref} disabled={disabled} active={active}>
      {props.children}
    </Root>
  );
});

const Root = styled.div`
  padding: 5px 10px;
  cursor: ${(p) => (p.disabled ? "initial" : "pointer")};
  opacity: ${(p) => (p.disabled ? 0.5 : 1)};
  background-color: ${(p) => (p.active ? "#ccc" : "transparent")};
`;