import { Dimensions, Platform, PixelRatio, StyleSheet } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const { width, height } = Dimensions.get('window');
// based on iphone 5s's scale
const scale = width / 320;

export function normalize(size:number) {
  const newSize = size * scale 
  if (Platform.OS === 'ios') { return Math.round(PixelRatio.roundToNearestPixel(newSize)) }
  else { return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2}
}

const colors = {
    accent: "#F3534A",
    primary: "#5078FB",
    secondary: "#2BDA8E",
    tertiary: "#FFE358",
    bluenewdesign:"#5178FB",
    black: "#051623",
    white: "#FFFFFF",
    header: "#FFFFFF",
    tabs: "#FFFFFF",
    gray: "rgba(0, 0, 0, 0.3)",
    gray2: "#99A2BD",
    graynewstyle: "#ebeded",
    light_graynewstyle:'#99A2BD',
    green: "#5BC0BE",
    blue: "#0160ba",
    red: "red",
    light_red: "#955549",
    light_gray: "rgb(243, 243, 243)",
    map_marker_color:"#ad1f1f",
    gray_bg_input: "#e7e7e8",
    gray_text_input:"#a9a9ae",
    green_label:"#498124",
    gray_label: "#696969",
    gray_timer_bg:"#f5f5f5",
    gray_timer_border:"#dedede",
    gray_secondary_label:"#a9a9a9",
    black_label:"#000000",
    gray_button:"#a29f9f",
    green_button:"#08c503",
    red_label:"rgb(172, 0, 0)",
    chat_composer_border:"rgba(169, 164, 161, 1)",
    chat_composer_background:"rgba(244, 244, 244, 1)",
  };
  
  const sizes = {
    base: 16,
    font: 14,
    radius: 20,
    padding: 25,

    h1: 26,
    h2: 20,
    h3: 17,
    small: 10,
    header: 16,
    title: 18,
    body: 14,
    caption: 12,
  };
  
  const fonts = {
    h1: {
      fontSize: sizes.h1
    },
    h2: {
      fontSize: sizes.h2
    },
    h3: {
      fontSize: sizes.h3
    },
    header: {
      fontSize: sizes.header
    },
    title: {
      fontSize: sizes.title
    },
    body: {
      fontSize: sizes.body
    },
    caption: {
      fontSize: sizes.caption
    },
    small: {
      fontSize: sizes.small
    },
    ge_ss: {
      font_regular: "GESSTwoMedium-Medium",
      font_medium: "GESSTwoMedium-Medium",
      font_bold: "GESSTwoBold-Bold",
      font_light: "GESSTwoLight-Light",
    },
    dubai: {
      font_regular: "Dubai-Regular",
      font_medium: "Dubai-Medium",
      font_bold: "Dubai-Bold",
      font_light: "Dubai-Light",
    }
  };

  const android = {
    icon_shadow: {
      shadowColor: colors.black,
      shadowOpacity: 0.7,
      textShadowRadius:10,
      textShadowOffset: {
          width: 0,
          height: 5,// Can't both be 0
      },
    },
    box_shadow: {
      shadowColor: colors.black,
      shadowOpacity: 0.7,
      textShadowRadius:20,
      textShadowOffset: {
          width: 0,
          height: 5,
      },
    }
  }
  const ios = {
    icon_shadow: {
      shadowColor: colors.black,
      shadowOpacity: 0.7,
      shadowRadius: 2,
      shadowOffset: {
          width: 0,            // These can't both be 0
          height: 2,         // i.e. the shadow has to be offset in some way
      }
    },
    box_shadow: {
      shadowColor: colors.black,
      shadowOpacity: 0.2,
      shadowRadius:4,
      shadowOffset: {
          width: 0,
          height: 1,
      },
    }
  }

  const components_styles = { 
    headerStyle: {
      shadowColor: 'transparent',
      elevation: 0,
      backgroundColor: colors.header,
      borderBottomColor: colors.gray,
      borderBottomWidth: StyleSheet.hairlineWidth,
      height: Platform.OS == 'ios' && DeviceInfo.hasNotch() ? 90 : Platform.OS == 'ios' ? 70 : 50
    },
    headerTitleStyle: {
      fontFamily: 'IBMPlexSansArabic',
      color: colors.primary,
      fontSize: sizes.header,
      alignSelf: 'center',
      textAlign: 'center',
      fontWeight: 'bold'
    },
    menu_item_container: {
      paddingVertical: 20,
      marginVertical: 0,
      borderBottomColor: '#F5F6F9',
      borderBottomWidth:1,
      height:69,
      backgroundColor:'#FFFFFF'
    },
    menu_item: { justifyContent: "space-between", paddingHorizontal:10 },
    menu_item_checkbox: {  paddingHorizontal:10 },

    menu_item_title: { },
  }


  // const images = {
  //   logo: require('../images/cook/Logo2.png'),
  //   logo2X: require('../images/cook/Logo2.png'),
  //   logo3x: require('../images/cook/Logo2.png'),
  // }
  
  export { colors, sizes, fonts, android, ios, components_styles };