import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
});

type SignUpForm = z.infer<typeof signUpForm>;

export function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();

  async function handleSignUp(data: SignUpForm) {
    try {
      console.log(data);

      // throw new Error();

      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success('Estabelecimento cadastrado com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => {
            navigate('/sign-in');
          },
        },
      });
    } catch {
      toast.error('Erro cadastrar estabelecimento.');
    }
  }

  return (
    <>
      <Helmet key="signup-helmet" title="Cadastro" />
      <div className="p-8">
        <Button variant="secondary" asChild className="absolute top-8 right-8">
          <Link to="/sign-in">Fazer login</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Crie sua conta grátis!</h1>
            <p className="text-muted-foreground text-sm">Seja um parceiro e comece suas vendas</p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input id="restaurantName" type="text" {...register('restaurantName')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome</Label>
              <Input id="managerName" type="text" {...register('managerName')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-email</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Seu celelular</Label>
              <Input id="phone" type="tel" {...register('phone')} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Finalizar cadastro
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
              Ao continuar você concorda com os nossos{' '}
              <a className="underline underline-offset-4" href="#">
                Termos de Serviço e Política de privacidade
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
