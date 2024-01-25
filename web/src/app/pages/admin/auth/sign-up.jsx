import Container from '../../../components/ui/common/container'
import Copyright from '../../../components/ui/common/copyright'
import FormSignUp from '../../../components/form/admin/auth/sign-up'

export default function SignUp() {
  return (
    <main className="flex flex-col h-[100vh]">
      <div className="flex-grow flex items-center w-full bg-[url('/images/auth-bg.png')]">
        <Container className="flex items-center justify-center py-[100px]">
          <FormSignUp />
        </Container>
      </div>
      <Copyright />
    </main>
  )
}
