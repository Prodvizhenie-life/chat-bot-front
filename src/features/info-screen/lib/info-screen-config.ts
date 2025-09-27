export const infoScreenConfig = {
  img: '/images/onboarding/1.png',
  text: 'Данные сохраняются автоматически. Вы можете выйти и в любой момент вернуться к заполнению анкеты.',
  alt: 'Картинка сохранение данных',
  buttons: [
    {
      text: 'Назад',
      variant: 'ghost' as const,
      onClick: () => console.log('Назад')
    },
    {
      text: 'Далее',
      variant: 'primary' as const,
      onClick: () => console.log('Далее')
    }
  ]
};