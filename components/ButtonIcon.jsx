import _const from '@/helpers/_const'
import { IconButton, Tooltip, Icon } from '@chakra-ui/react'


export default function ButtonIcon ({
  label,
  icon,
  iconColor = 'gray.600',
  iconSize = _const.ICON_SIZE,
  action,
  colorScheme = _const.THEME_COLOR,
  variant,
  size = 'sm',
  isLoading,
  isDisabled,
  shadow='none'
}) {
  return (
    <Tooltip
      label={label}
      hasArrow
      rounded={5}
    >
      <IconButton
        colorScheme={colorScheme}
        variant={variant}
        icon={<Icon color={iconColor} as={icon} h={iconSize} w={iconSize} />}
        onClick={action}
        size={size}
        isLoading={isLoading}
        isDisabled={isDisabled}
        shadow={shadow}
      />
    </Tooltip>
  )
}