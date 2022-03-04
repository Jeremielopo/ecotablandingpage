import { Global } from '@emotion/react'

const Fonts = () => (
  <Global 
  styles={`
  /*     Thin              */     
  @font-face {
    font-family: "'Roboto', sans-serif";
    font-weight: 100;
    src: url('./Roboto/Roboto-Thin.ttf') format('ttf');
  }
  @font-face {
    font-family: "'Roboto', sans-serif";
    font-weight: 100;
    font=style:italic;
    src: url('./Roboto/Roboto-ThinItalic.ttf') format('ttf');
  }

/*     Light              */     

  @font-face {
    font-family: "'Roboto', sans-serif";
    font-weight: 300;
    src: url('./Roboto/Roboto-Light.ttf') format('ttf');
  }
  @font-face {
    font-family: "'Roboto', sans-serif";
    font-weight: 300;
    font=style:italic;
    src: url('./Roboto/Roboto-LightItalic.ttf') format('ttf');
  }

  /*     Regular          */     

  @font-face {
    font-family: "'Roboto', sans-serif";
    font-weight: normal;
    src: url('./Roboto/Roboto-Regular.ttf') format('ttf');
  }
  @font-face {
    font-family: "'Roboto', sans-serif";
    font-weight: normal;
    font=style:italic;
    src: url('./Roboto/Roboto-Italic.ttf') format('ttf');
  }
  
  
  /*     Medium          */     

  @font-face {
    font-family: "'Roboto', sans-serif";
    font-weight: 500;
    src: url('./Roboto/Roboto-Medium.ttf') format('ttf');
  }
  @font-face {
    font-family: "'Roboto', sans-serif";
    font-weight: 500;
    font=style:italic;
    src: url('./Roboto/Roboto-MediumItalic.ttf') format('ttf'); 
  }
  
  
  /*     Bold          */     

  @font-face {
    font-family: "'Roboto', sans-serif";
    font-weight: 700;
    src: url('./Roboto/Roboto-Bold.ttf') format('ttf');
  }
  @font-face {
    font-family: "'Roboto', sans-serif";
    font-weight: 700;
    font=style:italic;
    src: url('./Roboto/Roboto-BoldItalic.ttf') format('ttf');
  }
  
  
  /*     Black          */     

  @font-face {
    font-family: "'Roboto', sans-serif";
    font-weight: normal;
    src: url('./Roboto/Roboto-Black.ttf') format('ttf');
  }
  @font-face {
    font-family:"'Roboto', sans-serif";
    font-weight: normal;
    font=style:italic;
    src: url('./Roboto/Roboto-BlackItalic.ttf') format('ttf');
  }
  
  
  `}
  
  />
)

export default Fonts 