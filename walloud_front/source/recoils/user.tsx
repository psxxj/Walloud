import { atom } from 'recoil'

export interface UserProps {
    isLogin: boolean;
    id: number|null;
    name: string|null;
}

export const userState = atom<UserProps>({
        key: 'userState',
        default: {
            isLogin: false,
            id: null,
            name: null
        }
})