import { Button, Label, TextInput } from "flowbite-react";
import useForm from "../hooks/useForm";
import { HiEye } from "react-icons/hi2";
import { useState } from "react";
import { HiEyeOff } from "react-icons/hi";
import { ServiceAuth } from "../services/ServiceAuth";
import { ROUTES } from "../lib/constants/routes";
import { useNavigate } from "react-router";
import useSessionStore from "../stores/useSessionStore";

export const IniciarSesionPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const setSession = useSessionStore((store) => store.setSession);
  const { form, email, password, onChange } = useForm({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const { data, ok } = await ServiceAuth.signIn(
      email.trim(),
      password.trim(),
    );
    setIsLoading(false);
    if (ok && data) {
      setSession(data);
      navigate(ROUTES.root.index.path);
      return;
    }
  };
  return (
    <form
      className="max-w-md mx-auto h-screen flex flex-col justify-center gap-4"
      onSubmit={onSubmit}
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor={form.email.id}>Your email</Label>
        </div>
        <TextInput
          id={form.email.id}
          name={form.email.id}
          type="email"
          value={form.email.value}
          onChange={onChange}
          placeholder="name@flowbite.com"
          disabled={isLoading}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor={form.password.id}>Your password</Label>
        </div>
        <div className="relative">
          <TextInput
            id={form.password.id}
            name={form.password.id}
            type={showPassword ? "text" : "password"}
            value={form.password.value}
            onChange={onChange}
            disabled={isLoading}
            required
          />
          <button
            type="button"
            className="absolute top-1/2 -translate-y-1/2 right-0 cursor-pointer px-3"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <HiEyeOff /> : <HiEye />}
          </button>
        </div>
      </div>
      <Button disabled={isLoading} type="submit">
        Iniciar Sesión
      </Button>
    </form>
  );
};
