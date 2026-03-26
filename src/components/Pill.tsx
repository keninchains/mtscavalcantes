type Props = {
  icon: React.ReactNode;
  title: string;
};

export function Pill({ icon, title }: Props) {
  return (
    <div className="flex w-fit items-center gap-2 rounded-full border border-mist-700 bg-mist-900 px-4 py-2 transition select-none hover:border-violet-500">
      <div>{icon}</div>
      <span>{title}</span>
    </div>
  );
}
