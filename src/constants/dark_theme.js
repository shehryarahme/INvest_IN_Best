import {Dimensions, Platform, PixelRatio} from 'react-native';
import {theme} from '.';

const {width, height} = Dimensions.get('window');
// based on iphone 5s's scale
const scale = width / 320;

export function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

const colors = {
  accent: '#F3534A',
  primary: '#6842FF',
  secondary: '#2BDA8E',
  tertiary: '#FFE358',
  black: '#181A20',
  white: '#FFFFFF',
  header: '#f8f8f8',
  tabs: '#f8f8f8',
  gray: 'rgba(0, 0, 0, 0.3)',
  gray2: '#787878',
  green: 'rgb(48, 132, 0)',
  blue: '#0160ba',
  red: 'red',
  light_red: '#955549',
  light_gray: 'rgb(243, 243, 243)',
  map_marker_color: '#ad1f1f',
  gray_bg_input: '#e7e7e8',
  gray_text_input: '#a9a9ae',
  green_label: '#498124',
  gray_label: '#696969',
  gray_timer_bg: '#f5f5f5',
  gray_timer_border: '#dedede',
  gray_secondary_label: '#a9a9a9',
  black_label: '#000000',
  gray_button: '#a29f9f',
  green_button: '#08c503',
  red_label: 'rgb(172, 0, 0)',
  chat_composer_border: 'rgba(169, 164, 161, 1)',
  chat_composer_background: 'rgba(244, 244, 244, 1)',
};

const sizes = {
  // global sizes
  base: 16,
  font: 14,
  radius: 6,
  padding: 25,

  // font sizes
  h1: 26,
  h2: 20,
  h3: 17,
  title: 18,
  header: 16,
  body: 14,
  caption: 12,
  timer: 10,
};

const fonts = {
  h1: {
    fontSize: sizes.h1,
  },
  h2: {
    fontSize: sizes.h2,
  },
  h3: {
    fontSize: sizes.h3,
  },
  header: {
    fontSize: sizes.header,
  },
  title: {
    fontSize: sizes.title,
  },
  body: {
    fontSize: sizes.body,
  },
  caption: {
    fontSize: sizes.caption,
  },
};

const android = {
  font_medium: 'Dubai-Medium',
  font_bold: 'Dubai-Bold',
  font_light: 'Dubai-Light',
  font_regular: 'Dubai-Regular',
  icon_shadow: {
    shadowColor: colors.black,
    shadowOpacity: 0.7,
    textShadowRadius: 10,
    textShadowOffset: {
      width: 0,
      height: 5, // Can't both be 0
    },
  },
  box_shadow: {
    shadowColor: colors.black,
    shadowOpacity: 0.7,
    textShadowRadius: 20,
    textShadowOffset: {
      width: 0,
      height: 5,
    },
  },
};
const ios = {
  font_medium: 'Dubai-Medium',
  font_bold: 'Dubai-Bold',
  font_light: 'Dubai-Light',
  font_regular: 'Dubai-Regular',
  icon_shadow: {
    shadowColor: colors.black,
    shadowOpacity: 0.7,
    shadowRadius: 2,
    shadowOffset: {
      width: 0, // These can't both be 0
      height: 2, // i.e. the shadow has to be offset in some way
    },
  },
  box_shadow: {
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
};

const images = {
  //   BackButton:  <ICONS.MaterialCommunityIcons
  //   name="compass"
  //   size={34}
  //   color={theme.colors.white}
  // />,
  ContentImage1: require('../screens/LandingPage/LandinPageImages/Image1.png'),
  ContentImage2: require('../screens/LandingPage/LandinPageImages/Image2.png'),
  ContentImage3: require('../screens/LandingPage/LandinPageImages/Image3.png'),
  ContentImage4: require('../screens/LandingPage/LandinPageImages/Image4.png'),
  ContentImage5: require('../screens/LandingPage/LandinPageImages/Image5.png'),
  ContentImage6: require('../screens/LandingPage/LandinPageImages/Image6.png'),
  ContentImage7: require('../screens/LandingPage/LandinPageImages/Image7.png'),
  ContentImage8: require('../screens/LandingPage/LandinPageImages/Image8.png'),
  ContentImage9: require('../screens/LandingPage/LandinPageImages/Image9.png'),
  ContentImage10: require('../screens/LandingPage/LandinPageImages/Image10.png'),
  ContentImage11: require('../screens/LandingPage/LandinPageImages/Image11.png'),
  ContentImage12: require('../screens/LandingPage/LandinPageImages/Image12.png'),
  Cart: require('../screens/LandingPage/LandinPageImages/Cart.png'),
  Check: require('../screens/LandingPage/LandinPageImages/Check.png'),
  Clipboard: require('../screens/LandingPage/LandinPageImages/Clipboard.png'),
  Plus: require('../screens/LandingPage/LandinPageImages/Plus.png'),
  Ribbon: require('../screens/LandingPage/LandinPageImages/Ribbon.png'),
  Ellipse: require('../screens/LandingPage/LandinPageImages/Ellipse.png'),
  Vector: require('../screens/LandingPage/LandinPageImages/Vector.png'),
  Exercise: require('../screens/LandingPage/LandinPageImages/Exercise.png'),
  Menu: require('../screens/LandingPage/LandinPageImages/Menu.png'),
  Notification: require('../screens/LandingPage/LandinPageImages/Notification.png'),
  Options: require('../screens/LandingPage/LandinPageImages/Options.png'),
  User: require('../screens/LandingPage/LandinPageImages/User.png'),
  Man: require('../screens/userdetails/UserDetailsImages/Man.png'),
  Woman: require('../screens/userdetails/UserDetailsImages/Woman.png'),
  // manshoudCard: require('../screens/images/manshoudCard.png'),
  // manshoudCard2X: require('../screens/images/manshoudCard_2x.png'),
  // manshoudCard3x: require('../screens/images/manshoudCard_3x.png'),
  // inspectionHeader: require('../screens/images/InspectionHeader.png'),
  // inspectionHeader2X: require('../screens/images/InspectionHeader_2x.png'),
  // inspectionHeader3x: require('../screens/images/InspectionHeader_3x.png'),
  // checkmarkOutline: require('../screens/images/checkmarkOutline.png'),
  // checkmarkOutline2x: require('../screens/images/checkmarkOutline_2x.png'),
  // checkmarkOutline3x: require('../screens/images/checkmarkOutline_3x.png'),
  // videothumbnail: require('../screens/images/video_thumbnail.png'),
  // manshoudLiveHeader: require('../screens/images/manshoud_live_header.png'),
  // iconLive: require('../screens/images/icon_live.gif'),
  // termsPopup: require('../screens/images/terms_popup_header.png')
};

const header = {
  paddingHorizontal: sizes.base * 2,
  paddingBottom: sizes.base * 2,
};

export {colors, sizes, fonts, android, ios, images, header};
