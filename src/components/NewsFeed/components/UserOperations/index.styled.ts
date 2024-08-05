import styled from "styled-components";
import { device } from "styles";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.2rem;

  .ant-picker-range {
    width: 35rem;
  }

  .ant-input {
    width: 20rem;
  }

  @media (${device.mobileAndBelow}) {
    flex-direction: column;
    place-items: center;
  }

  @media (${device.tabletAndBelow}) {
    .ant-picker-range {
      width: 20rem;
    }
  }
`;
