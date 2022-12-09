import { useState, useCallback, useMemo, memo } from "react";
import { SafeAreaView, StyleSheet, Image, View, TextInput, Text, TouchableOpacity, Dimensions, Keyboard, TouchableWithoutFeedback } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Style from "../../../components/css";

const EditItem = ({ setPhone, setCode }) => {
    const InputItem = ({ setText, placeholder, style }) => {
        return (
            <View style={{ ...style, height: 44, borderBottomWidth: 0.5, borderBottomColor: '#ddddd3', justifyContent: 'center' }}>
                <TextInput
                    style={{ ...Style.primaryText }}
                    placeholder={placeholder}
                    keyboardType='numeric'
                    onChangeText={setText}
                />
            </View>
        );
    }

    const CodeButton = ({ duration }) => {
        const tickerBuilder = (scale) => {
            let tick = scale;
            return (callback) => {
                if (tick != scale) return; // 防止多次触发
                let timer = setInterval(() => {
                    tick -= 1;
                    console.log(tick);
                    callback(tick);
                    if (tick == 0) {
                        clearInterval(timer); // 清除本次定时器
                        tick = scale; // 下次点击时, 重新生成一个定时器
                    }
                }, 1000);
            };
        }

        const ticker = useMemo(() => tickerBuilder(duration), [duration]);

        const [counter, setCounter] = useState('获取验证码');

        const tickerCallback = (tick) => setCounter(tick == 0 ? '获取验证码' : `${tick}s`)

        return (
            <TouchableOpacity style={{
                backgroundColor: 'white',
                flex: 1,
                justifyContent: 'center',
                borderRadius: 5,
                height: 38
            }} onPress={() => ticker(tickerCallback)}>
                <Text style={{ textAlign: 'center', color: 'grey' }}>{counter}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View>
            <View style={{ ...Style.shade, padding: 8, alignSelf: 'stretch' }}>
                <InputItem setText={setPhone} placeholder='铲屎的, 手机号填在这里~' />
                <View style={{ flexDirection: 'row', alignItems: 'center', height: 44 }}>
                    <InputItem setText={setCode} placeholder='验证码填在这里~' style={{ flex: 2 }} />
                    <CodeButton duration={10} />
                </View>
            </View>
            <TouchableOpacity style={{ alignSelf: 'flex-start', marginTop: 8 }}>
                <Text style={{ ...Style.tertiaryText }}>账号密码登录</Text>
            </TouchableOpacity>
        </View >
    );
}

const MemoEditItem = memo(EditItem);
export default MemoEditItem;