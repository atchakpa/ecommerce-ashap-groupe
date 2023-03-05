import { Box, HStack, Text, Icon, Divider, CloseButton } from '@chakra-ui/react'

export default function HeaderTitle ({
  title = '',
  subTitle = '',
  textAlign = 'left',
  fontWeight = 'normal',
  titleSize = '2xl',
  subTitleSize = 'xs',
  icon,
  iconSize = 10,
  divider,
  onClose,
  justifyContent,
  actions,
  position,
  top
}) {
  return (
    <Box
      width='full'
      position={position}
      top={top}
    >
      <HStack
        justifyContent={justifyContent || onClose ? 'space-between' : 'flex-start'}
        alignItems='center'
        width='full'
      >
        <HStack width='full'>
          {
            icon && (
              <Icon as={icon} w={iconSize} h={iconSize} />
            )
          }
          <Box lineHeight='none' fontWeight={fontWeight} width='full'>
            <Text textAlign={textAlign} fontSize={titleSize}>{title}</Text>
            <Text textAlign={textAlign} fontSize={subTitleSize}>{subTitle}</Text>
          </Box>
        </HStack>
        {actions}
        {
          onClose && (
            <CloseButton
              onClick={() => onClose()}
            />
          )
        }
      </HStack>

      {
        divider && (
          <Divider mt={2} />
        )
      }

    </Box>
  )
}
