import WrapperGrey from "@/app/component/WrapperGrey";

export default function Dashboard({ children }) {
  return (
    <div className="flex gap-[21px] h-lvh pt-5 px-7 pb-12  font-[family-name:var(--font-lexend)]">
      {/*навигация*/}
      <WrapperGrey width="w-80" title="Menu">
        <p>dfghjk</p>
      </WrapperGrey>

      {/*страница справа*/}
      <div className="grow">{children}</div>
    </div>
  );
}
