import {ElMessage} from 'element-plus'
import {getCurrentWatcher, onWatcherCleanup} from "vue";

export default async function request(url, options) {
    const controller = new AbortController();
    if (getCurrentWatcher()) {
        onWatcherCleanup(() => {
            controller.abort();
        });
    }

    //设置超时
    setTimeout(() => {
        controller.abort();
    }, 5000);

    return fetch(url, {
        ...options,
        signal: controller.signal,
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        return response.json();
    }).catch((error) => {
        if (error.name === 'AbortError') {
            ElMessage.error({
                message: '请求终止',
                duration: 5000
            })
        } else {
            ElMessage.error({
                message: error ? (error.message ? error.message : error.msg) : '服务器错误',
                duration: 5 * 1000
            })
        }

    });
}