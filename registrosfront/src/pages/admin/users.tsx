import { HeadFC } from 'gatsby'
import * as React from 'react'
import { AuthedLayout } from '../../components/Layouts/Authed'

export default function UsersPage () {
  return (
    <AuthedLayout>
      <UsersCrud />    
    </AuthedLayout>
  )
}

function UsersCrud () {
  return (
    <p>Crud de users</p>
  )
}

export const Head: HeadFC = () => <title>Página de usuarios</title>
