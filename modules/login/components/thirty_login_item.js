import { memo } from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import Style from "../../../components/css";

/// 第三方登录
const ThirtyLoginItem = () => {
    const tapWeChat = () => {
        console.log('微信登录');
    }

    return (
        <View style={{ alignItems: 'center', marginTop: 50 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ ...Style.divider, flex: 1 }} />
                <Text style={{ color: 'grey', marginHorizontal: 10, fontSize: 12 }}>其他进入星球的方式👇🏻</Text>
                <View style={{ ...Style.divider, flex: 1 }} />
            </View>
            <TouchableOpacity onPress={tapWeChat}>
                <Image source={require('../../../images/wechat-logo.png')} style={{ width: 40, height: 40, marginTop: 30 }} />
            </TouchableOpacity>
        </View>
    );
}

export default memo(ThirtyLoginItem);