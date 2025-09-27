import { TRootState } from "@/app/store/store";

export const getIsTelegram = (state: TRootState) => state.envMode.isTelegram;
