export default function Wrapper({ classname, children }) {
  return <div className={`max-w-[1300px] mx-auto ${classname}`}>{children}</div>;
}
