import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, XCircle } from 'phosphor-react'

import useQueries from '../../../../hooks/use-queries'
import Container from '../../../components/ui/common/container'

export default function SignUpConfirm() {
  const queries = useQueries()
  const [message, setMessage] = useState('Falha na ativação da conta')
  const [success, setSuccess] = useState(false)
  const signUpConfirm = async () => console.log('confirm')
  signUpConfirm()
  useEffect(() => {
    if (queries.has('token')) return () => signUpConfirm()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container className="flex items-center justify-center py-16">
      <div className="w-full max-w-[450px] border border-gray-100 bg-white rounded-sm shadow-md">
        <div className="flex flex-col items-center gap-6 px-8 py-6">
          {success ? (
            <CheckCircle size={60} className="text-green-500" />
          ) : (
            <XCircle size={60} className="text-red-500" />
          )}
          <h3 className="font-semibold text-base text-gray-900">{message}</h3>
          {success ? (
            <p className="text-sm text-gray-600 text-center">
              Sua conta foi criada com sucesso, agora você já pode acessar sua{' '}
              <Link to="/entrar" className="text-orange-500">
                conta
              </Link>
            </p>
          ) : (
            <p className="text-sm text-gray-600 text-center">
              Ocorreu algum problema para ativar sua conta, por favor tente
              novamente{' '}
              <Link to="/ativar-conta" className="text-orange-500">
                verificar sua conta
              </Link>
            </p>
          )}
        </div>
      </div>
    </Container>
  )
}
