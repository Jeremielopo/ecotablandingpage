import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton

} from '@chakra-ui/react'
import { HamburgerIcon} from '@chakra-ui/icons'

export default function Navelements() {
  return (
    <>
    <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
    _hover={{ bg: 'trasparent' }}
    _expanded={{ bg: 'blue.400' }}
    borderColor='transparent'
    color='#012130'
    fontSize='4em'
    
    
  />
  <MenuList>
    <MenuItem >
      New Tab
    </MenuItem>
    <MenuItem >
      New Window
    </MenuItem>
    <MenuItem >
      Open Closed Tab
    </MenuItem>
    <MenuItem >
      Open File...
    </MenuItem>
  </MenuList>
</Menu>
    </>
  )
}
