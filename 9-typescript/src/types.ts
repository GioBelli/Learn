interface Invitees {
  id: number;
  name: string;
  gender: GENDER;
}
enum GENDER {
  MALE,
  FEMALE,
}

export { type Invitees, GENDER };
