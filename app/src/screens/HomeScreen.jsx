import { Text, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import theme from '../constants/theme'

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.colors.surface }}
      edges={['bottom']}
    >
      <Header />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 24,
        }}
      >
        <Text
          style={{
            fontSize: 11,
            fontWeight: '600',
            letterSpacing: 2,
            color: theme.colors.primary,
            marginBottom: 12,
          }}
        >
          APPOINTMENTS MADE SIMPLE
        </Text>
        <Text
          style={{
            fontSize: 32,
            fontWeight: '700',
            color: theme.colors.primaryDark,
            textAlign: 'center',
            lineHeight: 40,
          }}
        >
          Your slot is waiting.
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: theme.colors.primaryMid,
            textAlign: 'center',
            marginTop: 12,
            lineHeight: 22,
          }}
        >
          Book your appointment in seconds. No calls, no waiting.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Booking')}
          style={{
            marginTop: 32,
            backgroundColor: theme.colors.primary,
            borderRadius: 50,
            paddingVertical: 14,
            paddingHorizontal: 40,
          }}
        >
          <Text
            style={{
              color: theme.colors.white,
              fontWeight: '600',
              fontSize: 16,
            }}
          >
            Book My Slot
          </Text>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 24,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 12,
          }}
        >
          <Text style={{ fontSize: 12, color: theme.colors.primaryMid }}>
            ✓ Free to book
          </Text>
          <Text style={{ fontSize: 12, color: theme.colors.primaryMid }}>
            ✓ Instant confirmation
          </Text>
          <Text style={{ fontSize: 12, color: theme.colors.primaryMid }}>
            ✓ Easy rescheduling
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}
