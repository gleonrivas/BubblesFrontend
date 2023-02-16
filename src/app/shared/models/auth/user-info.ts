export type UserInfo = {
  fecha_expiracion: {
    date: string,
    timezone: string,
    timezone_type: number
  },
  user_id: number,
  user_rol: string;
  username: string
}
