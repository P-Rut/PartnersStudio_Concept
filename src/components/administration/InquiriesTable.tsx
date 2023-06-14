const InquiriesTable: React.FC = () => {
  return (
    <thead className=" text-indigo-900 uppercase bg-indigo-50 pt-20 text-xs font-light underline underline-offset-2">
      <tr>
        <th className="p-3 ">Client's id</th>
        <th className="p-3 ">Name</th>
        <th className="p-3 ">Email</th>
        <th className="p-3 ">Phone</th>
        <th className="p-3 ">City</th>
        <th className="p-3 ">Address</th>
        <th className="p-3 ">Contact</th>
        <th className="p-3 "> Stage</th>
        <th className="p-3 ">Type</th>
        <th className="p-3 ">Contructor</th>
        <th className="p-3 ">Description and Photos</th>

        <th className="p-3 ">CTA</th>
      </tr>
    </thead>
  )
}

export default InquiriesTable
