interface PropTypes {
  percentage: number
}

const UploadProgress: React.FC<PropTypes> = ({ percentage }) => {
  return (
    <div className="w-full ">
      <div
        className="bg-indigo-200 border border-black h-full font-light text-2xl text-indigo-900 "
        style={{ width: `${percentage}%` }}
      >
        {percentage}%
      </div>
    </div>
  )
}

export default UploadProgress
