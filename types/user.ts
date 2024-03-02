import { type PhotoDTO } from "./photo";

export type UserDTO = {
  nickname: string;
  email: string;
  password: string;
  photos: PhotoDTO[];
};

export type UserLoginDTO = {
  email: string;
  password: string;
};

export type UserResDTO = {
  exists: boolean;
};

export type UserPhotoResDTO = Pick<UserDTO, "photos">;

export type UserEmailDTO = Pick<UserDTO, "email">;

export type UserNicknameDTO = Pick<UserDTO, "nickname">;
