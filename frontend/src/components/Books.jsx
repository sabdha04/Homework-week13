import { Card, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function Books({ id, title, author, image, publisher, year }) {
  return (
    <Link to={`/books/${id}`}>
    <Card key={id} my={4} p={4} cursor='pointer'>
      <VStack>
        <Heading size={"md"}>
          {title} ({year})
        </Heading>
        <Text color='blue'>{author}</Text>
        <Image w={24} h={24} src={`http://localhost:8000/${image}`} />
        <Text color='white'bg='red.800'>
          <span>Publisher: </span>
          {publisher}
        </Text>
      </VStack>
    </Card>
    </Link>
  );
}