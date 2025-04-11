interface IProps {
  src: string;
  className?: string;
}

const IconImg = ({ src, className = "w-6 h-6" }: IProps) => {
  return <img src={src} className={className} />;
};

export default IconImg;
