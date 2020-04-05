class Login {
  public user: string;
  public password: string;
}

interface LoginAccess{
  userId: number
  authentication: boolean
}
export { Login, LoginAccess };

