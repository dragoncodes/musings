export function Progress(props: { value: number }) {
  return (
    <div className="relative h-[5px] overflow-visible">
      <div className="relative bottom-0 left-0 right-0 top-0 h-[5px] overflow-visible rounded-md bg-slate-100" />

      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-[5px] overflow-visible rounded-md bg-blue-200"
        style={{ width: `${props.value * 100}%` }}
      />
    </div>
  );
}
