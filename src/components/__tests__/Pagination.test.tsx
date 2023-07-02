import { prettyDOM, render, screen } from "@testing-library/react"
import Pagination from "../administration/Pagination"

test("on initial render the previous button is disabled", async () => {
  const { container } = render(<Pagination currentPage={1} />)
  // pokaza{container, rerender}nie html tego komponentu w konosli przy teście ?
  //console.log(prettyDOM(container))

  expect(await screen.findByRole("button", { name: /Previous/ })).toBeDisabled()
})

// test("if page is changed the previous button becomes enabled", async () => {
//   const prevMethod = jest.fn()
//   const { container } = render(<Pagination prev={prevMethod} currentPage={1} />)
//   console.log(prettyDOM(container))
//   // znajdujesz przycisk
//   // sprawdzasz ze metoda prev nie zostala wywolana
//   await (await screen.findByRole("button", { name: /Previous/ })).click()
//   expect(prevMethod).not.toBeCalled()
// })
