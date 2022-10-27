import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

export interface TravelProps {
    travelId: number;
    name: string;
}

const { persistAtom } = recoilPersist()

export const currentTravelState = atom<number|null>({
    key: "currentTravel",
    default: null,
    effects_UNSTABLE: [persistAtom],
})

export const travelListState = atom<TravelProps[]|null>({
    key: "travelList",
    default: null,
    effects_UNSTABLE: [persistAtom],
})

