import { useState, useCallback, useMemo, memo } from "react";
import { SafeAreaView, StyleSheet, Image, View, TextInput, Text, TouchableOpacity, Dimensions, Keyboard, TouchableWithoutFeedback } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Style from "../../components/css";
import EditPlane from './components/login_edit_item';
import ThirtyLoginItem from './components/thirty_login_item';
import ProtocolItem from "./components/protocol_item";
import useEnableLogin from "../hooks/use_login_enable";
import { post } from '../../net/net';

/// 登录页
const LoginPage = () => {
    const [phone, code, loginEnable, setLoginEnable] = useEnableLogin(false);
    const phoneChange = useCallback((text) => setLoginEnable({ phone: text }), []);
    const codeChange = useCallback((text) => setLoginEnable({ code: text }), []);
    const setAgreeProtocol = useCallback((agree) => setLoginEnable({ protocol: agree }), []);

    async function login() {
        const result = await post('user/login/', { phone: phone, code: code });
        console.log(JSON.stringify(result));
    }

    return (
        <SafeAreaView style={{ height: Dimensions.get('window').height }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Image source={require('../../images/logo.png')} style={styles.logo} />
                    <EditPlane setPhone={phoneChange} setCode={codeChange} />
                    <View>
                        <ActionItem enable={loginEnable} login={login} />
                        <ProtocolItem setAgreeProtocol={setAgreeProtocol} />
                        <ThirtyLoginItem />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};

/// 进入星球
const ActionItem = ({ enable, login }) => {
    const backgroundColor = enable ? 'orange' : '#f7f7f7';
    const textColor = enable ? 'white' : 'grey';
    return (
        <TouchableOpacity onPress={login} style={{ height: 50, borderRadius: 5, backgroundColor: backgroundColor, alignItems: 'center', alignContent: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: textColor, lineHeight: 50 }}>进入星球</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        paddingHorizontal: 20,
        justifyContent: 'space-around',
        flex: 1
    },
    logo: {
        width: 120,
        height: 120,
        alignSelf: 'center'
    },
});

export default LoginPage;