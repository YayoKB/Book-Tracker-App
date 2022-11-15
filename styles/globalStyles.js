import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#202020',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    color: '#5EFFE2',
    fontSize: 32,
    fontFamily: 'NunitoSans-Black',
    textAlign: 'center',
    marginTop: 51,
  },
  icon: {
    fontSize: 100,
    color: '#DEE5E5',
    textAlign: 'center',
    marginVertical: 38,
  },
  heading1: {
    fontSize: 24,
    color: '#5EFFE2',
    fontFamily: 'NunitoSans-ExtraBold',
    textAlign: 'center',
    marginBottom: 12,
  },
  heading2: {
    fontSize: 24,
    color: '#5EFFE2',
    fontFamily: 'NunitoSans-Bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  heading3Sub: {
    fontSize: 20,
    color: '#DEE5E5',
    fontFamily: 'NunitoSans-SemiBoldItalic',
    textAlign: 'center',
    marginBottom: 5,
  },
  bookDetailsView: {
    width: '66.67%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 34,
  },
  latestBookIcon: {
    fontSize: 100,
    color: '#DEE5E5',
    textAlign: 'left',
  },
  bookDetailsItemView: {
    justifyContent: 'space-between',
  },
  bookDetailsItem: {
    textAlign: 'right',
    color: '#DEE5E5',
    fontSize: 22,
    fontFamily: 'NunitoSans-Italic',
  },
  statsView: {
    width: '66.67%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  statsLabel: {
    fontSize: 20,
    fontFamily: 'NunitoSans-SemiBold',
    color: '#DEE5E5',
    paddingBottom: 5,
  },
  statsItem: {
    fontSize: 20,
    fontFamily: 'NunitoSans-Italic',
    color: '#DEE5E5',
    paddingBottom: 5,
    textAlign: "right",
  },
  addInputView: {
    width: '77.77%',
  },
  addInput: {
    backgroundColor: '#DEE5E5',
    padding: 10,
    paddingLeft: 20,
    marginBottom: 32,
    borderRadius: 100,
    fontFamily: 'NunitoSans-Regular',
    color: '#1A1A1A',
    fontSize: 20,
    height: 50,
  },
  button: {
    borderRadius: 100,
    backgroundColor: '#5EFFE2',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'NunitoSans-ExtraBold',
    fontSize: 20,
    color: '#202020',
  },
  generalContainer: {
    width: '77.77%',
  },
  latestBookView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  latestBookDetails: {
    textAlign: 'right',
    justifyContent: 'space-between',
  },
  historyTitle: {
    color: '#5EFFE2',
    fontFamily: 'NunitoSans-Bold',
    fontSize: 20,
    textAlign: 'right',
  },
  historyDetails: {
    color: '#DEE5E5',
    fontSize: 15,
    fontFamily: 'NunitoSans-Italic',
    textAlign: 'right',
  },
  historyAuthor: {
    color: '#DEE5E5',
    fontSize: 18,
    textAlign: 'right',
    fontFamily: 'NunitoSans-SemiBoldItalic',
  },
  genreHeadings: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 20,
  },
  genreGroupView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  genreType: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 20,
    color: '#DEE5E5',
  },
  genreNumber: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 20,
    color: '#DEE5E5',
  },
  pickerStyle: {
    backgroundColor: '#DEE5E5',
    borderRadius: 100,
    fontFamily: 'NunitoSans-Regular',
    color: '#1A1A1A',
    fontSize: 20,
    height: 55,
    marginTop: -5,
  },
  pickerItem: {
    fontFamily: 'NunitoSans-Regular',
    color: '#1A1A1A',
    fontSize: 20,
  },
  pickerView: {
    borderRadius: 100,
    backgroundColor: "#1A1A1A",
    overflow: "hidden",
    marginBottom: 32,
    fontFamily: "NunitoSans-Regular",
    }
});