import Toast from 'react-native-root-toast';

export default function(
  msg,
  options = {
    duration: 1000,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
  },
) {
  return Toast.show(msg, options);
}
