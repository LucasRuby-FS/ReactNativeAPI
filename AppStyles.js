import { StyleSheet } from "react-native";
import { Platform } from "react-native";
const styles = StyleSheet.create({
    largeHeading: {
        fontSize: 80, 
    },
    italicFont: {
        fontStyle: 'italic',
    },
    listContainer: {
        flexGrow: 0,
        flexShrink: 0
    },
    headingColor: {
        ...Platform.select({
            android: {
                color: 'yellow',
            },
            ios: {
                color: 'red'
            },
            default: {
                color: 'blue'
            }
        })
    },
    categoryContainer: {
        flex: 1, 
        padding: 20, 
        marginTop: 50 ,
        backgroundColor: '#E6F0FF',
    },
     categoryTitle: { 
        fontSize: 28, fontWeight: 'bold', marginBottom: 2,
    color: '#1E3A8A' },

    categoryInput: { borderWidth: 1, borderColor: '#D1D5DB', padding: 10,
     marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
 },
    editCategoryContainer: { marginVertical: 10 },
        categoryItem: { flexDirection: 'row', justifyContent: 'space-between', 
            alignItems: 'center',
            padding: 15,
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            marginBottom: 10 },

         categoryItemText: { fontSize: 18,
            color: '#1E3A8A',
            flex: 1,
         },
         homeContainer: {
            flex: 1,
            padding: 20,
            marginTop: 50,
            backgroundColor: '#E6F0FF',
          },
          homeTitle: {
            fontSize: 32,
            fontWeight: 'bold',
            color: '#1E3A8A',
            marginBottom: 20,
            textAlign: 'center',
          },
          homeHeading: {
            fontSize: 20,
            marginBottom: 15,
            color: '#1E40AF',
          },
          platformText: {
            fontSize: 16,
            color: '#4B5563',
            marginBottom: 20,
            textAlign: 'center',
          },
          homeButtonsRow: {
            flexDirection: 'row',
            marginBottom: 20,
            justifyContent: 'space-between',
          },
          buttonPrimary: {
            flex: 1,
            padding: 12,
            borderRadius: 8,
            marginHorizontal: 5,
            alignItems: 'center',
            backgroundColor: '#3B82F6',
          },
          buttonSecondary: {
            flex: 1,
            padding: 12,
            borderRadius: 8,
            marginHorizontal: 5,
            alignItems: 'center',
            backgroundColor: '#10B981',
          },
          buttonText: {
            color: '#FFFFFF',
            fontWeight: 'bold',
          },
          switchContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 40,
            paddingHorizontal: 10,
          },
          switchLabel: {
            fontSize: 16,
            color: '#1E3A8A',
          },  
          homeContainer: {
            flex: 1,
            padding: 20,
            marginTop: 50,
            backgroundColor: '#E6F0FF',
          },
          homeTitle: {
            fontSize: 32,
            fontWeight: 'bold',
            color: '#1E3A8A',
            marginBottom: 20,
            textAlign: 'center',
          },
          homeHeading: {
            fontSize: 20,
            marginBottom: 15,
            color: '#1E40AF',
          },
          homePlatformText: {
            fontSize: 16,
            color: '#4B5563',
            marginBottom: 20,
            textAlign: 'center',
          },
          homeButtonsRow: {
            flexDirection: 'row',
            marginBottom: 20,
            justifyContent: 'space-between',
          },
          homeButtonPrimary: {
            flex: 1,
            padding: 12,
            borderRadius: 8,
            marginHorizontal: 5,
            alignItems: 'center',
            backgroundColor: '#3B82F6',
          },
          homeButtonSecondary: {
            flex: 1,
            padding: 12,
            borderRadius: 8,
            marginHorizontal: 5,
            alignItems: 'center',
            backgroundColor: '#10B981',
          },
          homeButtonText: {
            color: '#FFFFFF',
            fontWeight: 'bold',
          },
          homeSwitchContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 40,
            paddingHorizontal: 10,
          },
          homeSwitchLabel: {
            fontSize: 16,
            color: '#1E3A8A',
          },
        });

  export default styles;