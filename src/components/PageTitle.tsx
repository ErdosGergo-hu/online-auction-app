export default function PageTitle({
  title,
  message,
}: {
  title: string;
  message: string;
}) {
  return (
    <div className="gap-6 flex flex-col items-center">
      <h1 className="text-4xl font-semibold text-main-font text-center">
        {title}
      </h1>
      <p className="text-lg text-secondary-font text-center pb-4">{message}</p>
    </div>
  );
}
