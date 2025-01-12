import request from '@/utils/request';

export function login(data) {
    return request('/api/login', {
            method: 'post',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: data
        }
    )
}