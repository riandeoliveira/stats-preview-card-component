export interface CardContent {
  info_name: string;
  info_number: string;
  id: number;
}

export interface CardProps {
  data: JSX.Element[];
}

export interface DataProps {
  content: CardContent;
}
