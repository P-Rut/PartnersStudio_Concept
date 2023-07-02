import { render, screen, cleanup, prettyDOM } from "@testing-library/react"
import Inquiry from "../administration/Inquiry"

describe("Inquiry component", () => {
  test("should render inquiry component with given id", () => {
    //Given
    const item = {
      photos: {},
      id: 1,
    }
    const id = 1

    //When
    const { container } = render(<Inquiry item={item} id={id} />)
    // const InquiryElement = screen.getByTestId("inquiry-1")

    // Then
  })
})
