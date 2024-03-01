export type UserDTO = {
  nickname: string;
  email: string;
  password: string;
};

export type UserLoginDTO = {
  email: string;
  password: string;
};

export type UserResDTO = {
  exists: boolean;
};

export type UserEmailDTO = Pick<UserDTO, "email">;

export type UserNicknameDTO = Pick<UserDTO, "nickname">;
