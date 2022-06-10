import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import axios from "axios";

import {
  Container,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Form,
  FormBg,
  VideoBg,
} from "./OrderElements";

const Order = () => {
  const [tgusername, setTgUsername] = useState("");
  const [request, setRequest] = useState("");

  const usernameUpdate = (event) => {
    setTgUsername(event.target.value);
  };

  const requestUpdate = (event) => {
    setRequest(event.target.value);
  };

  const handleSubmit = async () => {
    const postURL = "http://localhost:3000/order";
    await axios
      .post(
        postURL,
        {
          tgusername,
          request,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        setTgUsername("");
        setRequest("");
      });
  };

  return (
    <>
      <Container>
        <FormBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </FormBg>
        <FormWrap>
          <Icon to="/">🇺🇦 NIMA</Icon>
          <FormContent>
            <Form action="/order-success" onSubmit={handleSubmit}>
              <FormH1>Okay, what you need? 🤙🏻</FormH1>
              <FormLabel htmlFor="for">Telegram Username</FormLabel>
              <FormInput
                required
                onChange={usernameUpdate}
                value={tgusername}
              />
              <FormLabel htmlFor="for">Brief Description</FormLabel>
              <FormInput required onChange={requestUpdate} value={request} />
              <FormButton type="submit">Order</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Order;
