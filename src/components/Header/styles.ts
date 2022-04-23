import styled from "styled-components";

export const Container = styled.div`
  div {
    display: flex;
    justify-content: center;
    padding: 4rem 0px;
    align-items: center;
    flex-direction: column;
    div {
      select,
      option {
        background: var(--dark-color);
        padding: 0.5rem 1rem;
        min-width: 10rem;
        outline: none;
      }
    }
  }
`;
