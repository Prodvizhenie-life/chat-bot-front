export type TInfoScreenProps = {
  img: string;
  text: string;
  alt?: string;
  buttons: Array<{
    text: string;
    variant: 'primary' | 'ghost';
    onClick: () => void;
  }>;
};