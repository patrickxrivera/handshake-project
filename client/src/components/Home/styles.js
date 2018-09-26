import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 2rem;
  background-color: #fff;
  box-shadow: rgba(23, 43, 99, 0.26) 0 7px 42px;
  max-height: 600px;
  border-radius: 4px;
  overflow: scroll;
`;

export const ListWrapper = styled.div`
  width: 500px;
  height: 50px;
  display: flex;
  flex-grow: 1;
  align-items: center;
  padding: 10px;
`;

export const List = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const UpvoteWrapper = styled.div`
  > * {
    margin: 0 1rem;
  }
`;

export const HomeHeading = styled.h1`
  text-align: center;
`;

export const InputWrapper = styled.div`
  > * {
    margin: 0 6px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 30px;
  margin: 0;
  padding: 6px 14px;
  border: 2px solid #e9ebeb;
  border-radius: 4px;
  background: 0 0;
  color: #0e1e25;
  line-height: 24px;
  margin-right: 6px;
  font-size: 16px;
  z-index: 9999;

  &:focus {
    outline: none;
  }
`;

export const InnerInputWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
`;
