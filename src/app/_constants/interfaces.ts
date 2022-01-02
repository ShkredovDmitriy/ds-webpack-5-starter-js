interface iUser {
  userId: string;
  userRole: tUserRole;
  firstName: tUserName;
  lastName: tUserName;
}

interface iMember extends iUser {
  userRole: 'member';
  inviteLink: string;
}

interface iAdmin extends iUser {
  userRole: 'admin';
  adminLevel: number;
}
