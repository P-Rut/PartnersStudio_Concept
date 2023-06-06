"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Inquiriy } from "../../../types/FormData"

export const columns: ColumnDef<Inquiriy>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "contact_preference",
    header: "Contact",
  },
  {
    accessorKey: "project_level",
    header: "Stage",
  },
  {
    accessorKey: "project_type",
    header: "Type",
  },
  {
    accessorKey: "contractor",
    header: "Contractor",
  },
  {
    accessorKey: "additional_info",
    header: "Additional Info",
  },
  {
    accessorKey: "photos",
    header: "Photos",
  },
]
