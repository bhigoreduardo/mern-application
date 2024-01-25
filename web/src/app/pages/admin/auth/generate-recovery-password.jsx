import Container from '../../../components/ui/common/container'
import Copyright from '../../../components/ui/common/copyright'
import FormGenerateRecoveryPassword from '../../../components/form/admin/auth/generate-recovery-password'

export default function GenerateRecoveryPassword() {
  return (
    <main className="flex flex-col h-[100vh]">
      <div className="flex-grow flex items-center w-full bg-[url('/images/auth-bg.png')] bg-cover bg-no-repeat bg-center">
        <Container className="flex items-center justify-center py-[100px]">
          <FormGenerateRecoveryPassword />
        </Container>
      </div>
      <Copyright />
    </main>
  )
}
