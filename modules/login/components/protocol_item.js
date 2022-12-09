import { useState } from "react";
import {View, TouchableOpacity, Text} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

/// 同意用户协议
const ProtocolItem = ({ setAgreeProtocol }) => {
    const [enable, setEnable] = useState(false);

    var onPress = () => {
        setAgreeProtocol(prev => !prev);
        setEnable(!enable);
    }

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
            <Icon name="check-circle" size={20} color={enable ? 'orange' : 'grey'} />
            <TouchableOpacity onPress={onPress} style={{ borderBottomColor: 'grey', borderBottomWidth: 0.5, marginLeft: 5 }}>
                <Text style={{ fontSize: 13, color: 'grey' }}>同意用户协议和隐私政策</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ProtocolItem;