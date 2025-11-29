interface Props {
  title: string;
  value: string | number;
}

export default function DashboardCard({ title, value }: Props) {
  return (
    <div className="card shadow-md rounded-lg ease duration-100 ease-in">
      <h3 className="text-lg font-medium text-white">{title}</h3>
      <p className="text-(--color-primary) text-2xl font-semibold mt-2">{value}</p>
    </div>
  );
}