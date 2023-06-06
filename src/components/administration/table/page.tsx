import { DataTable } from "./data-table"
import { Inquiriy } from "../../../types/FormData"
import { columns } from "../table/columns"
import { useEffect, useState } from "react"
import axios from "axios"
const backendUrl = "https://strapi-km.herokuapp.com"

async function getData(): Promise<Inquiriy[]> {
  // Fetch data from your API here.
  return []
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
