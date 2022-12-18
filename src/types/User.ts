export type User = {
  firstName: string;
  lastName: string;
  nickName: string;
  birthDay: string; //am using string because boostrap date picker accepts string only
  gender: "male" | "female";
};
