type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div className={`max-w-[1280px] mx-auto px-12 ${className || ''}`}>
      {children}
    </div>
  );
}
