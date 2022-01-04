interface IUser {
  userId: string;
  userRole: TUserRole;
  firstName: TUserName;
  lastName: TUserName;
}

interface iMember extends IUser {
  userRole: 'member';
  inviteLink: string;
}

interface iAdmin extends IUser {
  userRole: 'admin';
  adminLevel: number;
}
