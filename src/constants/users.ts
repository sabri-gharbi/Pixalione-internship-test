export type UserNames = "student" | "instructor";

export let users: Record<UserNames, { token: string }> = {
  student: {
    // firstName: "Sabri",
    // lastName: "Gharbi",
    // gender: "male",
    // birthDay: new Date("1999-12-11"),
    // role: "student",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwMSIsImZpcnN0TmFtZSI6IlNhYnJpIiwibGFzdE5hbWUiOiJHaGFyYmkiLCJnZW5kZXIiOiJtYWxlIiwiYmlydGhEYXkiOiIxOTk5LTAxLTE2VDIzOjAwOjAwLjAwMFoiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTY3MTM1ODkxMjAzMn0.X3QV52XrBnC-HtTXbrkV37WTwT1eXNxEQ-fGz7McGG0",
  },

  instructor: {
    // firstName: "hayet",
    // lastName: "Gharbi",
    // gender: "female",
    // birthDay: new Date("1970-5-6"),
    // role: "instructor",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwMyIsImZpcnN0TmFtZSI6ImhheWV0IiwibGFzdE5hbWUiOiJHaGFyYmkiLCJnZW5kZXIiOiJmZW1hbGUiLCJiaXJ0aERheSI6IjE5NzAtMDUtMDVUMjM6MDA6MDAuMDAwWiIsInJvbGUiOiJpbnN0cnVjdG9yIiwiaWF0IjoxNjcxMzU4OTEyMDMyfQ.LON2Qe7bLi5nTN_zdxQAFrv4TYJpJb1ar26VerUh1KA",
  },
};
