import {
  Button,
  Heading,
  HStack,
  Image,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = (props: Props) => {
  const { selectedGenreId, onSelectGenre } = props;
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  // if (isLoading) return <Spinner />;

  return (
    <>
      {isLoading && <GenreListSkeleton />}
      <Heading
        fontSize="2xl"
        marginBottom={3}
      >
        Genres{" "}
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem
            key={genre.id}
            paddingY="5px"
          >
            <HStack>
              <Image
                boxSize="50px"
                objectFit="cover"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                fontSize="lg"
                variant="link"
                onClick={() => {
                  onSelectGenre(genre);
                }}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
