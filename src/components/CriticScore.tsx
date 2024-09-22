import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = (props: Props) => {
  const { score } = props;

  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge
      fontSize="14px"
      paddingX="0.5rem"
      borderRadius="4px"
      colorScheme={color}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
