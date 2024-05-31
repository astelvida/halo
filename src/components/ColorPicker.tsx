import { Box } from '@chakra-ui/react'
import * as React from 'react'
import { HexColorPicker } from 'react-colorful'
import useClickOutside from '../hooks/useClickOutside'
interface ColorPickerProps {
  color: string
  setColor: (value: string) => void
}

export const ColorPicker = ({ color, setColor }: ColorPickerProps) => {
  const popover = React.useRef(null)
  const [isOpen, toggle] = React.useState(false)

  const close = React.useCallback(() => toggle(false), [])
  useClickOutside(popover, close)

  return (
    <Box position="relative">
      <div
        className="swatch"
        style={{ backgroundColor: color }}
        onClick={() => toggle(true)}
      />
      {isOpen && (
        <div className="popover" ref={popover}>
          <HexColorPicker color={color} onChange={setColor} />
        </div>
      )}
    </Box>
  )
}
