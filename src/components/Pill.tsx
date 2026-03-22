type Props = {
  icon: React.ReactNode;
  title: string;
};

export function Pill({ icon, title }: Props) {
  return (
    <div className="flex flex-row items-center gap-2 rounded-full border border-mist-600 bg-mist-900 px-4 py-2 text-lg transition select-none hover:border-mist-400">
      <div>{icon}</div>
      <p>{title}</p>
    </div>
  );
}
