type KeyValue = {
  [key: string]: string | number | boolean | null | undefined;
};

type TDefaultProps = {
  className?: string;
  children?: React.ReactNode;
};

type TContainer =
  | "div"
  | "section"
  | "main"
  | "article"
  | "header"
  | "footer"
  | "aside"
  | "nav";
type TLabel = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
type TButton = "button" | "span";

type TLink = { text: string; href: string };
type TKeyValue = {
  [key: string]: string | number;
};
type TDynamicRoute = {
  params: TID;
};
type TID = {
  id: string;
};
type TTokenInfo = {
  name: string;
  src: string;
  price: string;
  href: string;
}
type TGame = {
  title: string;
  message: string;  
  img: string;
}
type TGameTitle = Pick<TGame, "title">;
type TGalleryTitle = {
  className?: string;
  inView: boolean;
  description: string;
}
type TVideoGalleryTitle = {
  inView: boolean;
  description: string;
}
type TVideoGallery = {
  title: string;
  src: string;
  m3u8: string;
}
type TGallery = {
  src: string;
  description: string;
}