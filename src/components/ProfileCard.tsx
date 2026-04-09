import type { ProfileType } from "@/@types/profile"
import { Card, CardDescription, CardTitle } from "./ui/card"

const ProfileCard = ({ user }: { user: ProfileType }) => {
  return (
    <Card className="p-6">
      <CardTitle>{user.name}</CardTitle>
      <CardDescription>
        <div>Email: {user.email}</div>
        <div>Address: {user.address}</div>
        <div>Phone: {user.phone}</div>
        <div>DOB: {user.dob}</div>
      </CardDescription>
    </Card>
  )
}

export default ProfileCard
