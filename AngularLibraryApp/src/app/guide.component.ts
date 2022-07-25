import { Component } from '@angular/core';

@Component({

  template: `
    <h4>Help</h4>
    <hr style="max-width: 5%;">
    <p>This is the Help Page. Please read below carefully and navigate around the application.</p>
    <ul style="list-style: none">
      <li>To add a new book, click on the big green 'Add Book' button and fill out the form.</li>
      <li>To edit a book, click on the big green 'Edit Books' button and edit the desired book.</li>
      <li>To delete a book, click on the big green 'Delete Books' button and delete the desired book.</li>
      <li>To see the list of the books, click on the big green 'List Books' button.</li>
  </ul>
`
})
export class GuideComponent {

}