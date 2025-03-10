interface cardContent {
  children?: React.ReactNode;
  className?: string;
}
const CardContent: React.FC<cardContent> = ({ children, className }) => {
  return <div className={`${className} p-4`}>{children}</div>;
};

export default CardContent;
