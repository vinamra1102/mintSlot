import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import theme from '../constants/theme'

export default function Header() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.colors.white,
        borderBottomWidth: 1,
        borderColor: theme.colors.borderGreen,
        paddingHorizontal: 16,
        paddingVertical: 12,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ color: theme.colors.primary, fontSize: 16 }}>●</Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: theme.colors.primaryDark,
            marginLeft: 6,
          }}
        >
          MintSlot
        </Text>
      </View>
    </SafeAreaView>
  )
}
