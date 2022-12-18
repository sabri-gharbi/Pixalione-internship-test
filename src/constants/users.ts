export type UserNames = "student1" | "student2" | "instructor1" | "instructor2";

export let users: Record<UserNames, { token: string }> = {
  student1: {
    // firstName: "Sabri",
    // lastName: "Gharbi",
    // gender: "male",
    // birthDay: new Date("1999-12-11"),
    // role: "student",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwMSIsImZpcnN0TmFtZSI6IlNhYnJpIiwibGFzdE5hbWUiOiJHaGFyYmkiLCJnZW5kZXIiOiJtYWxlIiwiYmlydGhEYXkiOiIxOTk5LTAxLTE2VDIzOjAwOjAwLjAwMFoiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTY3MTM1ODkxMjAzMn0.X3QV52XrBnC-HtTXbrkV37WTwT1eXNxEQ-fGz7McGG0",
  },

  student2: {
    // firstName: "Amani",
    // lastName: "Gharbi",
    // gender: "female",
    // birthDay: new Date("2001-1-17"),
    // role: "student",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwMiIsImZpcnN0TmFtZSI6IkFtYW5pIiwibGFzdE5hbWUiOiJHaGFyYmkiLCJnZW5kZXIiOiJmZW1hbGUiLCJiaXJ0aERheSI6IjIwMDEtMDEtMTZUMjM6MDA6MDAuMDAwWiIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNjcxMzU4OTEyMDMyfQ.oHvhguLBtOqJanecle6vQdQ21t9CFuaHkiiIKZO0pHA",
  },

  instructor1: {
    // firstName: "hayet",
    // lastName: "Gharbi",
    // gender: "female",
    // birthDay: new Date("1970-5-6"),
    // role: "instructor",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwMyIsImZpcnN0TmFtZSI6ImhheWV0IiwibGFzdE5hbWUiOiJHaGFyYmkiLCJnZW5kZXIiOiJmZW1hbGUiLCJiaXJ0aERheSI6IjE5NzAtMDUtMDVUMjM6MDA6MDAuMDAwWiIsInJvbGUiOiJpbnN0cnVjdG9yIiwiaWF0IjoxNjcxMzU4OTEyMDMyfQ.LON2Qe7bLi5nTN_zdxQAFrv4TYJpJb1ar26VerUh1KA",
  },

  instructor2: {
    // firstName: "Kamel",
    // lastName: "Gharbi",
    // gender: "male",
    // birthDay: new Date("1964-6-18"),
    // role: "instructor",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwNCIsImZpcnN0TmFtZSI6IkthbWVsIiwibGFzdE5hbWUiOiJHaGFyYmkiLCJnZW5kZXIiOiJtYWxlIiwiYmlydGhEYXkiOiIxOTY0LTA2LTE3VDIzOjAwOjAwLjAwMFoiLCJyb2xlIjoiaW5zdHJ1Y3RvciIsImlhdCI6MTY3MTM1ODkxMjAzMn0.rBP_fqGF6pvzK3m2BSBEOhv6lEB4JHd4XqQD_AQpFCY",
  },
};
