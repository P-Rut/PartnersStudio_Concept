const InquiriesTable: React.FC = () => {
  return (
    <thead className=" text-indigo-900 uppercase bg-indigo-50 pt-20 text-xs font-light underline underline-offset-2">
      <tr>
        <th className="p-4 w-20">Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>City</th>
        {/* <th className="p-3 ">Address</th>
        <th className="p-3 ">Contact</th>
        <th className="p-3 ">Stage</th> */}
        <th>Type</th>
        <th>Contructor</th>
        <th className="w-20">More</th>

        <th className="w-20">CTA</th>
      </tr>
    </thead>
  )
}

export default InquiriesTable
