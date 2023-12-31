import {
  FaWindows,
  FaPlaystation,
  FaAndroid,
  FaXbox,
  FaLinux,
  FaApple,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Platform } from "../entities/Platform";

interface props {
  platform: Platform[];
}

const PlatformIconList = ({ platform }: props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    playstation5: FaPlaystation,
    linux: FaLinux,
    nintendo: SiNintendo,
    android: FaAndroid,
    ios: MdPhoneIphone,
    xbox: FaXbox,
    mac: FaApple,
    web: BsGlobe,
  };

  return (
    <HStack marginTop={"10px"}>
      {platform.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} opacity={"50%"} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
