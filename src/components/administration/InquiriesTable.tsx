const InquiriesTable: React.FC = () => {
  return (
    <thead className=" text-indigo-900 uppercase bg-indigo-50 pt-20 text-xs font-light underline underline-offset-2">
      <tr>
        <th className="p-3 w-10">Id</th>
        <th className="p-3 w-32">Name</th>
        <th className="p-3 ">Email</th>
        <th className="p-3 ">Phone</th>
        <th className="p-3 ">City</th>
        <th className="p-3 ">Address</th>
        <th className="p-3 ">Contact</th>
        <th className="p-3 ">Stage</th>
        <th className="p-3 ">Type</th>
        <th className="p-3 ">Contructor</th>
        <th className="p-3 ">More</th>

        <th className="p-3 ">CTA</th>
      </tr>
    </thead>
  )
}

export default InquiriesTable
