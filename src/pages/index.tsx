import {
  Checkbox,
  Container,
  Flex,
  HStack,
  VStack,
  Text,
  Box,
  CheckboxGroup,
  FormLabel,
  Stack,
  IconButton,
  Button,
  Input,
  FormControl,
  CloseButton
} from '@chakra-ui/react'
import { CloseIcon, AddIcon, RepeatIcon } from '@chakra-ui/icons'

import * as React from 'react'
import { ColorPicker } from '../components/ColorPicker'
import { getShapesList } from '../lib/getShapesList'
import { IconPicker } from '../components/IconPicker'
import { ShapeProps } from '../components/ShapeIcon'
import { SvgGrid } from '../components/SvgGrid'
import {
  initialSettings,
  initialShapes,
  randomShape,
  rangeFieldsConfig
} from '../lib/helpers'
import { SliderInput } from '../components/SliderInput'

interface HomeProps {}

function Home() {
  const [settings, setSettings] = React.useState(initialSettings)
  const [shapes, setShapes] = React.useState(initialShapes)
  const seedInputRef = React.useRef<any>(null)
  const shapesList: ShapeProps[] = getShapesList({ settings, shapes })

  const setBackgroundColor = (backgroundColor: string) => {
    setSettings(state => ({ ...state, backgroundColor }))
  }

  const addShape = () => {
    setShapes(state => [...state, randomShape()])
  }

  const removeShape = (id: string) => {
    const index = shapes.findIndex(shape => shape.id === id)
    setShapes(state => [...state.slice(0, index), ...state.slice(index + 1)])
  }

  const updateShape = (id: string, fieldKey: string, fieldValue: any) => {
    const index = shapes.findIndex(shape => shape.id === id)
    setShapes(state => [
      ...state.slice(0, index),
      { ...state[index], [fieldKey]: fieldValue },
      ...state.slice(index + 1)
    ])
  }

  const reseed = (e: any) => {
    e.preventDefault()
    seedInputRef.current.value = Math.round(Math.random() * 10000).toString()
    setSettings(state => ({ ...state, ['seed']: seedInputRef.current.value }))
  }

  return (
    <Container maxW="100%" w="auto" p={0}>
      <Flex h="100vh" direction="row">
        <Stack
          flex="none"
          maxW="md"
          w="100%"
          p={4}
          bg="gray.100"
          direction={'column'}
        >
          {/* SETTINGS */}
          <Stack
            spacing="4"
            direction={'column'}
            bgColor="white"
            borderRadius="lg"
            px={4}
            py={4}
          >
            {rangeFieldsConfig.map(({ name, label, min, max, step }) => (
              <SliderInput
                key={name}
                onChange={value =>
                  setSettings(state => ({ ...state, [name]: value }))
                }
                value={settings[name]}
                min={min}
                max={max}
                step={step}
                label={label}
              />
            ))}
            <Flex alignItems="center">
              <FormLabel mb={0}>Background Color</FormLabel>
              <ColorPicker
                color={settings.backgroundColor}
                setColor={setBackgroundColor}
              />
              <Text>{settings.backgroundColor}</Text>
            </Flex>

            <Flex alignItems={'center'}>
              <FormLabel>Seed</FormLabel>
              <Input
                size={'sm'}
                type="text"
                maxW="fit-content"
                ref={seedInputRef}
                onChange={e =>
                  setSettings(state => ({ ...state, ['seed']: e.target.value }))
                }
              />
              <IconButton
                icon={<RepeatIcon />}
                aria-label={'repeat-icon'}
                variant="ghost"
                colorScheme={'teal'}
                onClick={reseed}
              />
            </Flex>
          </Stack>

          {/* ADD SHAPE ICONS */}
          <Stack
            spacing="4"
            direction={'column'}
            bgColor="white"
            borderRadius="lg"
            px={4}
            py={4}
          >
            {shapes.map(shape => (
              <Box
                key={shape.id}
                border="gray.200"
                position="relative"
                borderWidth={2}
              >
                <Stack
                  direction="column"
                  spacing={2}
                  mr="12"
                  pl={4}
                  pr={8}
                  py={2}
                >
                  <Stack spacing={2} direction={'row'} alignItems="center">
                    <IconPicker
                      color={shape.color}
                      icon={shape.name}
                      onChange={value => updateShape(shape.id, 'name', value)}
                    />
                    <SliderInput
                      label="Odds"
                      min={1}
                      max={100}
                      step={1}
                      value={shape.odds}
                      onChange={value => updateShape(shape.id, 'odds', value)}
                    />
                  </Stack>
                  <Stack spacing={2} direction={'row'}>
                    <Checkbox
                      isChecked={shape.scale}
                      onChange={e =>
                        updateShape(shape.id, 'scale', e.target.checked)
                      }
                    >
                      scale
                    </Checkbox>
                    <Checkbox
                      isChecked={shape.rotate}
                      onChange={e =>
                        updateShape(shape.id, 'rotate', e.target.checked)
                      }
                    >
                      rotate
                    </Checkbox>
                  </Stack>
                  <Stack spacing={2} direction={'row'}>
                    <Text>Color</Text>
                    <ColorPicker
                      color={shape.color}
                      setColor={value => updateShape(shape.id, 'color', value)}
                    />

                    <Checkbox
                      isChecked={shape.isRandomColor}
                      onChange={e =>
                        updateShape(shape.id, 'isRandomColor', e.target.checked)
                      }
                    >
                      random
                    </Checkbox>
                  </Stack>
                </Stack>

                <IconButton
                  icon={<CloseIcon />}
                  variant="ghost"
                  colorScheme="teal"
                  aria-label="Delete Shape"
                  size="xs"
                  onClick={() => removeShape(shape.id)}
                  position="absolute"
                  right={1}
                  top={1}
                />
              </Box>
            ))}
            <Button
              leftIcon={<AddIcon />}
              colorScheme="pink"
              variant="solid"
              onClick={addShape}
            >
              Add Shape
            </Button>
          </Stack>
        </Stack>

        <VStack
          w="auto"
          overflowY="auto"
          minH="fit-content"
          h="100vh"
          flexGrow="1"
        >
          <main className="block">
            <SvgGrid settings={settings} shapesList={shapesList} />
          </main>
        </VStack>
      </Flex>
    </Container>
  )
}

export default Home
