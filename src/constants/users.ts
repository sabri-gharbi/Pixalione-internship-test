export type UserNames = "student" | "instructor";

export let users: Record<UserNames, { token: string }> = {
  student: {
    // {
    //   "sub": 2,
    //   "role":"student"
    // }
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInJvbGUiOiJzdHVkZW50In0.rXJPTcY3jc5vKeyeKD4yyCiY8LS7BT0L2gbnnDIgSEc",
  },

  instructor: {
    // {
    //   "sub": 1,
    //   "role":"instructor"
    // }
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJpbnN0cnVjdG9yIn0.7lAQjzUjtoIkUphNxFHz1wX-wXPb4mRdX7vUpzWPxrg",
  },
};
