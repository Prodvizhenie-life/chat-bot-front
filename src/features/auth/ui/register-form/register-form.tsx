import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState, type FC } from 'react';
import { FormWithTitle } from '@/shared/ui/form-with-title/form-with-title';
import { InputField } from '@/shared/ui/input-field/input-field';
//import { useNavigate } from 'react-router-dom';
//import { useAppDispatch } from '@/shared/lib/hooks/use-app-dispatch';
import { TNullable } from '@/shared/model/types/t-nullable';
import { schemaRegister } from '../../lib/schemas/schema-register';

// Форматтеры телефона
import {
    denormalizeViewToE164,
    formatRuPhoneForView,
    normalizeRuPhone,
} from '@/shared/lib/formatters/phone';
import { TRegister } from '../../model/types/t-register';

export const RegisterForm: FC = () => {
/*     const dispatch = useAppDispatch();
    const navigate = useNavigate();
 */    const [resError, setResError] = useState<TNullable<string>>(null);

    const {
        register,
        handleSubmit,
        formState: { errors }, 
        control,
    } = useForm<TRegister>({
        resolver: yupResolver(schemaRegister),
        mode: 'onSubmit', 
        reValidateMode: 'onChange',
        defaultValues: {
            fio: '',
            email: '',
            phone: '', // важно задать по умолчанию
            password: '',
        },
    });

    const onSubmit = async (data: TRegister) => {
        setResError(null);
        try {
            // TODO: подключи реальный запрос регистрации
            // Пример: await postRegister({ ...data }).unwrap();
            // navigate('/account');
            console.log('submit payload', data);
        } catch (error: any) {
            setResError(error?.data?.message || 'Произошла ошибка');
        }
    };

    return (
        <FormWithTitle
            isLoading={false}
            error={resError}
            title="Регистрация"
            onSubmit={handleSubmit(onSubmit)}
            submitButtonText="Зарегистрироваться"
            formLink={{
                label: 'Уже зарегистрированы?',
                href: '/login',
                text: 'Войти',
            }}
        >
            <InputField
                type="text"
                label="ФИО"
                placeholder="Введите ФИО"
                register={register}
                name="fio"
                error={errors.fio?.message}
                autoComplete="name"
            />

            <InputField
                type="email"
                label="Почта"
                placeholder="Введите email"
                register={register}
                name="email"
                error={errors.email?.message}
                autoComplete="email"
            />

            <Controller
                name="phone"
                control={control}
                render={({ field }) => {
                    const rawDigits = normalizeRuPhone(field.value || ''); // 7XXXXXXXXXX
                    const viewMasked = formatRuPhoneForView(rawDigits); // +7 999 999-99-99

                    const filterInput = (next: string) => {
                        field.onChange(denormalizeViewToE164(next)); // +7XXXXXXXXXX
                    };

                    const handlePhonePaste = (
                        e: React.ClipboardEvent<HTMLInputElement>
                    ) => {
                        e.preventDefault();
                        const pasted = e.clipboardData.getData('text');
                        const norm = normalizeRuPhone(pasted);
                        const view = formatRuPhoneForView(norm);
                        field.onChange(denormalizeViewToE164(view));
                    };

                    return (
                        <InputField
                            type="tel"
                            label="Телефон"
                            placeholder="+7 999 999-99-99"
                            value={viewMasked}
                            onValueChange={filterInput}
                            onPaste={handlePhonePaste}
                            inputMode="tel"
                            autoComplete="tel"
                            error={errors.phone?.message}
                            maxLength={18}
                        />
                    );
                }}
            />
            <InputField
                type="password"
                label="Пароль"
                placeholder="Введите пароль"
                register={register}
                name="password"
                error={errors.password?.message}
                autoComplete="new-password"
            />
        </FormWithTitle>
    );
};
