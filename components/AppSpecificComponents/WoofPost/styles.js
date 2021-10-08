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
    flexWrap: 'wrap'
  },
  title: {
    fontSize: 12,
    lineHeight: 14.4,
    fontWeight: '600',
    color: '#280D5F',
    textTransform: 'uppercase',
    flexShrink: 1
  },
  description: {
    fontFamily: 'Open Sans',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#280D5F',
    marginTop: 6,
    flexWrap: 'wrap'

  },
});

export default styles;