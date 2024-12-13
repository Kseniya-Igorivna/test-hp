import LoginForm from "../../components/LoginForm/LoginForm";
import style from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div className={style.wrapper}>
      <LoginForm />
    </div>
  );
}
