export interface UserTokenPayload {
  userId: number;
  email: string;
  role: string;
  nick: string;
  location: string;
  points: number;
  status: string;
}

export interface CompanyTokenPayload {
  companyId: number;
  email: string;
  name_company: string;
}
export interface User {
  nick: string;
  email: string;
  location: string;
  password: string;
  points: number;
  status: string;
  role: string;
}
