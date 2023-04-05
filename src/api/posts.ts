import { axiosBase } from "@/configs/axios";
import { Post } from "@/types/post";
import { AxiosResponse } from "axios";

export class Posts {
  static getPosts(): Promise<AxiosResponse<Post[]>> {
    return axiosBase.get<Post[]>("/posts/?_page=2&_limit=10");
  }
}
