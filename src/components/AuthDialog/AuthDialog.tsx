"use client";

import { LockIcon, MailIcon, UserIcon } from "lucide-react";
import { useState } from "react";
import {
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  Field,
  FieldLabel,
  Input,
} from "../ui";
import styles from "./AuthDialog.module.css";

type AuthView = "login" | "register" | "restore";

const TITLES: Record<AuthView, string> = {
  login: "Авторизация",
  register: "Регистрация",
  restore: "Восстановление пароля",
};

interface InputFieldProps extends React.ComponentProps<typeof Input> {
  label: string;
  icon: React.ReactNode;
}

const InputField = ({ label, icon, id, ...props }: InputFieldProps) => {
  return (
    <Field>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <div className={styles.inputWrap}>
        <Input id={id} variant="dark" className={styles.input} {...props} />
        <span className={styles.inputIcon}>{icon}</span>
      </div>
    </Field>
  );
};

interface AuthDialogProps {
  children: React.ReactElement;
}

export const AuthDialog = ({ children }: AuthDialogProps) => {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<AuthView>("login");

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) {
      setView("login");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger render={children} />

      <DialogContent className={styles.popup}>
        <DialogTitle className={styles.title}>{TITLES[view]}</DialogTitle>

        {view === "login" && (
          <form className={styles.form}>
            <InputField
              id="login-email"
              name="email"
              type="email"
              label="E-mail"
              autoComplete="email"
              required
              icon={<MailIcon />}
            />
            <InputField
              id="login-password"
              name="password"
              type="password"
              label="Пароль"
              autoComplete="current-password"
              required
              icon={<LockIcon />}
            />

            <Button type="submit" className={styles.submit}>
              Войти
            </Button>

            <div className={styles.links}>
              <button type="button" className={styles.link} onClick={() => setView("register")}>
                Зарегистрироваться
              </button>
              <button type="button" className={styles.link} onClick={() => setView("restore")}>
                Забыли пароль?
              </button>
            </div>
          </form>
        )}

        {view === "register" && (
          <form className={styles.form}>
            <InputField
              id="register-name"
              name="name"
              type="text"
              label="Имя"
              autoComplete="name"
              required
              icon={<UserIcon />}
            />
            <InputField
              id="register-email"
              name="email"
              type="email"
              label="E-mail"
              autoComplete="email"
              required
              icon={<MailIcon />}
            />

            <div className={styles.row}>
              <InputField
                id="register-password"
                name="password"
                type="password"
                label="Пароль"
                autoComplete="new-password"
                required
                icon={<LockIcon />}
              />
              <InputField
                id="register-confirm"
                name="confirm"
                type="password"
                label="Подтверждение"
                autoComplete="new-password"
                required
                icon={<LockIcon />}
              />
            </div>

            <div className={styles.terms}>
              <label className={styles.checkboxRow}>
                <Checkbox name="agreement" required />
                <span>
                  Принимаю условия <a href="#">соглашения</a> и{" "}
                  <a href="#">политики конфиденциальности</a>
                </span>
              </label>
              <label className={styles.checkboxRow}>
                <Checkbox name="newsletter" />
                <span>Подписываюсь на рассылку новостей на E-mail</span>
              </label>
            </div>

            <Button type="submit" className={styles.submit}>
              Зарегистрироваться
            </Button>

            <div className={styles.links}>
              <button type="button" className={styles.link} onClick={() => setView("login")}>
                У меня уже есть аккаунт
              </button>
            </div>
          </form>
        )}

        {view === "restore" && (
          <form className={styles.form}>
            <InputField
              id="restore-email"
              name="email"
              type="email"
              label="E-mail"
              autoComplete="email"
              required
              icon={<MailIcon />}
            />

            <Button type="submit" className={styles.submit}>
              Восстановить пароль
            </Button>

            <div className={styles.links}>
              <button type="button" className={styles.link} onClick={() => setView("login")}>
                Вернуться ко входу
              </button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};
