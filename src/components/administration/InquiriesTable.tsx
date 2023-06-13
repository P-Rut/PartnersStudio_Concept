const InquiriesTable: React.FC = () => {
  return (
    <thead className="w-full text-indigo-900 uppercase bg-indigo-50 pt-20 text-sm font-light underline underline-offset-2">
      <tr>
        <th className="p-3 w-30 bg-indigo-300">Client's id</th>
        <th className="p-3 w-52 bg-red-200">Name</th>
        <th className="p-3 w-52">Email</th>
        <th className="p-3 w-52">Phone</th>
        <th className="p-3 w-52">City</th>
        <th className="p-3 w-52">Address</th>
        <th className="p-3 w-52">Contact</th>
        <th className="p-3 w-52"> Stage</th>
        <th className="p-3 w-52">Type</th>
        <th className="p-3 w-52">Contructor</th>
        <th className="p-3 w-52">Additional Info</th>
        <th className="p-3 w-52">Photos</th>
        <th className="p-3 w-30">CTA</th>
      </tr>
    </thead>
  )
}

export default InquiriesTable
