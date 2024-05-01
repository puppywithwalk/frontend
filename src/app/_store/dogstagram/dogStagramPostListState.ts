import { DogStagramPostListType } from "@/app/_types/dogStagram";
import { atom } from "recoil";

export const dogStagramPostListState = atom<DogStagramPostListType[]>({
  key: "dogStagramPostListState",
  default: [
    {
      id: 0,
      user_id: "",
      description: "",
      image_urls: [],
      is_liked: false,
      total_like: 0,
      last_liked_nickname: "",
      created_at: new Date(),
    },
  ],
});
