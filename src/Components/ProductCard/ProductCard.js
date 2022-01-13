import { CardContainer, CardImage } from "./ProductCard.Styles";
import { FlexColumn, Typography } from "../../App.Styles";

function ProductCard(props) {
  return (
    <CardContainer
      backgroundcard={props.backgroundCard}
      widthborder={props.widthborder}
      radius={props.borderRadius}
      to={`/product/${props.id}/${props.name}`}
    >
      <CardImage
        radius={props.borderRadius}
        src={props.image}
        alt={props.name}
      />
      <FlexColumn>
        <Typography
          fontSize={18}
          style={{ textAlign: "center", margin: "10px" }}
        >
          {props.name}
        </Typography>
        {props.children}
      </FlexColumn>
    </CardContainer>
  );
}

export default ProductCard;
