interface cardTitle {
  children?: React.ReactNode;
}
const CardTitle: React.FC<cardTitle> = ({ children }) => {
  return <h1 className="font-semibold text-2xl">{children}</h1>;
};

export default CardTitle;
