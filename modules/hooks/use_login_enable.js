import { useState } from "react";

const useEnableLogin = (defaultValue) => {
    const [enableLogin, setEnableLogin] = useState(defaultValue); // 是否可以点击登录按钮
    let _phone = '', _code = '';
    let _protocol = false;
    
    const enableChange = ({ phone, code, protocol }) => {
        if (phone) _phone = phone;
        if (code) _code = code;
        if (protocol) _protocol = protocol;
        setEnableLogin(_phone.length == 11 && _code.length == 6 && _protocol);
    };
    return [_phone, _code, enableLogin, enableChange];
}

export default useEnableLogin;