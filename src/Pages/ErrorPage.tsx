import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box, Heading, Text } from "@chakra-ui/react";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={"10px"}>
        <Heading>Oops!</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "The Page does not Exist"
            : "An unexpected error occured"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
