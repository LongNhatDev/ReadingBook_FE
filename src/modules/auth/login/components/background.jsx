import styled from "styled-components";
import bg_image from '../../../../assets/image/bg_image.png'

const BackgroundCSS = styled.div`
  width: 100%;
  height: 713px;
  background: url(${bg_image});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default BackgroundCSS;
