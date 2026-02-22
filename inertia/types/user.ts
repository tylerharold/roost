export type User = {
  id: number
  username: string
  displayName: string
  role: UserRole
  createdAt: string
  updatedAt: string
}

export type UserRole = "guest" | "member" | "moderator" | "admin" | "owner"
