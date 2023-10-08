import { Card, Flex, Box, Text } from "@radix-ui/themes";

// Icons
import { IoMdCall } from "react-icons/io";
import { AiFillHeart } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const NavTopArea = () => {
  return (
    <Card
      style={{
        backgroundColor: "#F8F8F8",
        width: "100%",
      }}
    >
      <Flex justify={"between"} align={"center"}>
        <Box className="gap-x-6 flex">
          <Text>Welcome to Our store Multikart</Text>
          <Box className="flex items-center ">
            <IoMdCall />
            <Text>Call Us: 123 - 456 - 7890</Text>
          </Box>
        </Box>
        <Box className="flex gap-x-5">
          <Box className="flex items-center gap-x-2">
            <AiFillHeart />
            <Text>Wishlist</Text>
          </Box>
          <Box className="items-center flex gap-x-2">
            <BsFillPersonLinesFill />
            <Text>My Account</Text>
          </Box>
        </Box>
      </Flex>
    </Card>
  );
};

export default NavTopArea;
