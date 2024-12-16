interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
      <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
      <p className="text-white text-lg">{subtitle}</p>
    </div>
  );
}