import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Box
  } from '@chakra-ui/react'

  import { useState } from 'react';


export default function InputRange(
    ) {
    const [sliderValue, setSliderValue] = useState(50)
  return (
    <>
      <Box alignContent="center" justifyContent='center' display='flex' backgroundColor="black" height="100vh">
      <Slider   width='80vw'     aria-label='slider-ex-6'mt='10'  height='3em' onChange={(val) => setSliderValue(val)}>
      <SliderMark value={25} mt='1' ml='-2.5' fontSize='sm'>
        25%
      </SliderMark>
      <SliderMark value={50} mt='1' ml='-2.5' fontSize='sm'>
        50%
      </SliderMark>
      <SliderMark value={75} mt='1' ml='-2.5' fontSize='sm'>
        75%
      </SliderMark>
      <SliderMark
        value={sliderValue}
        textAlign='center'
        
        bg='white'
        color='#4EB0B2'
        mt='-10'
        


        
        w='12'
        padding='6px'
        bottom='3.8px'
        zIndex= '5'
        borderRadius= '20px'
        width= '70px'
        height='2.5em'
        fontWeight='bold'
        
      >
        {sliderValue}%
      </SliderMark>
      <SliderTrack  borderRadius='20'  border='solid white 4px'  height='3em' backgroundImage="url('./images/dotIcon.svg')"   backgroundPosition="center"
       backgroundRepeat="no-repeat" >
        <SliderFilledTrack  backgroundColor='rgb(78, 176, 178,0.3)'   />
      </SliderTrack>
      <SliderThumb   
      width= '70px'
        height='2.5em'
         />
    </Slider>
      </Box>
    </>
  );
}


