import styled from "styled-components";
import { device } from "styles";

export const LowerContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  text-align: right;
`;

export const OuterContainer = styled.div`
  margin-top: 2rem;
`;

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

  .ant-select {
    width: 20rem;
  }

  @media (${device.tabletAndBelow}) {
    padding: 0 10rem;
    flex-direction: column;

    .ant-picker-range {
      width: 100%;
    }
    .ant-input {
      width: 100%;
    }

    .ant-select {
      width: 100%;
    }
  }

  @media (${device.mobileAndBelow}) {
    padding: 0;
    place-items: center;
  }
`;
