import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import styled from "styled-components";
const Footer = () => {
  return (
    <FooterDiv>
      <ColSocial>
        <H2Css>READING BOOK</H2Css>
        <Social>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
          <FaTiktok />
        </Social>
        <Social>
          <FaCopyright />
          <p>2022 Reading Book</p>
        </Social>
      </ColSocial>
      <Col>
        <H2Css>TEAM MEMBER</H2Css>
        <p>Tran Long Nhat</p>
        <p>Truong Van Luyn</p>
        <p>Ngo Thi Ngoc</p>
        <p>Hoang Thi Mai Linh</p>
      </Col>
      <Col>
        <H2Css>RESOURCE</H2Css>
        <p>WebNovel.com</p>
        <p>Wikipedia.org</p>
        <p>Youtube.com</p>
        <p>Google.com</p>
      </Col>
      <Col>
        <H2Css>TOOLS</H2Css>
        <p>Github</p>
        <p>Jira</p>
        <p>Confluence</p>
        <p>GG meet</p>
      </Col>
      <Col>
        <H2Css>FRAMEWORK & INFRASTRUCTURE</H2Css>
        <p>React JS</p>
        <p>Node JS</p>
        <p>Monggo DB</p>
        <p>Amazon S3</p>
      </Col>
      <Col></Col>
    </FooterDiv>
  );
};

export default Footer;

const FooterDiv = styled.div`
  background-color: #051937;
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  padding: 70px 200px;
`;
const Col = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: left;
`;
const ColSocial = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
`;
const H2Css = styled.h2`
  margin-bottom: 50px;
`;
const Social = styled.div`
  margin: 10px 0;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
`;
