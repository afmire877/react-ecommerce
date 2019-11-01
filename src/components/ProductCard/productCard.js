import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const ProductCard = ({ image, name, id, price }) => (
  <Card>
    {image ? <Image src={image} wrapped ui={false} /> : ''}
    <Card.Content>
      <Card.Header>{name}</Card.Header>

      <Card.Description>
        Matthew is a musician living in Nashville.
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
