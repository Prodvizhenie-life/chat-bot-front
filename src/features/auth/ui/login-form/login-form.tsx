import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState, type FC } from 'react';
import { FormWithTitle } from '@/shared/ui/form-with-title/form-with-title';
import { InputField } from '@/shared/ui/input-field/input-field';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/shared/lib/hooks/use-app-dispatch';
import { TNullable } from '@/shared/model/types/t-nullable';
import { TLogin } from '../../model/types/t-login';
import { schemaLogin } from '../../lib/schemas/schema-login';

export const LoginForm: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [resError, setResError] = useState<TNullable<string>>(null);

    /*     const [postLogin, { isLoading }] = usePostLoginMutation();
    const [fetchUserMe] = useLazyGetUserMeQuery();
 */
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TLogin>({
        resolver: yupResolver(schemaLogin),
        mode: 'onChange',
        reValidateMode: 'onChange',
    });

    const onSubmit = async (data: TLogin) => {
        setResError(null);
        try {

            // TODO Подключить регистрацию

        } catch (error: any) {
            setResError(error.data?.message || 'Произошла ошибка');
        }
    };

    return (
        <FormWithTitle
            isLoading={false}
            error={resError}
            title="Вход"
            onSubmit={handleSubmit(onSubmit)}
            submitButtonText="Войти"
            formLink={{
                label: 'Вы — новый пользователь?',
                href: '/register',
                text: 'Зарегистрироваться',
            }}
        >
            <InputField
                type="email"
                label="Почта"
                placeholder="Ваш email"
                register={register}
                name="email"
                error={errors.email?.message}
            />
            <InputField
                type="password"
                label="Пароль"
                placeholder="Введите пароль"
                register={register}
                name="password"
                error={errors.password?.message}
            />
        </FormWithTitle>
    );
};
