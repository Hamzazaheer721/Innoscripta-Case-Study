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

export const InputField = styled.input`
  border: none;
  outline: none;
  color: ${({ theme }) => theme.headingColor.secondary};
  font-size: 1.4rem;
  /* padding: 2rem; */
  padding: 0.2rem 2rem;
  border-radius: 0.6rem;
  box-sizing: border-box;
  width: 20rem;
  height: 3.16rem;
  border: 1px solid #d9d9d9;

  &::placeholder {
    color: #d9d9d9;
  }

  &:focus-within {
    border-color: #1677ff;
    box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);
    transition: all 0.4s ease;
  }

  &:hover {
    border-color: #1677ff;
    transition: all 0.4s ease;
  }
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

    & > ${InputField} {
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
