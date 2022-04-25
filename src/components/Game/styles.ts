import styled from "styled-components";

export const Container = styled.article`
  > div {
    display: grid;
    grid-template-columns: repeat(6, 160px);
    gap: 1rem;
    align-self: center;
    justify-content: center;
  }
`;
export const Wrapper = styled.div`
  width: 160px;
  height: 160px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background: var(--second-color);
  border-radius: 0.5rem;
  transform: rotate3d(10deg);
  transform-style: preserve-3d;

  &.active {
    > .back {
      transform: rotateY(180deg);
    }
    > .front {
      pointer-events: none;
      user-select: none;
      cursor: pointer;
      transform: rotateY(0);
    }
  }
  &.done {
    pointer-events: none;
    cursor: none;
    user-select: none;
  }
  &.error {
    animation: snake 0.35s ease-in-out;
  }
  @keyframes snake {
    0%,
    100% {
      transform: translateX(0);
    }
    20% {
      transform: translateX(-13px);
    }
    40% {
      transform: translateX(13px);
    }
    60% {
      transform: translateX(-8px);
    }
    80% {
      transform: translateX(8px);
    }
  }

  > div {
    position: absolute;
    transition: transform 0.23s linear;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  > img {
    pointer-events: none;
    cursor: none;
    user-select: none;
  }
`;

export const BackView = styled.div`
  background: var(--dark-color);
  width: 100%;
  height: 100%;
  border: 2px solid var(--frist-color);
  pointer-events: none;
  cursor: none;
  user-select: none;
`;
export const FrontView = styled.div`
  background: var(--second-color);
  transform: rotateY(-180deg);
`;
