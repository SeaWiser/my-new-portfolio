import * as React from 'react';
import { Button } from '@react-email/button';
import { Container } from "@react-email/container";

export function Email(props: { url: any; }) {
  const {url} = props;

  return (
    <Container className="email__container">
      <Button href={url}>Click me</Button>
    </Container>
  );
}
