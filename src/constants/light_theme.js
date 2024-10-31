import { Dimensions, Platform, PixelRatio, StyleSheet } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const { width, height } = Dimensions.get('window');
// based on iphone 5s's scale
const scale = width / 320;

export function normalize(size) {
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
    radius: 10,
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


  const images = {
    // manshoudCard: require('../images/manshoudCard.png'),
    // manshoudCard2X: require('../images/manshoudCard_2x.png'),
    // manshoudCard3x: require('../images/manshoudCard_3x.png'),
    // inspectionHeader: require('../images/InspectionHeader.png'),
    // inspectionHeader2X: require('../images/InspectionHeader_2x.png'),
    // inspectionHeader3x: require('../images/InspectionHeader_3x.png'),
    // checkmarkOutline: require('../images/checkmarkOutline.png'),
    // checkmarkOutline2x: require('../images/checkmarkOutline_2x.png'),
    // checkmarkOutline3x: require('../images/checkmarkOutline_3x.png'),
    // videothumbnail: require('../images/video_thumbnail.png'),
    // manshoudLiveHeader: require('../images/manshoud_live_header.png'),
    // iconLive: require('../images/icon_live.gif'),
    // termsPopup: require('../images/terms_popup_header.png'),
    // phoneicon: require('../images/newicons/phoneicon.png'),
    // plus: require('../images/newicons/plus.png'),
    // send: require('../images/newicons/send.png'),
    // home: require('../images/newicons/home.png'),
    // home_selected: require('../images/newicons/home_selected.png'),
    // messages: require('../images/newicons/messages.png'),
    // notification: require('../images/newicons/notification.png'),
    // profile: require('../images/newicons/profile.png'),
    // profile_selected: require('../images/newicons/profile_selected.png'),
    // messages_selected: require('../images/newicons/messages_selected.png'),
    // notification_selected: require('../images/newicons/notification_selected.png'),
    // user: require('../images/newicons/user.png'),
    // mycars: require('../images/newicons/mycars.png'),
    // mybids: require('../images/newicons/mybids.png'),
    // mysubs: require('../images/newicons/mysubs.png'),
    // myblocks: require('../images/newicons/myblocks.png'),
    // onlinesupport: require('../images/newicons/onlinesupport.png'),
    // logout: require('../images/newicons/logout.png'),
    // forwordarrow: require('../images/newicons/forwordarrow.png'),
    // backarrow: require('../images/newicons/backarrow.png'),
    // unchecked: require('../images/newicons/unchecked.png'),
    // checked: require('../images/newicons/checked.png'),
    // location: require('../images/newicons/location.png'),
    // mileage: require('../images/newicons/mileage.png'),
    // nonotification: require('../images/newicons/nonotification.png'),
    // readall: require('../images/newicons/readall.png'),
    // deleteall: require('../images/newicons/deleteall.png'),
    // deleteall: require('../images/newicons/deleteall.png'),
    // nomessages: require('../images/newicons/nomessages.png'),
    // saudiflag: require('../images/newicons/saudiflag.png'),
    // backarrowblue: require('../images/newicons/backarrowblue.png'),
    // tooltip: require('../images/newicons/tooltip.png'),
    // edit: require('../images/newicons/edit.png'),
    // circle: require('../images/newicons/circle.png'),
    // shareicon: require('../images/newicons/shareicon.png'),
    // backarrowblack: require('../images/newicons/backarrowblack.png'),
    // messagesoutline: require('../images/newicons/messagesoutline.png'),
    // danger: require('../images/newicons/danger.png'),
    // addbidbyowner: require('../images/newicons/addbidbyowner.png'),
    // checkmarkround: require('../images/newicons/checkmark.png'),
    // plusCircle: require('../images/newicons/plusCircle.png'),
    // minusCircle: require('../images/newicons/minusCircle.png'),
    // tickmark: require('../images/newicons/tickmark.png'),
    // tooltipgreen: require('../images/newicons/tooltipgreen.png'),
    // tooltipyellow: require('../images/newicons/tooltipyellow.png'),
    // speed: require('../images/newicons/speed.png'),
    // markergray: require('../images/newicons/markergray.png'),
    // moneynotes: require('../images/newicons/moneynotes.png'),
    // notification_lightgray: require('../images/newicons/notification_lightgray.png'),
    // arrowup: require('../images/newicons/arrowup.png'),
    // time: require('../images/newicons/time.png'),

  }
  
  export { colors, sizes, fonts, android, ios, images, components_styles };