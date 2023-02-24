import Head from '../components/Head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';
import { useAuth} from '../contexts/auth';
import CookieStandAdmin from '@/components/CookieStandAdmin';

export default function Home() {
  const { user, login, logout } = useAuth();

  function loginHandler(newUser) {
    login(newUser.username, newUser.password)
  }

  return (
    <div className="bg">
      <Head />
      <Header user={user} onLogout={logout}/>
      {user
        ? <CookieStandAdmin/>
        : <LoginForm onLogin={loginHandler}/>
      }
      <Footer/>
    </div>
  )
}
