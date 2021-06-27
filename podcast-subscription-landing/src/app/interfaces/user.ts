export interface User {
  additionalUserInfo:
  {
    profile:
    {
      email: string,
      family_name: string,
      given_name: string,
      id: string,
      name: string,
      picture: string,
      verified_email: true
    }
  },
  user: {
    mailList: boolean,
    role: string,
    email: string,
    emailVerified: string,
    metadata: {
      creationTime: string,
      lastSignInTime: string
    },
    phoneNumber: string,
    photoURL: string,
  },
  favs: []
}
