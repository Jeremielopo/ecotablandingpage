import { Box  } from '@chakra-ui/react'
import { ChevronRightIcon} from '@chakra-ui/icons'
interface appProps {
    name?:string;
    width?:string;
    height?:string;
    color?:string;
    bg?:string;
    borderRadius?:string;
    fontSize?:string;
    pb?:string;
    pl?:string;
}

export default function button({name=`button`,
width='144px',
height='48px',
color='white',
bg='#358D8F',
borderRadius='28',
fontSize = '20',
pb='1.5',
pl='3',
}:appProps) {
  return (
   
<>
<Box
as='button'
bg={bg} 
height={height}
color={color}
width={width}
borderRadius={borderRadius}
fontSize={fontSize}
pb={pb}
pl={pl}

>{name}  <ChevronRightIcon w={6} h={6} /> </Box>
</>
  )
}
