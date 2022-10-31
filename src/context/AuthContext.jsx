import { createContext, useContext } from 'react'
import useLocalStorage from '@hooks/useLocalStorage'
import useLoadings from '@hooks/useLoadings'
import { apiNode } from '@api'
import { signAuthentication, checkIsAuthenticated } from '@api/auth'

const AuthContext = createContext({})

const defaultAuthState = {
  isAuthenticated: false,
  user: {},
  authToken: null,
}

function AuthProvider({ children }) {
  const [authState, setAuthState] = useLocalStorage(
    '@ShogiBattles:authState',
    defaultAuthState
  )
  const { loading, changeLoading } = useLoadings({
    isInitialLoading: true,
    isLoadingSession: false,
  })

  async function setAuthToken({ email, password }) {
    const { token: authToken, error } = await signAuthentication({
      email,
      password,
    })
    apiNode.defaults.headers.common.Authorization = `Bearer ${authToken}`

    return { authToken, error }
  }

  function saveTokenState(authToken) {
    setAuthState((current) => {
      return {
        ...current,
        isAuthenticated: true,
        authToken,
      }
    })
  }

  async function saveLoginSession({ email, password }) {
    const { authToken, error } = await setAuthToken({ email, password })
    // updates the login session deadline expiration
    if (authToken) saveTokenState(authToken)

    return { authToken, error }
  }

  function isAuthenticated() {
    if (!authState?.authToken) return false
    return authState.isAuthenticated
  }

  function sessionLogout(next) {
    setAuthState((current) => {
      return {
        ...current,
        isAuthenticated: false,
        authToken: null,
      }
    })
    changeLoading({ isInitialLoading: true })

    if (typeof next === 'function') next()
  }

  async function handleIsSessionAuthenticated() {
    changeLoading({ isLoadingSession: true })

    const sessionAuthenticated = await checkIsAuthenticated()
    if (!sessionAuthenticated) sessionLogout()

    changeLoading({ isLoadingSession: false })
  }

  function areProtectedRoutesBlocked() {
    return loading.isInitialLoading || !isAuthenticated()
  }

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        saveLoginSession,
        sessionLogout,
        isAuthenticated: isAuthenticated(),
        areProtectedRoutesBlocked,
        authToken: authState.authToken,
        saveTokenState,
        handleIsSessionAuthenticated,
        ...loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuthState() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuthState must be used with AuthContext')

  return context
}

export { AuthProvider, useAuthState }
