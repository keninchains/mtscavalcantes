type Props = {
  icon: React.ReactNode;
  title: string;
};

export function Pill({ icon, title }: Props) {
  return (
    <div className="flex flex-row items-center gap-2 rounded-full border border-mist-700 bg-mist-900 px-5 py-3 text-lg transition select-none hover:border-violet-500">
      <div>{icon}</div>
      <p>{title}</p>
    </div>
  );
}
