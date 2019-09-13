import { keyframes } from "styled-components";

const bounce = keyframes`
    0% {
      color: red;
    }
    25% {
      color: orange;
    }
    50% {
      color: green;
    }
    75% {
      color: blue;
    }
    100% {
      transform: scale(1.1);
      color: purple;
    }
`;

const scale = keyframes`
  0% {
    transform: scale(.5);
  }
  100% {
    transform: scale(1.0);
  }
`;

export { bounce, scale };