import React, { useState } from "react";
import {
  ContactContainer,
  Form,
  FormContent,
  FormWrap,
  FormButton,
  FormInput,
  FormInputMsg,
  ContactBg,
  VideoBg,
  ContactH1,
  ContentP,
  ContactBtnWrapper,
} from "./ContactMe";
import { ArrowForward, ArrowRight } from "../hero/HeroElements";
import bg_video from "../../videos/goodbye.mp4";
import { ButtonElement } from "../ButtonElement";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/e7b20dd0-d8a6-11ed-b656-837b57be60e0";

const ContactMe = () => {
  const [status, setStatus] = useState();

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover); //set hover to true or false depending on current state
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const injectedData = {
      DYNAMIC_DATA_EXAMPLE: 123,
    };

    const inputs = e.target.elements;

    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    Object.assign(data, injectedData);

    fetch(FORM_ENDPOINT, {
      method: "POST",

      headers: {
        Accept: "application/json",

        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    })
      .then((response) => {
        // It's likely a spam/bot request, so bypass it to validate via captcha

        if (response.status === 422) {
          Object.keys(injectedData).forEach((key) => {
            const el = document.createElement("input");

            el.type = "hidden";

            el.name = key;

            el.value = injectedData[key];

            e.target.appendChild(el);
          });

          e.target.submit();

          throw new Error("Please finish the captcha challenge");
        }

        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.json();
      })

      .then(() => setStatus("We'll be in touch soon."))

      .catch((err) => setStatus(err.toString()));
  };

  if (status) {
    return (
      <>
        <ContactContainer>
          <ContactBg>
            <VideoBg autoPlay loop muted src={bg_video} type="video/mp4" />
          </ContactBg>
          <ContactH1>Thank you for your message </ContactH1>
          <ContentP>{status}</ContentP>
          <ContactBtnWrapper>
            <ButtonElement
              to="/"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              Home {hover ? <ArrowForward /> : <ArrowRight />}
            </ButtonElement>
          </ContactBtnWrapper>
        </ContactContainer>
      </>
    );
  }

  return (
    <>
      <ContactContainer>
        <ContactBg>
          <VideoBg autoPlay loop muted src={bg_video} type="video/mp4" />
        </ContactBg>
        <ContactH1>Message </ContactH1>
        <FormWrap>
          <FormContent>
            <Form
              action={FORM_ENDPOINT}
              onSubmit={handleSubmit}
              method="POST"
              target="_blank"
            >
              <FormInput
                type="text"
                placeholder="Your name"
                name="name"
                required
              />
              <FormInput type="email" placeholder="Email" name="email" />
              <FormInputMsg
                placeholder="Your message"
                name="message"
                required
              />
              <FormButton type="submit">Send a message</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </ContactContainer>
    </>
  );
};

export default ContactMe;
