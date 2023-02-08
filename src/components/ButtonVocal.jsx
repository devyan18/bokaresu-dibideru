export default function ButtonVocal ({
  vocal,
  selected,
  onClick
}) {
  return (
    <button
      className={`btnVocal ${selected === vocal && 'active'}`}
      onClick={() => onClick(vocal)}
    >
      {vocal}
    </button>
  )
}
