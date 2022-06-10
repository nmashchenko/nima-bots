import React from 'react'
import Video from "../../videos/video.mp4";

import {
  Container,
  FormButton,
  FormContent,
  FormH1,
  FormWrap,
  Icon,
  Form,
  FormBg,
  VideoBg,
} from "./SuccessElements";

const OrderSuccess = () => {
  return (
    <Container>
    <FormBg>
      <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
    </FormBg>
    <FormWrap>
      <Icon to="/">🇺🇦 NIMA</Icon>
      <FormContent>
      <Form>
              <FormH1>Thanks for interest 🤙🏻</FormH1>
              <FormH1>We will contact you in telegram shortly 🔥</FormH1>
              <FormButton to="/">Done</FormButton>
            </Form>
      </FormContent>
    </FormWrap>
  </Container>
  )
}

export default OrderSuccess
