import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  layout: {
    flexDirection: 'row',
    marginBottom: 12
  },
  image: {
    flex: 1,
    borderRadius: 12
  },
  content: {
    flex: 2,
    padding: 12,
    flexWrap: 'wrap',
    alignItems: "flex-start"
  },
  title: {
    fontSize: 12,
    lineHeight: 14.4,
    /* fontFamily: 'Kanit', */
    fontWeight: '600',
    color: '#280D5F',
    textTransform: 'uppercase',
    flexShrink: 1
  },
  description: {
    /* fontFamily: 'OpenSans', */
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#280D5F',
    marginTop: 6,
    flexWrap: 'wrap'

  },
});

export default styles;