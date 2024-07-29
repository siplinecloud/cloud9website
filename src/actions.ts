"use server"
import { Resend } from "resend"
import EmailTemplate from "@/components/EmailTemplate"
interface State {
  error: string | null
  success: boolean
}
export const sendEmail = async (prevState: State, formData: FormData) => {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string
  try {
    const resend = new Resend("re_TqFCdiE5_EByABraRF9SLJp3Hnudz4dHE") 
    // const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: "Cloud9 Innovations <onboarding@resend.dev>",
      to: email,
      subject: "Client's Email",
      react: EmailTemplate({ name, email, message })
    })
    return {
      error: null,
      success: true
    }
  } catch (error) {
    console.log(error)
    return {
      error: (error as Error).message,
      success: false
    }
  }
}