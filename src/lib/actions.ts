'use server'

import { wixClientServer } from "./wixClientServer"

export const updateUser = async (formData:FormData) => {
  const wixClient = await wixClientServer()

  const id = formData.get('id') as string
  const userName = formData.get('username') as string
  const firstName = formData.get('firstname') as string
  const lastName = formData.get('lastname') as string
  const phone = formData.get('phone') as string
  const email = formData.get('email') as string

  try {
    const response = await wixClient.members.updateMember(id, {
      contact:{
        firstName: firstName || undefined,
        lastName: lastName || undefined,
        phones: [phone] || undefined,
      },
      loginEmail: email || undefined,
      profile: {nickname: userName || undefined}
    })
  } catch (error) {
    console.log(error)
  }
}