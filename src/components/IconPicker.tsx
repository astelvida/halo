import { Box, GridItem, IconButton, SimpleGrid } from "@chakra-ui/react";
import * as React from "react";
import useClickOutside from "../hooks/useClickOutside";
import { ShapeIcon, shapeNames } from "./ShapeIcon";

interface IconPickerProps {
  icon: string;
  onChange: (value: any) => void;
}

export const IconPicker = ({ icon, onChange }: IconPickerProps) => {
  const popover = React.useRef(null);
  const [isOpen, toggle] = React.useState(false);

  const close = React.useCallback(() => toggle(false), []);
  useClickOutside(popover, close);
  const gridSize = React.useMemo(() => Math.ceil(Math.sqrt(shapeNames.length)), [])
  
  return (
    <Box position="relative">
      <IconButton
        mr="4"
        aria-label={icon}
        icon={<ShapeIcon name={icon} color="#6a663a" size={20} />}
        onClick={() => {
          toggle(true);
        }}
      />

      {isOpen && (
        <div className="popover" ref={popover}>
          <SimpleGrid spacingX={2} spacingY={2} columns={gridSize} height={'100%'} >
            {shapeNames.map((name) => (
              <GridItem key={name}>
                <IconButton
                  variant="ghost"
                  aria-label={name}
                  icon={<ShapeIcon name={name} color="#000000" size={24} />}
                  onClick={() => {
                    close();
                    onChange(name);
                  }}
                />
              </GridItem>
            ))}
          </SimpleGrid>
        </div>
      )}
    </Box>
  );
};
