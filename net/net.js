const host = 'http://39.107.136.94/puppy/api/v1/';

const post = async (path, params) => {
    const requestInit = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    }
    
    return (await fetch(host + path, requestInit)).json();
};

export {post};