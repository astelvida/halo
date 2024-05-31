import {
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack
} from '@chakra-ui/react'
import * as React from 'react'

interface SliderInputProps {
  label: string
  value: number
  min: number
  max: number
  step?: number
  onChange(value: string | number): any
}

export const SliderInput = ({
  label,
  min,
  max,
  step = 1,
  value,
  onChange = () => {}
}: SliderInputProps) => {
  return (
    <Flex alignItems="center" flex="1">
      <FormLabel mb={0}>{label}</FormLabel>
      <Slider
        flex="1"
        size={'md'}
        colorScheme="pink"
        focusThumbOnChange={false}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb
          fontSize="xs"
          fontWeight="medium"
          boxSize="32px"
          bgColor="pink.500"
          color="white"
        >
          {value}
        </SliderThumb>
      </Slider>
    </Flex>
  )
}
