import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="clipboard"
export default class extends Controller {
  static targets = [ "source", "output" ]
  //v1 - with a button, using the browswer Clipboard API
  copy_old() {
    navigator.clipboard.writeText(this.sourceTarget.value)
  }

  //v2 - copy action attached to <a> link, input from a <textarea>
  copy(event) {
    event.preventDefault()
    this.sourceTarget.select()
    document.execCommand("copy")
    this.outputTarget.textContent =
    `${this.sourceTarget.value} text coppied to your clipboard! 🎉`
  }
}
