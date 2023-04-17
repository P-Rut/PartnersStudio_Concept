const DescriptionInput: React.FC = () => {
  return (
    <div className="py-2 border-solid border mb-5 ml-5 w-6/12 border-black bg-white">
      <textarea
        className="px-7 block min-h-[auto] w-full text-black text-xl font-thin placeholder:text-black  "
        id="description"
        rows={6}
        placeholder="Don't see what you want ? &#10;
        Describe your project and how may we help you here:
        "
      ></textarea>
    </div>
  )
}

export default DescriptionInput
