import { useColorMode } from "@chakra-ui/react";

import { ButtonToolbar, CustomProvider, Dropdown } from "rsuite";
import "rsuite/dist/rsuite.css";
import androidplatform from "../data/andriodplatform";
import appleplatforms from "../data/appleplatforms";
import atariplatforms from "../data/atariplatforms";
import iosplatform from "../data/iosplatform";
import linuxplatform from "../data/linuxplatform";
import nitendoplatforms from "../data/nitendoplatforms";
import pcplatforms from "../data/pcplatforms";
import otherplatforms from "../data/platform";
import playstationplatform from "../data/playstationplatform";
import segaplatforms from "../data/segaplatforms";
import xboxplatforms from "../data/xboxplatforms";
import useGameQueryStore from "../store";

export interface ParentPlatform {
  id: number;
  name: string;
}

const PlatformList = () => {
  const { colorMode } = useColorMode();
  const selectedPlatform = useGameQueryStore((s) => s.gameQuery.platform);
  const setPlatform = useGameQueryStore((s) => s.setPlatform);
  return (
    <CustomProvider theme={colorMode}>
      <ButtonToolbar>
        <Dropdown title={selectedPlatform?.name || "All Platforms"}>
          <Dropdown.Item onClick={() => setPlatform({} as ParentPlatform)}>
            All Platforms
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setPlatform(pcplatforms)}>
            PC
          </Dropdown.Item>
          <Dropdown.Menu title="PlayStation">
            {playstationplatform.map((platform) => (
              <Dropdown.Item
                onClick={() => setPlatform(platform)}
                key={platform.id}
              >
                {platform.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
          <Dropdown.Menu title="Xbox">
            {xboxplatforms.map((platform) => (
              <Dropdown.Item
                onClick={() => setPlatform(platform)}
                key={platform.id}
              >
                {platform.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
          <Dropdown.Item onClick={() => setPlatform(iosplatform)}>
            iOS
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setPlatform(androidplatform)}>
            Andriod
          </Dropdown.Item>
          <Dropdown.Menu title="Apple">
            {appleplatforms.map((platform) => (
              <Dropdown.Item
                onClick={() => setPlatform(platform)}
                key={platform.id}
              >
                {platform.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
          <Dropdown.Item onClick={() => setPlatform(linuxplatform)}>
            Linux
          </Dropdown.Item>
          <Dropdown.Menu title="Nitendo">
            {nitendoplatforms.map((platform) => (
              <Dropdown.Item
                onClick={() => setPlatform(platform)}
                key={platform.id}
              >
                {platform.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
          <Dropdown.Menu title="Atari">
            {atariplatforms.map((platform) => (
              <Dropdown.Item
                onClick={() => setPlatform(platform)}
                key={platform.id}
              >
                {platform.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
          <Dropdown.Menu title="SEGA">
            {segaplatforms.map((platform) => (
              <Dropdown.Item
                onClick={() => setPlatform(platform)}
                key={platform.id}
              >
                {platform.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
          <Dropdown.Menu title="Others">
            {otherplatforms.map((platform) => (
              <Dropdown.Item
                onClick={() => setPlatform(platform)}
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
