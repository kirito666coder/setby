export default function Logo() {
  return (
    <div>
      <div className="ml-10 flex h-20 w-50 items-center justify-center">
        <div
          className="h-full w-2/5 bg-white"
          style={{
            clipPath: 'polygon(0 50%, 100% 0, 100% 50%, 0% 100%)',
          }}
        />
        <div
          className="h-full w-2/5 bg-black"
          style={{
            clipPath: 'polygon(0 50%, 100% 0, 100% 50%, 0% 100%)',
          }}
        />
        <div
          className="text-setby flex h-full w-3/5 items-end justify-end bg-white text-2xl font-bold"
          style={{
            clipPath: 'polygon(50% 0%, 100% 0, 100% 50%, 100% 100%, 0 100%, 0% 50%)',
          }}
        >
          Setby.
        </div>
      </div>
    </div>
  );
}
