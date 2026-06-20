import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { WebView } from 'react-native-webview'
import theme from '../constants/theme'

export default function BookingScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.white }}>
      <View
        style={{
          backgroundColor: theme.colors.white,
          borderBottomWidth: 1,
          borderColor: theme.colors.borderGreen,
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 12,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ paddingHorizontal: 16 }}
        >
          <Text style={{ fontSize: 22, color: theme.colors.primary }}>←</Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            color: theme.colors.primaryDark,
          }}
        >
          Book a slot
        </Text>
      </View>
      <WebView
        source={{ uri: 'https://demoproject.setmore.com' }}
        style={{ flex: 1 }}
        startInLoadingState={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        renderLoading={() => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ActivityIndicator size="large" color={theme.colors.primary} />
          </View>
        )}
      />
    </SafeAreaView>
  )
}
