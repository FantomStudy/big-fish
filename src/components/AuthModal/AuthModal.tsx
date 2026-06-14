"use client";

import { useState } from "react";
import { LockIcon, MailIcon } from "lucide-react";
import { ForgotPasswordForm } from "@/components/ForgotPasswordModal";
import { RegistrationForm } from "@/components/RegistrationModal";
import { Button } from "@/components/ui/Button";
import { Field, FieldLabel } from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { Modal, ModalContent, ModalTrigger, modalStyles as styles } from "@/components/ui/Modal";

interface AuthModalProps {
  children: React.ReactNode;
}

type View = "login" | "register" | "forgot";

const TITLES: Record<View, string> = {
  login: "Авторизация",
  register: "Регистрация",
  forgot: "Восстановление пароля",
};

export const AuthModal = ({ children }: AuthModalProps) => {
  const [view, setView] = useState<View>("login");

  return (
    <Modal onOpenChange={(open) => !open && setView("login")}>
      <ModalTrigger render={children as React.ReactElement} />
      <ModalContent title={TITLES[view]}>
        {view === "login" && (
          <>
            <form className={styles.form}>
              <Field>
                <FieldLabel>E-mail</FieldLabel>
                <div className={styles.field}>
                  <Input type="email" name="email" className={styles.input} />
                  <MailIcon className={styles.fieldIcon} size={20} />
                </div>
              </Field>

              <Field>
                <FieldLabel>Пароль</FieldLabel>
                <div className={styles.field}>
                  <Input type="password" name="password" className={styles.input} />
                  <LockIcon className={styles.fieldIcon} size={20} />
                </div>
              </Field>

              <Button type="submit" className={styles.submit}>
                Войти
              </Button>
            </form>

            <div className={styles.footer}>
              <Button variant="link" onClick={() => setView("register")}>
                Зарегистрироваться
              </Button>
              <Button variant="link" onClick={() => setView("forgot")}>
                Забыли пароль?
              </Button>
            </div>
          </>
        )}

        {view === "register" && <RegistrationForm onLogin={() => setView("login")} />}

        {view === "forgot" && <ForgotPasswordForm onLogin={() => setView("login")} />}
      </ModalContent>
    </Modal>
  );
};
