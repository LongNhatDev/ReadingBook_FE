import React from "react";
import styled from "styled-components";

const StaffHome = () => {
  return (
    <Background>
      <Content>
        <WrapButton>
          <ButtonCustom>All Book</ButtonCustom>
          <ButtonCustom>Change Password</ButtonCustom>
          <ButtonCustom>Change Password</ButtonCustom>
          <ButtonCustom>Change Password</ButtonCustom>
          <ButtonCustom>Change Password</ButtonCustom>
        </WrapButton>
        <WrapTable>
          <WrapForm>
            <PassWapper></PassWapper>
          </WrapForm>
        </WrapTable>
      </Content>
    </Background>
  );
};

export default StaffHome;

const Background = styled.div`
  width: 100%;
  min-height: 712px;
`;

const WrapButton = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  border-right: 1px solid #051937;
  padding-top: 30px;
  background-color: #eaeaeaa9;
  box-shadow: 2px 2px 6px grey;
`;

const WrapTable = styled.div`
  display: flex;
  flex: 5;
  flex-flow: column;
  min-height: 700px;
  padding-top: 8px;
`;

const ButtonCustom = styled.button`
  width: 200px;
  line-height: 40px;
  border-radius: 6px;
  color: white;
  border: 0.3px solid #57ba87;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 2px 2px 6px grey;
  margin-top: 10px;
  transition: 0.5s;
  background-image: linear-gradient(to right, #051937, #004468);
  :hover {
    color: #68d69d;
    transform: scale(1.1);
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
`;

const WrapForm = styled.form`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const PassWapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;
