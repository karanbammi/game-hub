import { useColorMode } from "@chakra-ui/react";

import { ButtonToolbar, CustomProvider, Dropdown } from "rsuite";
import "rsuite/dist/rsuite.css";
import pcplatforms from "../data/pcplatforms";
import xboxplatforms from "../data/xboxplatforms";
import playstationplatform from "../data/playstationplatform";
import iosplatform from "../data/iosplatform";
import androidplatform from "../data/andriodplatform";
import appleplatforms from "../data/appleplatforms";
import linuxplatform from "../data/linuxplatform";
import nitendoplatforms from "../data/nitendoplatforms";
import atariplatforms from "../data/atariplatforms";
import segaplatforms from "../data/segaplatforms";
import otherplatforms from "../data/platform";

export interface ParentPlatform {
  id: number;
  name: string;
}

interface Props {
  onSelectPlatform: (platform: ParentPlatform) => void;
  selectedPlatform: ParentPlatform | null;
}

const PlatformList = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <CustomProvider theme={colorMode}>
      <ButtonToolbar>
        <Dropdown title={selectedPlatform?.name || "Platforms"}>
          <Dropdown.Item onClick={() => onSelectPlatform(pcplatforms)}>
            PC
          </Dropdown.Item>
          <Dropdown.Menu title="PlayStation">
            {playstationplatform.map((platform) => (
              <Dropdown.Item
                onClick={() => onSelectPlatform(platform)}
                key={platform.id}
              >
                {platform.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
          <Dropdown.Menu title="Xbox">
            {xboxplatforms.map((platform) => (
              <Dropdown.Item
                onClick={() => onSelectPlatform(platform)}
                key={platform.id}
              >
                {platform.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
          <Dropdown.Item onClick={() => onSelectPlatform(iosplatform)}>
            iOS
          </Dropdown.Item>
          <Dropdown.Item onClick={() => onSelectPlatform(androidplatform)}>
            Andriod
          </Dropdown.Item>
          <Dropdown.Menu title="Apple">
            {appleplatforms.map((platform) => (
              <Dropdown.Item
                onClick={() => onSelectPlatform(platform)}
                key={platform.id}
              >
                {platform.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
          <Dropdown.Item onClick={() => onSelectPlatform(linuxplatform)}>
            Linux
          </Dropdown.Item>
          <Dropdown.Menu title="Nitendo">
            {nitendoplatforms.map((platform) => (
              <Dropdown.Item
                onClick={() => onSelectPlatform(platform)}
                key={platform.id}
              >
                {platform.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
          <Dropdown.Menu title="Atari">
            {atariplatforms.map((platform) => (
              <Dropdown.Item
                onClick={() => onSelectPlatform(platform)}
                key={platform.id}
              >
                {platform.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
          <Dropdown.Menu title="SEGA">
            {segaplatforms.map((platform) => (
              <Dropdown.Item
                onClick={() => onSelectPlatform(platform)}
                key={platform.id}
              >
                {platform.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
          <Dropdown.Menu title="Others">
            {otherplatforms.map((platform) => (
              <Dropdown.Item
                onClick={() => onSelectPlatform(platform)}
                key={platform.id}
              >
                {platform.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </ButtonToolbar>
    </CustomProvider>
  );
};

export default PlatformList;
