import { Fragment } from "react";

import { LinkContainer, LinkA } from "./LinkElements";

import { links } from "../Hero/data";

export default function Links() {
  return (
    <LinkContainer>
      {links.map(({ id, name, link, target, rel }, index) => (
        <Fragment key={id}>
          <LinkA key={id} isEmail="false" href={link} target={target} rel={rel}>
            {name}
          </LinkA>
          {index !== links.length - 1 && "|"}
        </Fragment>
      ))}
    </LinkContainer>
  );
}
