import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import placeholder from '../../images/place.png';

const ProductCard = ({ image, name, id, price, href, summary }) => (
  <Card link={true} href={href}>
    {placeholder ? (
      <Image src={placeholder} wrapped ui={false} />
    ) : (
      ''
    )}
    <Card.Content>
      <Card.Header>{name}</Card.Header>

      <Card.Description>
        {summary
          ? `${summary.substring(0, 42)}...`
          : ` Lorem ipsum dolor sit amet consectetur adipisicing elit.`}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="pound" />
        {price}
      </a>
    </Card.Content>
  </Card>
);

export default ProductCard;
