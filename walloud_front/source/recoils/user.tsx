import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

export interface UserProps {
    isLogin: boolean;
    id: number|null;
    name: string|null;
    account: string|null;
    email: string|null;
    bank: string|null;
}

const { persistAtom } = recoilPersist()

export const userState = atom<UserProps>({
        key: 'userState',
        default: {
            isLogin: false,
            id: null,
            name: null,
            account: null,
            email: null,
            bank: null
        },
        effects_UNSTABLE: [persistAtom],
})