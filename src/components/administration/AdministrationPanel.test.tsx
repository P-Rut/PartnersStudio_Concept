import {
  render,
  screen,
  cleanup,
  prettyDOM,
  act,
  waitFor,
} from "@testing-library/react"

import AdministrationPanel from "./AdministrationPanel"
const axios = require("axios")
jest.mock("axios")

describe("Administration Panel Component", () => {
  describe("when info given from api", () => {
    test("shows correct number of inquiries", async () => {
      const mockedInquiries = {
        data: {
          data: [
            {
              id: 1,
              attributes: { name: "XXX", email: "xxxx@xxx.com", photos: [] },
            },
            {
              id: 2,
              attributes: { name: "XXX2", email: "xxxx2@xxx.com", photos: [] },
            },
            {
              id: 3,
              attributes: { name: "XXX3", email: "xxxx3@xxx.com", photos: [] },
            },
          ],
        },
      }

      await act(async () => {
        await axios.get.mockImplementationOnce(() =>
          Promise.resolve(mockedInquiries)
        )
        render(<AdministrationPanel />)
      })

      const rows = screen.getAllByRole("row")
      expect(rows.length).toBe(mockedInquiries.data.data.length + 1)
    })
  })
})
