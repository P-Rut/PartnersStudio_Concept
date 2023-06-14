import { render, screen, cleanup } from "@testing-library/react"
import Inquiry from "./Inquiry"

describe("should render inquiry component", () => {
  it("renders it", () => {
    render(<Inquiry />)
    const InquiryElement = screen.getByTestId("inquiry-1")
    expect(InquiryElement).toBeInTheDocument()
  })
})
